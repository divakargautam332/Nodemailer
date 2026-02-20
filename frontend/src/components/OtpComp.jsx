import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { IoShieldOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function OtpComp() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const handleOtp = (event) => {
        setOtp(event.target.value);
    }

    const handleVerify = async () => {
        const response = await axios.post('http://localhost:3000/verifyOtp', { otp });
        console.log(response.data);
        if (response.data.success) {
            navigate('/success');
        } else {
            navigate('/failure');
        }
    }


    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <div className='w-full max-w-md bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-6'>

                <div className='flex flex-col items-center gap-3 text-center'>
                    <IoShieldOutline className='text-green-600 bg-green-100 rounded-full p-3 text-5xl' />
                    <h2 className='font-bold text-2xl text-gray-800'>Enter Verification Code</h2>
                    <p className='text-gray-500 text-sm'>
                        We have sent a verification code to your email
                    </p>
                </div>

                <div className='flex flex-col gap-4'>
                    <input
                        type="text"
                        name="otp"
                        placeholder='Enter 6-digit OTP'
                        onChange={handleOtp}
                        value={otp}
                        maxLength={6}
                        className='w-full px-4 py-3 text-center tracking-widest text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition'
                    />

                    <button
                        className='w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200'
                        onClick={handleVerify}>
                        Verify Code
                    </button>
                </div>

            </div>
        </div>
    )
}

export default OtpComp
