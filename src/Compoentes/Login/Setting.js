import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-10">

            <div className="max-w-3xl mx-auto">

                {/* Header */}

                <div className="mb-8">

                    <h1 className="text-3xl font-bold text-gray-800">
                        Settings
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage your account, preferences and security
                    </p>

                </div>


                {/* Account */}

                <div className="bg-white rounded-2xl shadow-md mb-6 overflow-hidden">

                    <div className="px-6 py-5 border-b border-gray-200">

                        <h2 className="text-lg font-semibold text-gray-800">
                            Account
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Manage your personal account information
                        </p>

                    </div>


                    {/* Profile */}

                    <div
                        className="px-6 py-5 flex items-center justify-between
                        hover:bg-gray-50 cursor-pointer transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-blue-100
                            flex items-center justify-center text-2xl">
                                👤
                            </div>

                            <div>

                                <h3 className="font-semibold text-gray-800">
                                    Profile
                                </h3>

                                <p className="text-sm text-gray-500">
                                    View and update your profile information
                                </p>

                            </div>

                        </div>

                        <span className="text-gray-400 text-xl">
                            →
                        </span>

                    </div>


                    {/* Reset Password */}

                    <div
                        onClick={() => navigate("/reset-password")}
                        className="px-6 py-5 flex items-center justify-between
                        hover:bg-gray-50 cursor-pointer transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-purple-100
                            flex items-center justify-center text-2xl">
                                🔐
                            </div>

                            <div>

                                <h3 className="font-semibold text-gray-800">
                                    Reset Password
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Change your account password
                                </p>

                            </div>

                        </div>

                        <span className="text-gray-400 text-xl">
                            →
                        </span>

                    </div>

                </div>


                {/* Preferences */}

                <div className="bg-white rounded-2xl shadow-md mb-6 overflow-hidden">

                    <div className="px-6 py-5 border-b border-gray-200">

                        <h2 className="text-lg font-semibold text-gray-800">
                            Preferences
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Customize your application experience
                        </p>

                    </div>


                    {/* Notifications */}

                    <div
                        className="px-6 py-5 flex items-center justify-between
                        hover:bg-gray-50 cursor-pointer transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-yellow-100
                            flex items-center justify-center text-2xl">
                                🔔
                            </div>

                            <div>

                                <h3 className="font-semibold text-gray-800">
                                    Notifications
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Manage email and application notifications
                                </p>

                            </div>

                        </div>

                        <span className="text-gray-400 text-xl">
                            →
                        </span>

                    </div>


                    {/* Language */}

                    <div
                        className="px-6 py-5 flex items-center justify-between
                        hover:bg-gray-50 cursor-pointer transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-green-100
                            flex items-center justify-center text-2xl">
                                🌐
                            </div>

                            <div>

                                <h3 className="font-semibold text-gray-800">
                                    Language
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Choose your preferred language
                                </p>

                            </div>

                        </div>

                        <span className="text-gray-500 text-sm">
                            English →
                        </span>

                    </div>


                    {/* Appearance */}

                    <div
                        className="px-6 py-5 flex items-center justify-between
                        hover:bg-gray-50 cursor-pointer transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-pink-100
                            flex items-center justify-center text-2xl">
                                🎨
                            </div>

                            <div>

                                <h3 className="font-semibold text-gray-800">
                                    Appearance
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Customize the look and feel
                                </p>

                            </div>

                        </div>

                        <span className="text-gray-500 text-sm">
                            Light →
                        </span>

                    </div>

                </div>


                {/* Security & Privacy */}

                <div className="bg-white rounded-2xl shadow-md mb-6 overflow-hidden">

                    <div className="px-6 py-5 border-b border-gray-200">

                        <h2 className="text-lg font-semibold text-gray-800">
                            Security & Privacy
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Protect your account and personal information
                        </p>

                    </div>


                    {/* Security */}

                    <div
                        className="px-6 py-5 flex items-center justify-between
                        hover:bg-gray-50 cursor-pointer transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-red-100
                            flex items-center justify-center text-2xl">
                                🛡️
                            </div>

                            <div>

                                <h3 className="font-semibold text-gray-800">
                                    Security
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Manage account security settings
                                </p>

                            </div>

                        </div>

                        <span className="text-gray-400 text-xl">
                            →
                        </span>

                    </div>


                    {/* Privacy */}

                    <div
                        className="px-6 py-5 flex items-center justify-between
                        hover:bg-gray-50 cursor-pointer transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-indigo-100
                            flex items-center justify-center text-2xl">
                                🔒
                            </div>

                            <div>

                                <h3 className="font-semibold text-gray-800">
                                    Privacy
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Manage your privacy settings
                                </p>

                            </div>

                        </div>

                        <span className="text-gray-400 text-xl">
                            →
                        </span>

                    </div>

                </div>


                {/* Support */}

                <div className="bg-white rounded-2xl shadow-md mb-6 overflow-hidden">

                    <div className="px-6 py-5 border-b border-gray-200">

                        <h2 className="text-lg font-semibold text-gray-800">
                            Support
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Need help? We are here for you
                        </p>

                    </div>


                    {/* Help */}

                    <div
                        className="px-6 py-5 flex items-center justify-between
                        hover:bg-gray-50 cursor-pointer transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-cyan-100
                            flex items-center justify-center text-2xl">
                                ❓
                            </div>

                            <div>

                                <h3 className="font-semibold text-gray-800">
                                    Help & Support
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Get help or contact our support team
                                </p>

                            </div>

                        </div>

                        <span className="text-gray-400 text-xl">
                            →
                        </span>

                    </div>


                    {/* About */}

                    <div
                        className="px-6 py-5 flex items-center justify-between
                        hover:bg-gray-50 cursor-pointer transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-gray-100
                            flex items-center justify-center text-2xl">
                                ℹ️
                            </div>

                            <div>

                                <h3 className="font-semibold text-gray-800">
                                    About
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Application information and version
                                </p>

                            </div>

                        </div>

                        <span className="text-gray-500 text-sm">
                            v1.0.0
                        </span>

                    </div>

                </div>


                {/* Logout */}

                <div
                    className="bg-white rounded-2xl shadow-md overflow-hidden"
                >

                    <div
                        className="px-6 py-5 flex items-center justify-between
                        hover:bg-red-50 cursor-pointer transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-red-100
                            flex items-center justify-center text-2xl">
                                🚪
                            </div>

                            <div>

                                <h3 className="font-semibold text-red-600">
                                    Logout
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Sign out from your account
                                </p>

                            </div>

                        </div>

                        <span className="text-red-400 text-xl">
                            →
                        </span>

                    </div>

                </div>


                {/* Footer */}

                <div className="text-center mt-8 mb-4">

                    <p className="text-sm text-gray-400">
                        © 2026 NVKS Pvt. Ltd.
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                        Secure Learning Platform
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Settings;