import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import head from "/Logo3.png";

const dummyStudents = [
  { id: 1, name: "Aarav Mehta" },
  { id: 2, name: "Anya Sharma" },
  { id: 3, name: "Rohan Das" },
];

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    alert("Logged out successfully!");
  };

  const filtered = dummyStudents.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (id) => {
    setSearch("");
    setShowSuggestions(false);
    navigate(`/student/${id}`);
  };

  return (
    <header className="bg-[#0A0F29] text-white shadow-md py-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo text-[30px] -ml-20 flex items-center font-bold">
          <img
            className="w-40 h-57 object-cover"
            src={head}
            alt="Campus Logo"
          />
        </div>

        {/* Search With Suggestions */}
        {/* Blended Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search student..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            className="px-3 py-1 w-84 rounded-md text-white bg-white/10 backdrop-blur-sm placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
          />

          <button
            onClick={() => {
              const found = filtered[0];
              if (found) handleSelect(found.id);
              else alert("Student not found.");
            }}
            className="absolute right-0 top-0 mt-[2px]  mr-[2px] px-3 py-[5px] bg-white/10 hover:bg-sky-600 text-white text-sm rounded-md transition"
          >
            Search
          </button>

          {showSuggestions && search && (
            <ul className="absolute w-full bg-[#1A1F3A] text-white rounded-md shadow-md mt-1 max-h-40 overflow-y-auto z-10 border border-white/10">
              {filtered.length ? (
                filtered.map((s) => (
                  <li
                    key={s.id}
                    className="px-3 py-2 hover:bg-[#2B3257] cursor-pointer transition"
                    onClick={() => handleSelect(s.id)}
                  >
                    {s.name}
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-400">No matches found</li>
              )}
            </ul>
          )}
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 font-semibold text-lg">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/upload" className="hover:text-gray-300">
                Upload Content
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/forums" className="hover:text-gray-300">
                Forums
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white font-semibold py-1 px-3 rounded-full shadow"
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
