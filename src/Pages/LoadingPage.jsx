import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingPage = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoadingComplete();
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const nameArray = "Nethindu Hansaka".split("");

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white p-4">
      <div className="text-center mb-8 w-full max-w-md">
        <motion.div
          className="flex flex-wrap justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {nameArray.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${
                letter === " " ? "mr-2 sm:mr-4" : "text-gray-800"
              }`}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="h-1 bg-black mt-4 mx-auto w-3/4 sm:w-2/3 md:w-1/2"
        />
      </div>
      
      <div className="lds-ellipsis scale-75 sm:scale-100">
        <div className="bg-gray-800"></div>
        <div className="bg-gray-800"></div>
        <div className="bg-gray-800"></div>
        <div className="bg-gray-800"></div>
      </div>
    </div>
  );
};

export default LoadingPage;