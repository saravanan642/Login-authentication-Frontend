import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Resetpassword = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // SEND OTP
    const handleSendOtp = async () => {
        try {
            setMessage("");
            setSuccess(false);

            if (!email) {
                setMessage("Please enter your email");
                return;
            }

            setLoading(true);

            const response = await fetch(
                "http://localhost:8000/send-OTP",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        purpose: "resetpassword",
                    }),
                }
            );

            const data = await response.json();

            setSuccess(data.success);
            setMessage(data.message);

        } catch (error) {
            console.log(error);

            setSuccess(false);
            setMessage("Network error");
        } finally {
            setLoading(false);
        }
    };


    // RESET PASSWORD
    const handleResetPassword = async (e) => {
        e.preventDefault();

        setMessage("");
        setSuccess(false);

        // All fields check
        if (
            !email ||
            !otp ||
            !currentPassword ||
            !newPassword ||
            !confirmPassword
        ) {
            setMessage("All fields are required");
            return;
        }

        // New password and confirm password check
        if (newPassword !== confirmPassword) {
            setMessage("Password is not match");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:8000/reset-password",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        otp: otp,
                        currentPassword: currentPassword,
                        newPassword: newPassword,
                        confirmPassword: confirmPassword,
                    }),
                }
            );

            const data = await response.json();

            setSuccess(data.success);
            setMessage(data.message);

            if (data.success) {
                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            }

        } catch (error) {
            console.log(error);

            setSuccess(false);
            setMessage("Network error");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                {/* Heading */}

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Reset Password
                </h2>

                <p className="text-center text-gray-500 mb-8">
                    Enter your details to reset your password
                </p>


                {/* Email */}

                <div className="mb-4">

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                </div>


                {/* OTP */}

                <div className="mb-4">

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        OTP
                    </label>

                    <div className="flex gap-2">

                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg
                            focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <button
                            type="button"
                            onClick={handleSendOtp}
                            disabled={loading}
                            className="px-4 py-3 bg-indigo-600 text-white rounded-lg
                            font-semibold hover:bg-indigo-700
                            disabled:bg-gray-400 transition"
                        >
                            {loading ? "Sending..." : "Send OTP"}
                        </button>

                    </div>

                </div>


                {/* Old Password */}

                <div className="mb-4">

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Old Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter old password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                </div>


                {/* New Password */}

                <div className="mb-4">

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                </div>


                {/* Confirm Password */}

                <div className="mb-6">

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                </div>


                {/* Reset Password Button */}

                <button
                    type="button"
                    onClick={handleResetPassword}
                    disabled={loading}
                    className="w-full py-3 bg-indigo-600 text-white rounded-lg
                    font-semibold hover:bg-indigo-700
                    disabled:bg-gray-400 transition"
                >
                    {loading ? "Resetting..." : "Reset Password"}
                </button>


                {/* Message */}

                {message && (
                    <p
                        className={`text-center mt-5 font-medium ${success
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                    >
                        {message}
                    </p>
                )}


                {/* Back to Login */}

                <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="w-full mt-5 text-indigo-600 hover:text-indigo-800"
                >
                    Back to Login
                </button>

            </div>

        </div>
    );
};

export default Resetpassword;