import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaMoneyBillWave, FaLock, FaRocket, FaUser } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to PayMoney
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Your go-to app for secure and fast money transfers.
          </motion.p>
          <motion.div 
            className="mt-8 flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link to="/signin" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Sign In</Link>
            <Link to="/signup" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Sign Up</Link>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="py-12 bg-gradient-to-b from-gray-800 to-gray-900 text-center">
        <h2 className="text-3xl font-bold">Quick Actions</h2>
        <div className="mt-6 flex justify-center space-x-6">
          <Link className="flex items-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            <FaMoneyBillWave className="mr-2" /> Send Money
          </Link>
          <Link className="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <FaUser className="mr-2" /> Receive Money
          </Link>
          <Link className="flex items-center bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            <FaLock className="mr-2" /> View Transactions
          </Link>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="py-12 bg-gradient-to-b from-gray-700 to-gray-800">
        <h2 className="text-3xl font-bold text-center">Why Choose PayMoney?</h2>
        <div className="mt-6 flex flex-wrap justify-center space-x-6">
          <motion.div 
            className="bg-gray-800 p-6 rounded shadow-md max-w-xs"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold flex items-center"><FaLock className="mr-2" /> Secure Transactions</h3>
            <p className="mt-4 text-gray-300">Our app ensures the highest level of security for all your transactions.</p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-6 rounded shadow-md max-w-xs"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold flex items-center"><FaRocket className="mr-2" /> Fast Transfers</h3>
            <p className="mt-4 text-gray-300">Experience lightning-fast money transfers with our cutting-edge technology.</p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-6 rounded shadow-md max-w-xs"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold flex items-center"><FaUser className="mr-2" /> User-Friendly</h3>
            <p className="mt-4 text-gray-300">Designed to be intuitive and accessible for users of all ages.</p>
          </motion.div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 bg-gradient-to-b from-gray-900 to-black text-center">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          className="mt-6 max-w-2xl mx-auto"
        >
          <div className="bg-gray-800 p-6 rounded shadow-md">
            <p className="text-gray-300">"PayMoney has made my life so much easier. Transferring money is now just a few taps away!"</p>
            <h3 className="mt-4 font-bold text-white">- James Anderson</h3>
          </div>
          <div className="bg-gray-800 p-6 rounded shadow-md">
            <p className="text-gray-300">"I love the security features of PayMoney. I feel safe making transactions anytime, anywhere."</p>
            <h3 className="mt-4 font-bold text-white">- Chris Hemsworth</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
