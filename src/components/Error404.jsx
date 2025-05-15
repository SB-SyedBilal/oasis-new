import React from 'react'
import Error404Image from '../assets/Error 404/404.png'
import { useNavigate } from 'react-router-dom'
import { PRIMARY_GREEN } from '../utils/theme'

const Error404 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-10 px-4'>
      <img 
        src={Error404Image} 
        alt="404 Error" 
        className='w-full max-w-[400px] md:max-w-[500px] h-auto mb-6'
      />
      <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>404</h1>
      <p className='text-xl md:text-2xl font-bold mt-4 text-gray-700'>Page Not Found</p>
      <p className='text-lg mt-4 text-center max-w-2xl text-gray-600'>
        The page you're looking for doesn't exist or has been moved.
        Please use the navigation or return to the homepage.
      </p>
      <button 
        onClick={handleGoHome}
        className='bg-[#18A000] hover:bg-[#119000] text-white px-8 py-3 font-medium mt-6 rounded-xl transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-[#18A000] focus:ring-opacity-50'
      >
        Back to Home
      </button>
    </div>
  )
}

export default Error404