import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import head from "/Logo10.png"
const dummyStudents = [
  { id: 1, name: "Aarav Mehta" },
  { id: 2, name: "Anya Sharma" },
  { id: 3, name: "Rohan Das" },
  { id: 4, name: "Ishita Nair" },
  { id: 5, name: "Krishna Yadav" },
  { id: 6, name: "Tanvi Reddy" },
  { id: 7, name: "Dev Rajput" },
  { id: 8, name: "Meera Iyer" },
  { id: 9, name: "Siddharth Verma" },
  { id: 10, name: "Pooja Menon" },
  { id: 11, name: "Nikhil Tripathi" },
  { id: 12, name: "Sanya Kapoor" },
  { id: 13, name: "Rajeev Sinha" },
  { id: 14, name: "Nikita Rao" },
  { id: 15, name: "Kabir Bhatt" },
  { id: 16, name: "Riya Kulkarni" },
  { id: 17, name: "Aditya Joshi" },
  { id: 18, name: "Isha Bhatnagar" },
  { id: 19, name: "Yuvraj Chauhan" },
  { id: 20, name: "Lavanya Pillai" },
  { id: 21, name: "Kunal Saxena" },
  { id: 22, name: "Sneha Dey" },
  { id: 23, name: "Ritik Bansal" },
];

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state);
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
    <header className="bg-gradient-to-r from-[#0A0F29] to-[#1A1F3A] text-white shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="logo flex items-center space-x-2 transition-transform hover:scale-105">
          <img className="w-40 h-12 object-cover" src={head} alt="Logo" />
        </Link>

        {/* Enhanced Search With Suggestions */}
        <div className="relative w-72">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search student..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSuggestions(true);
              }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onFocus={() => search && setShowSuggestions(true)}
              className="px-4 py-2 w-full rounded-lg text-white bg-white/10 backdrop-blur-sm placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
            />
            <button
              onClick={() => {
                const found = filtered[0];
                if (found) handleSelect(found.id);
                else alert("Student not found.");
              }}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-sky-600 hover:bg-sky-700 text-white text-sm rounded-md transition-colors shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {showSuggestions && search && (
            <ul className="absolute w-80 bg-[#1A1F3A] text-white rounded-md shadow-xl mt-1 max-h-60 overflow-y-auto z-10 border border-white/10 backdrop-blur-sm">
              {filtered.length ? (
                filtered.map((s) => (
                  <li
                    key={s.id}
                    className="px-4 py-2 hover:bg-[#2B3257] cursor-pointer transition-colors border-b border-white/5 last:border-b-0"
                    onClick={() => handleSelect(s.id)}
                  >
                    {s.name}
                  </li>
                ))
              ) : (
                <li className="px-4 py-3 text-gray-400 text-center">No matches found</li>
              )}
            </ul>
          )}
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center text-[17px] font-semibold">
            <li>
              <Link to="/" className="hover:text-sky-300 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-sky-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/upload" className="hover:text-sky-300 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-sky-400">
                Upload
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-sky-300 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-sky-400">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/forums" className="hover:text-sky-300 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-sky-400">
                Forums
              </Link>
            </li>
            {!isAuthenticated ? (
              <li>
                <Link to="/login" className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-lg transition-colors shadow-md">
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <button 
                  onClick={handleLogout}
                  className="text-red-500 px-4 py-2 rounded-lg transition-colors shadow-md"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
        
        {/* Mobile menu button - would need additional state and handlers for mobile menu */}
        <button className="md:hidden text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
