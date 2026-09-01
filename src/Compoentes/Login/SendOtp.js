import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTP = () => {

    // Create Account-la save panna full data
    const signupData = JSON.parse(
        localStorage.getItem("signupData")
    );

    // Email automatic-ah varum
    const [email, setEmail] = useState(
        signupData?.email || ""
    );

    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const navigate = useNavigate();


  
    // SEND OTP
  
    const handleSendOtp = async () => {

        if (!email) {
            alert("Email not found");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:8000/send-OTP",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        email: email,
                    }),
                }
            );

            const data = await response.json();

            console.log(data);

            if (response.ok) {

                alert(data.message);

                setOtpSent(true);

            } else {

                alert(data.message || "OTP sending failed");

            }

        } catch (error) {

            console.log(error);
            alert("Server Error");

        }
    };

    // VERIFY OTP
    
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!otp) {
            alert("Please enter OTP");
            return;
        }

        if (otp.length !== 6) {
            alert("Please enter 6 digit OTP");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:8000/verify-otp",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        email: email,
                        otp: otp,
                    }),
                }
            );

            const data = await response.json();

            console.log(data);

            if (response.ok) {

                alert(data.message);

                // OTP verified successfully
                navigate("/login");

            } else {

                alert(data.message || "Invalid OTP");

            }

        } catch (error) {

            console.log(error);
            alert("Server Error");

        }
    };

    // UI

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
                            readOnly
                            className="w-full px-5 py-3.5 border border-gray-300 rounded-lg outline-none bg-gray-50"
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
                                    maxLength={6}
                                    className="w-full mt-5 px-5 py-4 text-center text-xl tracking-[8px] border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                                />


                                {/* Verify OTP */}
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="w-full mt-5 py-3.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                                >
                                    Verify OTP
                                </button>


                                {/* Resend OTP */}
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