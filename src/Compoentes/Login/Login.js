import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }

        try {

            setLoading(true);

            const response = await fetch(
                "http://localhost:8000/login-account",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                }
            );

            const data = await response.json();

            console.log("Login Response:", data);

            if (response.ok && data.success) {

                alert(data.message || "Login successful");

                const role = data.data.role;

                if (role === "admin") {
                    navigate("/admin");
                } else if (role === "user") {
                    navigate("/user");
                } else {
                    alert("Invalid role");
                }

            } else {

                alert(
                    data.message || "Invalid email and password"
                );

            }

        } catch (error) {

            console.error("Login Error:", error);

            alert("Server Error. Please try again.");

        } finally {

            setLoading(false);

        }
    };


    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">

            <div className="w-full max-w-md">

                {/* Logo */}

                <div className="text-center mb-8">

                    <div className="w-14 h-14 mx-auto bg-indigo-600 rounded-xl flex items-center justify-center">

                        <span className="text-2xl font-bold text-white">
                            N
                        </span>

                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mt-5">
                        Welcome Back
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Login to your account
                    </p>

                </div>


                {/* Login Card */}

                <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">

                    <form onSubmit={handleLogin}>

                        {/* Email */}

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="Enter your email"
                                className="w-full px-5 py-3.5 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                            />

                        </div>


                        {/* Password */}

                        <div className="mt-5">

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                placeholder="Enter your password"
                                className="w-full px-5 py-3.5 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                            />

                        </div>


                        {/* Forgot Password */}

                        <div className="text-right mt-3">

                            <button
                                type="button"
                                onClick={() => navigate("/forgot-password")}
                                className="text-sm text-indigo-600 font-medium hover:text-indigo-700"
                            >
                                Forgot Password?
                            </button>

                        </div>


                        {/* Login Button */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-6 py-3.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                        >

                            {loading
                                ? "Logging in..."
                                : "Login"
                            }

                        </button>

                    </form>


                    {/* Create Account */}

                    <p className="text-center text-sm text-gray-500 mt-6">

                        Don't have an account?

                        <button
                            type="button"
                            onClick={() => navigate("/register")}
                            className="ml-1 text-indigo-600 font-semibold hover:text-indigo-700"
                        >
                            Create Account
                        </button>

                    </p>

                </div>


                {/* Bottom */}

                <p className="text-center text-xs text-gray-400 mt-6">
                    Secure login to your account
                </p>

            </div>

        </div>
    );
};

export default Login;