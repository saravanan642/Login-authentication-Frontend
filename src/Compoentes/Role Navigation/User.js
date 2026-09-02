import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-blue-600">
            User Dashboard
          </h1>

          <div className="flex items-center gap-5">
            <span className="text-gray-600 font-medium">
              Welcome User 👋
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium transition"
            >
              Logout
            </button>
          </div>

        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Welcome Back! 👋
          </h2>

          <p className="text-blue-100 text-lg">
            You have successfully logged in as a User.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Profile */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-4">
              👤
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              My Profile
            </h3>

            <p className="text-gray-500 mb-4">
              View and manage your profile information.
            </p>

            <button className="text-blue-600 font-medium hover:underline">
              View Profile →
            </button>
          </div>

          {/* Orders */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4">
              📦
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              My Orders
            </h3>

            <p className="text-gray-500 mb-4">
              Check your previous and current orders.
            </p>

            <button className="text-green-600 font-medium hover:underline">
              View Orders →
            </button>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl mb-4">
              🔔
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Notifications
            </h3>

            <p className="text-gray-500 mb-4">
              View your latest notifications and updates.
            </p>

            <button className="text-yellow-600 font-medium hover:underline">
              View Notifications →
            </button>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl mb-4">
              ⚙️
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Settings
            </h3>

            <p className="text-gray-500 mb-4">
              Manage your account settings.
            </p>

            <button className="text-purple-600 font-medium hover:underline">
              Settings →
            </button>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h3 className="font-semibold text-gray-700">
                  Account Login
                </h3>
                <p className="text-sm text-gray-500">
                  You logged into your account successfully.
                </p>
              </div>

              <span className="text-sm text-green-600 font-medium">
                Success
              </span>
            </div>

            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h3 className="font-semibold text-gray-700">
                  Profile Updated
                </h3>
                <p className="text-sm text-gray-500">
                  Your profile information was updated.
                </p>
              </div>

              <span className="text-sm text-blue-600 font-medium">
                Completed
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-700">
                  Notification
                </h3>
                <p className="text-sm text-gray-500">
                  You have new notifications.
                </p>
              </div>

              <span className="text-sm text-yellow-600 font-medium">
                New
              </span>
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-5 mt-10">
        <p className="text-gray-300">
          © 2026 User Dashboard. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
};

export default User;