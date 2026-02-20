import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/', { replace: true });
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Navbar */}
            <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">My App Dashboard</h1>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                    <IoLogOutOutline className="text-lg" />
                    Logout
                </button>
            </div>

            {/* Content */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
                    <p className="text-3xl font-bold text-blue-600 mt-2">1,245</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700">Verified Emails</h2>
                    <p className="text-3xl font-bold text-green-600 mt-2">1,120</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700">Pending Verifications</h2>
                    <p className="text-3xl font-bold text-yellow-500 mt-2">125</p>
                </div>

            </div>

        </div>
    )
}

export default Dashboard
