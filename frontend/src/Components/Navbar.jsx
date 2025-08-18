import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Replace with your real authentication logic
  const isLoggedIn = false; // <- update this with actual auth check

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-transparent sticky top-0 z-10 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CarefreeGeek
          </span>
        </Link>

        {/* Right Side (Profile / Hamburger) */}
        <div className="flex items-center md:order-2">
          {isLoggedIn ? (
            <button
              type="button"
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user"
              />
            </button>
          ) : (
            <div className="hidden md:flex space-x-3">
              {/* Only show on desktop */}
              <Link
                to="/login"
                className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Hamburger button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links + Mobile Auth Buttons */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "ProjectPage", path: "/projectpage" },
              { name: "Learn", path: "/learn" },
              { name: "Community", path: "/community" },
              { name: "Contact", path: "/contact" },

            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-3 rounded-sm md:p-0 ${isActive(link.path)
                      ? "text-white md:text-blue-700 dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {!isLoggedIn && (
              <div className="flex flex-col space-y-2 mt-3 md:hidden">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  Sign Up
                </Link>
              </div>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
