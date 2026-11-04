import mongoose from 'mongoose';
import dotenv from 'dotenv';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Function to seed the database
const seedDatabase = async () => {
    try {
        // Delete existing data
        await Product.deleteMany({});
        await User.deleteMany({});

        // Create a default admin user
        const adminUser = await User.create({
            name: 'Admin User',
            email: 'admin@example.com',
            password: 'password123',
            role: 'admin',
        });

        // Assign the deault user ID to each products
        const userID = adminUser._id;
        
        //Sample products data
        const sampleProducts = products.map(product => {
            return { ...product, user: userID };
        });

        // Insert sample products into the database
        await Product.insertMany(sampleProducts);
        console.log('Products data seeded successfully');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedDatabase();