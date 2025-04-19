import colleges from "../data/collegesData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Colleges() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === "all") return matchesSearch;
    return matchesSearch && college.courses.some(course => 
      course.toLowerCase().includes(selectedFilter.toLowerCase())
    );
  });

  const popularFilters = ["Engineering", "Computer Science", "Business", "Law", "Medicine"];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-5xl double font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-800">Explore Colleges</h1>
        <p className="text-gray-800 max-w-2xl mx-auto text-lg">Discover top colleges and universities to find your perfect educational fit</p>
      </div>
      
      <div className="mb-8 max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by college name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition shadow-sm text-lg"
          />
          <svg className="w-6 h-6 absolute right-4 top-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <button 
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedFilter === "all" 
                ? "bg-indigo-600 text-white shadow-md" 
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
            }`}
          >
            All
          </button>
          {popularFilters.map(filter => (
            <button 
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedFilter === filter 
                  ? "bg-indigo-600 text-white shadow-md" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college) => (
            <Link
              to={`/college/${college.id}`}
              key={college.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-gray-100 group"
            >
              <div className="relative">
                {college.photo ? (
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={college.photo} 
                      alt={college.name} 
                      className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70"></div>
                  </div>
                ) : (
                  <div className="h-56 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">{college.name.charAt(0)}</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h2 className="text-2xl font-bold mb-1 drop-shadow-md">{college.name}</h2>
                  <div className="flex items-center text-gray-100">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="drop-shadow-md">{college.location}</span>
                  </div>
                </div>
              </div>
              <div className="p-5 flex-grow">
                <div className="flex items-center text-gray-600 mb-3">
                  <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                  </svg>
                  <span className="font-medium">Code: {college.code}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="font-medium">Est. {college.establishment}</span>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">POPULAR COURSES</h3>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.slice(0, 3).map((course, index) => (
                      <span key={index} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md">
                        {course}
                      </span>
                    ))}
                    {college.courses.length > 3 && (
                      <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md">
                        +{college.courses.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 group-hover:bg-indigo-50 transition-colors">
                <span className="text-indigo-600 font-medium flex items-center">
                  View details 
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-16 bg-white rounded-xl shadow-md">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p className="text-gray-500 text-xl mb-4">No colleges found matching your search.</p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setSelectedFilter("all");
              }}
              className="mt-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Colleges;
