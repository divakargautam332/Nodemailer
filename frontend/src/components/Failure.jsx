import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Failure() {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <div className='w-full max-w-md bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center gap-6 text-center'>

                <IoCloseCircleOutline className='text-red-600 bg-red-100 rounded-full p-3 text-6xl' />

                <h2 className='text-2xl font-bold text-gray-800'>
                    Verification Failed
                </h2>

                <p className='text-gray-500 text-sm'>
                    The OTP you entered is incorrect or has expired.
                </p>

                <button className='w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200' onClick={() => navigate('/')}>
                    Try Again
                </button>

            </div>
        </div>
    )
}

export default Failure
