import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-white">

            {/* Hero */}
            <section className="min-h-[650px] bg-gray-50 flex items-center">

                <div className="max-w-7xl mx-auto px-8 w-full">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left */}
                        <div>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">

                                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>

                                Secure Learning Platform

                            </div>


                            <h1 className="mt-6 text-5xl md:text-6xl font-bold text-gray-900 leading-tight">

                                Your journey to

                                <br />

                                <span className="text-indigo-600">
                                    better learning
                                </span>

                                <br />

                                starts here.

                            </h1>


                            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">

                                NVKS helps you create a secure account, verify your
                                identity and access a simple learning experience
                                designed for your growth.

                            </p>


                            <div className="mt-8 flex items-center gap-4">

                                {/* Create Account */}
                                <Link
                                    to="/register"
                                    className="inline-block px-7 py-3.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
                                >
                                    Create Account →
                                </Link>


                                {/* Explore Platform */}
                                <button
                                    className="px-7 py-3.5 text-gray-700 font-semibold hover:text-indigo-600 transition"
                                >
                                    Explore Platform
                                </button>

                            </div>

                        </div>


                        {/* Right */}
                        <div className="relative">

                            <div className="bg-indigo-600 rounded-[35px] p-8 md:p-10">

                                <div className="bg-white rounded-[25px] p-7 shadow-2xl">

                                    {/* Top */}
                                    <div className="flex justify-between items-center">

                                        <div>

                                            <p className="text-sm text-gray-400">
                                                NVKS Platform
                                            </p>

                                            <h2 className="text-2xl font-bold text-gray-900 mt-1">
                                                Welcome Back!
                                            </h2>

                                        </div>


                                        <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">

                                            <span className="text-xl">
                                                N
                                            </span>

                                        </div>

                                    </div>


                                    {/* Progress */}
                                    <div className="mt-8">

                                        <div className="flex justify-between mb-2">

                                            <span className="text-sm text-gray-500">
                                                Your Progress
                                            </span>

                                            <span className="text-sm font-semibold text-indigo-600">
                                                75%
                                            </span>

                                        </div>


                                        <div className="w-full h-2 bg-gray-200 rounded-full">

                                            <div className="w-3/4 h-2 bg-indigo-600 rounded-full"></div>

                                        </div>

                                    </div>


                                    {/* Cards */}
                                    <div className="grid grid-cols-2 gap-4 mt-8">

                                        <div className="p-5 bg-gray-50 rounded-2xl">

                                            <div className="text-2xl">
                                                📚
                                            </div>

                                            <h3 className="font-bold text-gray-800 mt-3">
                                                Learning
                                            </h3>

                                            <p className="text-sm text-gray-500 mt-1">
                                                Improve skills
                                            </p>

                                        </div>


                                        <div className="p-5 bg-gray-50 rounded-2xl">

                                            <div className="text-2xl">
                                                🔐
                                            </div>

                                            <h3 className="font-bold text-gray-800 mt-3">
                                                Security
                                            </h3>

                                            <p className="text-sm text-gray-500 mt-1">
                                                Stay protected
                                            </p>

                                        </div>

                                    </div>


                                    {/* Verification */}
                                    <div className="mt-4 p-5 border border-green-100 bg-green-50 rounded-2xl">

                                        <div className="flex items-center gap-3">

                                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                ✓
                                            </div>


                                            <div>

                                                <h3 className="font-semibold text-gray-800">
                                                    Account Verified
                                                </h3>

                                                <p className="text-sm text-gray-500">
                                                    Email verification completed
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Stats */}
            <section className="py-16 border-b border-gray-100">

                <div className="max-w-6xl mx-auto px-8">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

                        <div>

                            <h2 className="text-3xl font-bold text-indigo-600">
                                100%
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Secure
                            </p>

                        </div>


                        <div>

                            <h2 className="text-3xl font-bold text-indigo-600">
                                24/7
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Access
                            </p>

                        </div>


                        <div>

                            <h2 className="text-3xl font-bold text-indigo-600">
                                OTP
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Verification
                            </p>

                        </div>


                        <div>

                            <h2 className="text-3xl font-bold text-indigo-600">
                                Easy
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Experience
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Features */}
            <section className="py-24">

                <div className="max-w-7xl mx-auto px-8">

                    <div className="max-w-2xl">

                        <p className="text-indigo-600 font-semibold">
                            WHY CHOOSE NVKS
                        </p>

                        <h2 className="text-4xl font-bold text-gray-900 mt-3">
                            Everything made simple
                        </h2>

                        <p className="text-gray-500 mt-4 text-lg">
                            A clean platform with the essential features you need
                            for a smooth and secure experience.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-3 gap-6 mt-12">

                        {/* Feature 1 */}
                        <div className="group p-8 rounded-3xl bg-gray-50 hover:bg-indigo-600 transition duration-300">

                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                                🔐
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mt-6">
                                Secure Authentication
                            </h3>

                            <p className="text-gray-500 group-hover:text-indigo-100 mt-3 leading-7">
                                Protect your account with a secure authentication
                                and verification process.
                            </p>

                        </div>


                        {/* Feature 2 */}
                        <div className="group p-8 rounded-3xl bg-gray-50 hover:bg-indigo-600 transition duration-300">

                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                                📧
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mt-6">
                                Email OTP
                            </h3>

                            <p className="text-gray-500 group-hover:text-indigo-100 mt-3 leading-7">
                                Verify your email quickly using a secure one-time
                                password.
                            </p>

                        </div>


                        {/* Feature 3 */}
                        <div className="group p-8 rounded-3xl bg-gray-50 hover:bg-indigo-600 transition duration-300">

                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                                🚀
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mt-6">
                                Easy Experience
                            </h3>

                            <p className="text-gray-500 group-hover:text-indigo-100 mt-3 leading-7">
                                Simple and user-friendly design that makes
                                everything easy to access.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="px-8 pb-24">

                <div className="max-w-7xl mx-auto bg-gray-900 rounded-[30px] px-8 py-16 text-center">

                    <p className="text-indigo-400 font-semibold">
                        GET STARTED
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
                        Ready to begin?
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Create your account today and experience a simple,
                        secure and modern platform.
                    </p>


                    {/* Register */}
                    <Link
                        to="/register"
                        className="inline-block mt-8 px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-sm"
                    >
                        Create Account
                    </Link>

                </div>

            </section>

        </div>
    );
};

export default Home;