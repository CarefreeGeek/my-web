import React from "react";

const Join = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-6">
          🚀 Apna Tech Safar Shuru Karo
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Banaras se duniya tak — coding ka safar yahin se shuru hota hai. Niche form bharo aur entry le lo!
        </p>

        <form className="space-y-6">

          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              placeholder="ie. Ramesh Kumar"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">Kyun Join Karna Chahte Ho?</label>
            <textarea
              rows="4"
              placeholder="Thoda batao apne goals ke baare mein..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>


          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
            >
               Join Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
