import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex items-center justify-center mt-8 bg-gray-50 dark:bg-gray-900 animate-fadeIn">
      <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-105 w-full max-w-sm md:max-w-md text-center border-t-4 border-green-500">

        <div className="flex justify-center mb-6">
          <CheckCircle2 className="text-6xl text-green-500 animate-popIn" />
        </div>
        
        {/* Main Content */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-600 dark:text-green-400 mb-2 animate-slideInDown">
          Success!
        </h1>
        
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 animate-slideInUp">
          Your account has been created successfully. Welcome aboard!
        </p>

        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 active:scale-95 animate-fadeIn delay-500">
          <Link to="/login">Go to login</Link>
        </button>
      </div>
    </div>
  );
};

export default Success;