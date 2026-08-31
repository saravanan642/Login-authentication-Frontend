import React, { useState } from "react";

const OTP = () => {

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    const [otpSent, setOtpSent] = useState(false);


    // Send OTP
    const handleSendOtp = () => {

        if (!email) {
            alert("Please enter your email");
            return;
        }

        setOtpSent(true);

        console.log("OTP sent to:", email);
    };


    // Verify OTP
    const handleVerifyOtp = (e) => {

        e.preventDefault();

        if (!otp) {
            alert("Please enter OTP");
            return;
        }

        console.log("Entered OTP:", otp);

        alert("OTP Verified Successfully");
    };


    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">

            <div className="w-full max-w-lg">

                {/* Logo */}
                <div className="text-center mb-8">

                    <div className="w-14 h-14 mx-auto bg-indigo-600 rounded-xl flex items-center justify-center">

                        <span className="text-2xl font-bold text-white">
                            N
                        </span>

                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mt-5">
                        Verify Your Email
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Verify your email address to continue
                    </p>

                </div>


                {/* Card */}
                <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">

                    {/* Email */}
                    <div>

                        <label className="block text-base font-medium text-gray-700 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-5 py-3.5 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                        />

                    </div>


                    {/* Send OTP Button */}
                    <button
                        type="button"
                        onClick={handleSendOtp}
                        className="w-full mt-5 py-3.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                    >
                        Send OTP
                    </button>


                    {/* OTP Section */}
                    {otpSent && (

                        <div className="mt-8">

                            <div className="border-t border-gray-200 pt-7">

                                <h2 className="text-xl font-semibold text-gray-900">
                                    Enter Verification Code
                                </h2>

                                <p className="text-sm text-gray-500 mt-2">
                                    We've sent a 6-digit OTP to your email.
                                </p>


                                {/* OTP Input */}
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => {
                                        const value = e.target.value;

                                        if (/^\d{0,6}$/.test(value)) {
                                            setOtp(value);
                                        }
                                    }}
                                    placeholder="Enter 6-digit OTP"
                                    maxLength="6"
                                    className="w-full mt-5 px-5 py-4 text-center text-xl tracking-[8px] border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                                />


                                {/* Verify OTP */}
                                <button
                                    type="button"
                                    onClick={handleVerifyOtp}
                                    className="w-full mt-5 py-3.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                                >
                                    Verify OTP
                                </button>


                                {/* Resend */}
                                <p className="text-center text-sm text-gray-500 mt-5">

                                    Didn't receive the code?

                                    <button
                                        type="button"
                                        onClick={handleSendOtp}
                                        className="ml-1 text-indigo-600 font-semibold hover:text-indigo-700"
                                    >
                                        Resend OTP
                                    </button>

                                </p>

                            </div>

                        </div>

                    )}

                </div>


                {/* Bottom */}
                <p className="text-center text-xs text-gray-400 mt-6">
                    Your OTP is valid for a limited time.
                </p>

            </div>

        </div>
    );
};

export default OTP;