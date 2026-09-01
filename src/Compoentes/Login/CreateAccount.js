import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        newpassword: "",
        confirmpassword: "",
        contact: "",
        age: "",
        gender: "",
        address: "",
        city: "",
        state: "",
        role: "user"
    });

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Submit Form
    const handleSubmit = (e) => {
        e.preventDefault();

        // Password check
        if (formData.newpassword !== formData.confirmpassword) {
            alert("Passwords do not match");
            return;
        }

        // Save ALL Create Account data
        localStorage.setItem(
            "signupData",
            JSON.stringify(formData)
        );

        console.log("Signup Data:", formData);

        // Go to Send OTP page
        navigate("/otp");
    };

    return (
        <div className="min-h-screen bg-white py-14 px-6">

            <div className="max-w-3xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-10">

                    <h1 className="text-4xl font-bold text-gray-900">
                        Create Account
                    </h1>

                    <p className="text-base text-gray-500 mt-3">
                        Create your account to get started
                    </p>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="border border-gray-200 rounded-2xl p-9"
                >

                    {/* Name */}
                    <div className="mb-6">

                        <label className="block text-base font-medium text-gray-700 mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="w-full px-5 py-3.5 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                        />

                    </div>

                    {/* Email + Contact */}
                    <div className="grid md:grid-cols-2 gap-6">

                        <div>

                            <label className="block text-base font-medium text-gray-700 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="w-full px-5 py-3.5 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                            />

                        </div>

                        <div>

                            <label className="block text-base font-medium text-gray-700 mb-2">
                                Contact
                            </label>

                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                placeholder="Enter contact number"
                                required
                                className="w-full px-5 py-3.5 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                            />

                        </div>

                    </div>

                    {/* New Password + Confirm Password */}
                    <div className="grid md:grid-cols-2 gap-6 mt-6">

                        <div>

                            <label className="block text-base font-medium text-gray-700 mb-2">
                                New Password
                            </label>

                            <input
                                type="password"
                                name="newpassword"
                                value={formData.newpassword}
                                onChange={handleChange}
                                placeholder="Enter new password"
                                required
                                className="w-full px-5 py-3.5 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                            />

                        </div>

                        <div>

                            <label className="block text-base font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                name="confirmpassword"
                                value={formData.confirmpassword}
                                onChange={handleChange}
                                placeholder="Confirm password"
                                required
                                className="w-full px-5 py-3.5 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                            />

                        </div>

                    </div>

                    {/* Age */}
                    <div className="mt-6">

                        <label className="block text-base font-medium text-gray-700 mb-2">
                            Age
                        </label>

                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter age"
                            className="w-full px-5 py-3.5 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                        />

                    </div>

                    {/* Gender */}
                    <div className="mt-6">

                        <label className="block text-base font-medium text-gray-700 mb-2">
                            Gender
                        </label>

                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-5 py-3.5 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500 bg-white"
                        >

                            <option value="">
                                Select Gender
                            </option>

                            <option value="Male">
                                Male
                            </option>

                            <option value="Female">
                                Female
                            </option>

                            <option value="Other">
                                Other
                            </option>

                        </select>

                    </div>

                    {/* Address */}
                    <div className="mt-6">

                        <label className="block text-base font-medium text-gray-700 mb-2">
                            Address
                        </label>

                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your address"
                            rows="4"
                            className="w-full px-5 py-3.5 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500 resize-none"
                        />

                    </div>

                    {/* City + State */}
                    <div className="grid md:grid-cols-2 gap-6 mt-6">

                        <div>

                            <label className="block text-base font-medium text-gray-700 mb-2">
                                City
                            </label>

                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Enter city"
                                className="w-full px-5 py-3.5 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                            />

                        </div>

                        <div>

                            <label className="block text-base font-medium text-gray-700 mb-2">
                                State
                            </label>

                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="Enter state"
                                className="w-full px-5 py-3.5 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                            />

                        </div>

                    </div>

                    {/* Role */}
                    <div className="mt-6">

                        <label className="block text-base font-medium text-gray-700 mb-2">
                            Role
                        </label>

                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-5 py-3.5 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500 bg-white"
                        >

                            <option value="user">
                                User
                            </option>

                            <option value="admin">
                                Admin
                            </option>

                        </select>

                    </div>

                    {/* Create Account Button */}
                    <button
                        type="submit"
                        className="w-full mt-8 py-4 text-base bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                    >
                        Create Account
                    </button>

                    {/* Login */}
                    <p className="text-center text-base text-gray-500 mt-6">

                        Already have an account?

                        <span className="text-indigo-600 ml-1 cursor-pointer font-medium">
                            Login
                        </span>

                    </p>

                </form>

            </div>

        </div>
    );
};

export default CreateAccount;
