import { useParams, Link } from "react-router-dom";
import colleges from "../data/collegesData";
import { useState, useEffect } from "react";

function CollegeDetail() {
  const { id } = useParams();
  const college = colleges.find((c) => c.id === id);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
      </div>
    );
  }

  if (!college) {
    return (
      <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md transform transition-all duration-500 hover:scale-105">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-red-600 mb-4">College not found</h1>
          <p className="text-gray-600 mb-6">The college you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pb-16">
      <div className="relative">
        {college.photo ? (
          <div className="h-96 w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
            <img
              src={college.photo}
              alt={college.name}
              className="w-full h-full object-cover transform transition-transform duration-10000 hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 p-10 text-white">
              <h1 className="text-5xl font-bold mb-3 drop-shadow-lg">
                {college.name}
              </h1>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-indigo-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <p className="text-xl opacity-90 drop-shadow-md">
                  {college.location}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-96 w-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
            <div className="text-center p-8">
              <h1 className="text-5xl font-bold text-white mb-4">
                {college.name}
              </h1>
              <div className="flex items-center justify-center space-x-2 text-white/90">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <p className="text-xl">{college.location}</p>
              </div>
            </div>
          </div>
        )}

        <Link
          to="/colleges"
          className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 flex items-center shadow-lg transform hover:scale-105"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Colleges
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-4 font-medium text-lg transition-colors duration-200 ${
                activeTab === "overview"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-indigo-500"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={`px-6 py-4 font-medium text-lg transition-colors duration-200 ${
                activeTab === "courses"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-indigo-500"
              }`}
            >
              Courses
            </button>
            <button
              onClick={() => setActiveTab("facilities")}
              className={`px-6 py-4 font-medium text-lg transition-colors duration-200 ${
                activeTab === "facilities"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-indigo-500"
              }`}
            >
              Facilities
            </button>
          </div>

          {activeTab === "overview" && (
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <h2 className="text-lg text-gray-500 font-medium mb-2">
                      College Code
                    </h2>
                    <p className="text-2xl font-bold text-gray-800">
                      {college.code}
                    </p>
                  </div>

                  {college.chairman && (
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      <h2 className="text-lg text-gray-500 font-medium mb-2">
                        Chairman
                      </h2>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-2xl font-bold text-gray-800">
                          {college.chairman}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {college.director && (
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      <h2 className="text-lg text-gray-500 font-medium mb-2">
                        Director
                      </h2>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-2xl font-bold text-gray-800">
                          {college.director}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <h2 className="text-lg text-gray-500 font-medium mb-2">
                      Established
                    </h2>
                    <p className="text-2xl font-bold text-gray-800">
                      {college.establishment || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "courses" && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
                Courses Offered
              </h2>
              {college.courses && college.courses.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {college.courses.map((course, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-5 rounded-lg hover:bg-indigo-50 transition-colors duration-300 hover:shadow-md border border-gray-100 group"
                    >
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3 group-hover:bg-indigo-200 transition-colors duration-300">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            ></path>
                          </svg>
                        </div>
                        <p className="font-medium text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                          {course}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    No courses information available
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "facilities" && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
                Campus Facilities
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 hover:bg-indigo-50">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg">Library</h3>
                  </div>
                  <p className="text-gray-600 ml-13">
                    Modern library with extensive collection of books and
                    digital resources.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 hover:bg-indigo-50">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg">Computer Labs</h3>
                  </div>
                  <p className="text-gray-600 ml-13">
                    State-of-the-art computer labs with latest software and
                    hardware.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 hover:bg-indigo-50">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg">Sports Complex</h3>
                  </div>
                  <p className="text-gray-600 ml-13">
                    Comprehensive sports facilities including indoor and outdoor
                    courts.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Interested in this college?
              </h2>
              <p className="opacity-90">
                Connect with current students and get your questions answered
              </p>
            </div>
            <Link
              to="https://www.corporatebpl.com/"
              className="mt-4 md:mt-0 px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeDetail;
