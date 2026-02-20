import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { CiMail } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function EmailComp() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    const handleClick = async () => {
        const response = await axios.post('http://localhost:3000/sendEmail', { email });

        console.log(response.data);
        if (response.data.success) {
            navigate('/otp');
        } else {
            alert('sending email fail');
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <div className='w-full max-w-md bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-6'>

                <div className='flex flex-col items-center gap-3 text-center'>
                    <CiMail className='text-blue-600 bg-blue-100 rounded-full p-3 text-5xl' />
                    <h2 className='font-bold text-2xl text-gray-800'>Email Verification</h2>
                    <p className='text-gray-500 text-sm'>
                        Enter your email to receive a verification code
                    </p>
                </div>

                <div className='flex flex-col gap-4'>
                    <input
                        type="email"
                        name="email"
                        onChange={handleEmailChange}
                        value={email}
                        placeholder='Enter your email'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                    />

                    <button
                        className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200'
                        onClick={handleClick}>
                        Get Code
                    </button>
                </div>

            </div>
        </div>
    )
}

export default EmailComp
