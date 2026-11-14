import express from 'express';
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';
import { get } from 'mongoose';

const router = express.Router();

// Helper function to get the cart for a guest or a logged-in user
const getCart = async (guestId, userId) => {
    if (guestId) {
        let cart = await Cart.findOne({ guestId });
        return cart;
    } else if (userId) {
        let cart = await Cart.findOne({ user: userId });
        return cart;
    }
    return null;
};

// @route POST /api/cart
// @desc Add a product to the cart for a guest or a logged-in user
// @access Public
router.post('/', async (req, res) => {
    try {
        const { productId, size, color, quantity, guestId,  userId } = req.body;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Determine if the user is a guest or a logged-in user
        let cart = await getCart(guestId, userId);

        // If the cart exists, update it
        if (cart) {
            const productIndex = cart.cartItems.findIndex(item => item.productId.toString() === productId && item.size === size && item.color === color);
            if (productIndex !== -1) {
                cart.cartItems[productIndex].quantity += quantity;
            } else {
                cart.cartItems.push({ productId, name: product.name, image: product.images, price: product.price, size, color, quantity });
            }
            cart.totalPrice += product.price * quantity;
            // cart.totalPrice = cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            await cart.save();
            return res.status(200).json(cart);
        } else {
            // If the cart doesn't exist, create a new one
            const newCart = await Cart.create({
                user: userId? userId: null,
                guestId: guestId ? guestId : "guest_" + new Date().getTime(),
                cartItems: [{ productId, name: product.name, image: product.images[0].url, price: product.price, size, color, quantity }],
                totalPrice: product.price * quantity
            })
            return res.status(201).json(newCart);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route PUT /api/cart
// @desc Update the quantity of a product in the cart for a guest or a logged-in user
// @access Public
router.put('/', async (req, res) => {
    try {
        const { productId, size, color, quantity, guestId, userId } = req.body;
        let cart = await getCart(guestId, userId);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        const productIndex = cart.cartItems.findIndex(item => item.productId.toString() === productId && item.size === size && item.color === color);
        if (productIndex > -1) {
            // Update the quantity of the product in the cart
            if (quantity > 0) {
                cart.cartItems[productIndex].quantity = quantity;
                cart.totalPrice = cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
                await cart.save();
                return res.status(200).json(cart);
            } else {
                cart.cartItems.splice(productIndex, 1);
            }
        } else {
            return res.status(404).json({ message: 'Product not found in cart' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})

// @route DELETE /api/cart
// @desc Remove a product from the cart
// @access Public
router.delete('/', async (req, res) => {
    try {
        const { productId, size, color, guestId, userId } = req.body;
        let cart = await getCart(guestId, userId);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        const productIndex = cart.cartItems.findIndex(item => item.productId.toString() === productId && item.size === size && item.color === color);
        if (productIndex > -1) {
            cart.cartItems.splice(productIndex, 1);
            cart.totalPrice = cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: 'Product not found in cart' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})

// @route GET /api/cart
// @desc Get the cart of a guest or a logged-in user
// @access Public
router.get('/', async (req, res) => {
    try {
        const { guestId, userId } = req.query;
        let cart = await getCart(guestId, userId);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        return res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})

// @route POST /api/cart/merge
// @desc Merge the cart of a guest user into the cart of logged-in user
// @access Public
router.post('/merge', async (req, res) => {
    try {
        const { guestId } = req.body;
        const guestCart = await Cart.findOne({ guestId });
        const userCart = await Cart.findOne({ user: req.user._id });
        if (guestCart) {
            if (guestCart.cartItems.length === 0) {
                return res.status(400).json({ message: 'Guest cart is empty' });
            }

            if (userCart) {
                //Merge the guest cart into the user cart
                guestCart.cartItems.forEach(item => {
                    const productIndex = userCart.cartItems.findIndex(userItem => userItem.productId.toString() === item.productId.toString() && userItem.size === item.size && userItem.color === item.color);

                    if (productIndex > -1) {
                        // If the product already exists in the user cart, update the quantity of the product in the cart
                        userCart.cartItems[productIndex].quantity += item.quantity;
                    } else {
                        // Otherwise, add the guest item to the user cart
                        userCart.cartItems.push(item);
                    }

                });
                userCart.totalPrice = userCart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
                await userCart.save();

                // Delete the guest cart after merging
                try {
                    await Cart.deleteOne({ guestId });
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ message: 'Error deleting guest cart' });
                }

               res.status(200).json(userCart);
            } else {
                // If the user has no existing cart, assign the guest cart to the user
                guestCart.user = req.user._id;
                guestCart.guestId = undefined;
                await guestCart.save();
               res.status(200).json(guestCart);
            }
        }
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})

export default router;