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
    <header className="bg-pink-500 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-[30px] font-bold">Campus Connect</div>
        <nav>
          <ul className="flex space-x-6 font-semibold text-lg">
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
                Login
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white font-semibold py-1 px-3 rounded-full shadow "
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