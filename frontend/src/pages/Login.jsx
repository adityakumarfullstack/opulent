import { useState } from "react"
import { Link } from "react-router-dom";
import loginImage from '../assets/login.webp'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className="login-page">
            <div className="flex px-3 md:px-0">
                <div className="login-left w-full md:w-1/2 flex flex-center py-8 lg:py-12">
                    <div className="login-left-content border border-gray-200 p-8 shadow rounded-lg">
                        <div className="left-header text-center">
                            <h3 className='text-lg font-medium mb-1'>Opulent</h3>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Hey there!</h2>
                            <p className="text-gray-600 mb-4">Please enter your username and password to login.</p>
                        </div>
                        <form action="" className="flex flex-col gap-4">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="form-input" placeholder="Enter your email address" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="form-input" placeholder="Enter your password" />
                            </div>
                            <button type="submit" className="btn-black">Sign In</button>
                        </form>
                        <div className="left-bottom text-center">
                            <p className="text-sm text-gray-600 mt-4">Don't have an account? <Link to="/register" className="text-black font-medium hover:underline">Sign up</Link></p>
                            <p className="text-sm text-gray-600 mt-2">Forgot your password? <Link to="/forgot-password" className="text-black font-medium hover:underline">Reset password</Link></p>
                        </div>
                    </div>
                </div>
                <div className="login-right hidden md:block w-1/2 bg-gray-800">
                    <div className="login-right-content h-full flex items-center justify-center">
                        <img src={loginImage} alt="login image" className="h-[750px] w-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login