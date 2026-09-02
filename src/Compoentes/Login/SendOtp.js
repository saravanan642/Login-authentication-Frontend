import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTP = () => {

    // Create Account-la save panna data
    const signupData = JSON.parse(
        localStorage.getItem("signupData") || "{}"
    );

    // Email automatic-ah varum
    const [email] = useState(signupData.email || "");

    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    // SEND OTP //


    const handleSendOtp = async () => {

        if (!email) {
            alert("Email not found. Please create your account again.");
            return;
        }

        try {

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
                    }),
                }
            );

            const data = await response.json();

            console.log("Send OTP Response:", data);

            if (response.ok) {

                alert(data.message || "OTP sent successfully");

                setOtpSent(true);

            } else {

                alert(
                    data.message || "OTP sending failed"
                );

            }

        } catch (error) {

            console.error("Send OTP Error:", error);

            alert("Server Error. Please try again.");

        } finally {

            setLoading(false);

        }
    };



    // VERIFY OTP //

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            alert("Email not found");
            return;
        }

        if (!otp) {
            alert("Please enter OTP");
            return;
        }

        if (otp.length !== 6) {
            alert("Please enter 6 digit OTP");
            return;
        }

        // Check signup data
        console.log("Signup Data:", signupData);
        console.log("Entered OTP:", otp);

        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:8000/verify-otp",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        name: signupData.name,
                        email: signupData.email,
                        password: signupData.newpassword,
                        contact: signupData.contact,
                        age: signupData.age,
                        gender: signupData.gender,
                        address: signupData.address,
                        city: signupData.city,
                        state: signupData.state,
                        enteredOTP: otp,
                    }),
                }
            );

            const data = await response.json();

            console.log("Backend Response:", data);

            if (response.ok && data.success) {

                alert(data.message || "Account created successfully");

                // Remove signup data after successful account creation
                localStorage.removeItem("signupData");

                // Go to login
                navigate("/login");

            } else {

                alert(data.message || "Invalid OTP");

            }

        } catch (error) {

            console.error("Verify OTP Error:", error);

            alert("Server Error. Please try again.");

        } finally {

            setLoading(false);

        }
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
                            readOnly
                            className="w-full px-5 py-3.5 border border-gray-300 rounded-lg outline-none bg-gray-50"
                        />

                    </div>


                    {/* Send OTP Button */}

                    <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={loading}
                        className="w-full mt-5 py-3.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                    >

                        {loading
                            ? "Sending..."
                            : otpSent
                                ? "OTP Sent"
                                : "Send OTP"
                        }

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

                                        const value =
                                            e.target.value;

                                        // Numbers only
                                        if (/^\d{0,6}$/.test(value)) {
                                            setOtp(value);
                                        }

                                    }}
                                    placeholder="Enter 6-digit OTP"
                                    maxLength={6}
                                    inputMode="numeric"
                                    className="w-full mt-5 px-5 py-4 text-center text-xl tracking-[8px] border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                                />


                                {/* Verify OTP Button */}

                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="w-full mt-5 py-3.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                                >

                                    {loading
                                        ? "Verifying..."
                                        : "Verify OTP"
                                    }

                                </button>


                                {/* Resend OTP */}

                                <p className="text-center text-sm text-gray-500 mt-5">

                                    Didn't receive the code?

                                    <button
                                        type="button"
                                        onClick={handleSendOtp}
                                        disabled={loading}
                                        className="ml-1 text-indigo-600 font-semibold hover:text-indigo-700 disabled:opacity-50"
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

