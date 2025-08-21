import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg('');
    setLoading(true);

    try {
      const res = await axios
        .post("/auth/user/register", formData)

      // const res = await fetch('/api/v1/auth/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //     // include Authorization if needed
      //   },
      //   body: JSON.stringify(formData)
      // });

      if (res.status !== 201) {
        throw new Error(res.data?.message || 'Registration failed');
      }
  
      // Success
      navigate('/success');
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.message ||
        'Something went wrong';
      setErrMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-gray-900 shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-8">
          <div className="mt-6 flex flex-col items-center">
            <h1 className="text-2xl text-white font-bold">Sign Up</h1>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <div className="w-full flex-1 mt-4">
              {errMsg ? (
                <p className="mb-4 text-sm text-red-400 text-center">{errMsg}</p>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 mb-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="w-full px-8 py-4 mb-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Full name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none disabled:opacity-60"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">{loading ? 'Signing up...' : 'Sign Up'}</span>
                  </button>
                </div>
              </form>

              <div>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{' '}
                  <Link to="/login" className="text-indigo-400 hover:text-indigo-600">
                    Login
                  </Link>
                </p>
              </div>

              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree by continuing our{' '}
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Terms of Service
                </a>{' '}
                and its{' '}
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-transparent text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-transparent bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg')"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
