import React, { useState } from "react";

const OTP = () => {

  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("OTP:", otp);
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

        </div>


        {/* OTP Card */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">

          <div className="text-center">

            <h1 className="text-3xl font-bold text-gray-900">
              Verify Your Email
            </h1>

            <p className="text-gray-500 mt-3 leading-6">
              We have sent a verification code to your email address.
              Please enter the OTP below to continue.
            </p>

          </div>


          {/* OTP Form */}
          <form onSubmit={handleSubmit} className="mt-8">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enter OTP
            </label>

            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit OTP"
              maxLength="6"
              required
              className="w-full px-5 py-4 text-center text-xl tracking-[8px] border border-gray-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />


            {/* Verify Button */}
            <button
              type="submit"
              className="w-full mt-6 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              Verify OTP
            </button>

          </form>


          {/* Resend */}
          <div className="text-center mt-6">

            <p className="text-sm text-gray-500">
              Didn't receive the code?
            </p>

            <button
              type="button"
              className="mt-2 text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Resend OTP
            </button>

          </div>


          {/* Back */}
          <div className="text-center mt-5">

            <button
              type="button"
              className="text-sm text-gray-500 hover:text-indigo-600"
            >
              ← Back to Create Account
            </button>

          </div>

        </div>


        {/* Bottom Text */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Your verification code is valid for a limited time.
        </p>

      </div>

    </div>
  );
};

export default OTP;