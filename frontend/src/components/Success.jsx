import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Success() {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <div className='w-full max-w-md bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center gap-6 text-center'>

                <IoCheckmarkCircleOutline className='text-green-600 bg-green-100 rounded-full p-3 text-6xl' />

                <h2 className='text-2xl font-bold text-gray-800'>
                    Verification Successful
                </h2>

                <p className='text-gray-500 text-sm'>
                    Your email has been successfully verified.
                </p>

                <button className='w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200' onClick={() => navigate('/dashboard')}>
                    Continue
                </button>

            </div>
        </div>
    )
}

export default Success
