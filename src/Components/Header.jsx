import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    alert('Logged out successfully!');
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">Campus Connect</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/upload" className="hover:text-gray-300 transition duration-300">
                Upload Content
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-gray-300 transition duration-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/forums" className="hover:text-gray-300 transition duration-300">
                Forums
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-300 transition duration-300">
                Login/Sign Up
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-500 font-semibold py-1 px-3 rounded-full shadow hover:bg-blue-100 transition duration-300"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;