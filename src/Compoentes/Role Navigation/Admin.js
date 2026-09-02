import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white min-h-screen hidden md:block">

        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-blue-400">
            Admin Panel
          </h1>
        </div>

        <div className="p-4 space-y-2">

          <button className="w-full text-left px-4 py-3 rounded-lg bg-blue-600">
            🏠 Dashboard
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition">
            👥 Users
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition">
            📦 Orders
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition">
            📊 Reports
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition">
            ⚙️ Settings
          </button>

        </div>

        <div className="absolute bottom-5 w-64 px-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-medium transition"
          >
            Logout
          </button>
        </div>

      </aside>

      {/* Main Area */}
      <div className="flex-1">

        {/* Top Navbar */}
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Dashboard
            </h2>

            <p className="text-gray-500 text-sm">
              Manage your application
            </p>
          </div>

          <div className="flex items-center gap-3">

            <div className="text-right hidden sm:block">
              <p className="font-semibold text-gray-800">
                Admin
              </p>

              <p className="text-sm text-gray-500">
                Administrator
              </p>
            </div>

            <div className="w-11 h-11 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              A
            </div>

          </div>

        </header>

        {/* Content */}
        <main className="p-6">

          {/* Welcome */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-7 text-white shadow-lg mb-8">

            <h1 className="text-3xl font-bold mb-2">
              Welcome Admin 👋
            </h1>

            <p className="text-blue-100">
              Here is what's happening with your application today.
            </p>

          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

            {/* Users */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">

              <div className="flex justify-between items-center">

                <div>
                  <p className="text-gray-500">
                    Total Users
                  </p>

                  <h2 className="text-3xl font-bold text-gray-800 mt-2">
                    1,250
                  </h2>
                </div>

                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  👥
                </div>

              </div>

              <p className="text-green-500 text-sm mt-4">
                ↑ 12% this month
              </p>

            </div>

            {/* Orders */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">

              <div className="flex justify-between items-center">

                <div>
                  <p className="text-gray-500">
                    Total Orders
                  </p>

                  <h2 className="text-3xl font-bold text-gray-800 mt-2">
                    856
                  </h2>
                </div>

                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  📦
                </div>

              </div>

              <p className="text-green-500 text-sm mt-4">
                ↑ 8% this month
              </p>

            </div>

            {/* Revenue */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">

              <div className="flex justify-between items-center">

                <div>
                  <p className="text-gray-500">
                    Revenue
                  </p>

                  <h2 className="text-3xl font-bold text-gray-800 mt-2">
                    ₹85K
                  </h2>
                </div>

                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                  💰
                </div>

              </div>

              <p className="text-green-500 text-sm mt-4">
                ↑ 15% this month
              </p>

            </div>

            {/* Pending */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">

              <div className="flex justify-between items-center">

                <div>
                  <p className="text-gray-500">
                    Pending
                  </p>

                  <h2 className="text-3xl font-bold text-gray-800 mt-2">
                    24
                  </h2>
                </div>

                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                  ⏳
                </div>

              </div>

              <p className="text-red-500 text-sm mt-4">
                Need attention
              </p>

            </div>

          </div>

          {/* Recent Users + Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Recent Users */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">

              <div className="flex justify-between items-center mb-6">

                <h2 className="text-xl font-bold text-gray-800">
                  Recent Users
                </h2>

                <button className="text-blue-600 hover:underline">
                  View All
                </button>

              </div>

              <div className="overflow-x-auto">

                <table className="w-full">

                  <thead>
                    <tr className="border-b text-left">

                      <th className="pb-3 text-gray-500">
                        User
                      </th>

                      <th className="pb-3 text-gray-500">
                        Email
                      </th>

                      <th className="pb-3 text-gray-500">
                        Status
                      </th>

                    </tr>
                  </thead>

                  <tbody>

                    <tr className="border-b">
                      <td className="py-4 font-medium">
                        Arun
                      </td>

                      <td className="py-4 text-gray-500">
                        arun@gmail.com
                      </td>

                      <td className="py-4">
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                          Active
                        </span>
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="py-4 font-medium">
                        Kumar
                      </td>

                      <td className="py-4 text-gray-500">
                        kumar@gmail.com
                      </td>

                      <td className="py-4">
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                          Active
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-4 font-medium">
                        Priya
                      </td>

                      <td className="py-4 text-gray-500">
                        priya@gmail.com
                      </td>

                      <td className="py-4">
                        <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
                          Pending
                        </span>
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6">

              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Quick Actions
              </h2>

              <div className="space-y-4">

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
                  ➕ Add User
                </button>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition">
                  📦 Manage Orders
                </button>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition">
                  📊 View Reports
                </button>

                <button className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition">
                  ⚙️ Settings
                </button>

              </div>

            </div>

          </div>

          {/* Activity */}
          <div className="bg-white rounded-xl shadow-md p-6 mt-6">

            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Recent Activity
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  👤
                </div>

                <div>
                  <p className="font-medium text-gray-800">
                    New user registered
                  </p>

                  <p className="text-sm text-gray-500">
                    10 minutes ago
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  📦
                </div>

                <div>
                  <p className="font-medium text-gray-800">
                    New order received
                  </p>

                  <p className="text-sm text-gray-500">
                    30 minutes ago
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  🔔
                </div>

                <div>
                  <p className="font-medium text-gray-800">
                    New notification
                  </p>

                  <p className="text-sm text-gray-500">
                    1 hour ago
                  </p>
                </div>
              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
};

export default Admin;