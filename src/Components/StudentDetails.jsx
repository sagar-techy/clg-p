
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const dummyStudentData = {
  1: {
    name: "Aarav Mehta",
    university: "RGPV University",
    college: "Corporate Group of Institutions",
    photo:
      "https://images.unsplash.com/photo-1667655861998-46fe4c29a4cf?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
    activities: {
      Dance: 85,
      Music: 70,
      Sports: 90,
      Art: 95,
      Debate: 88,
      Projects: 92,
    },
  },
  2: {
    name: "Anya Sharma",
    university: "Mumbai University",
    college: "HR College",
    photo:
      "https://images.unsplash.com/photo-1592085550638-e6bc180a731e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
    activities: {
      Dance: 95,
      Music: 88,
      Sports: 60,
      Art: 85,
      Debate: 90,
      Projects: 93,
    },
  },
  3: {
    name: "Rohan Das",
    university: "IIT Bombay",
    college: "Engineering",
    photo:
      "https://images.unsplash.com/photo-1648577735298-385ccb9755c0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
    activities: {
      Dance: 70,
      Music: 65,
      Sports: 95,
      Art: 80,
      Debate: 75,
      Projects: 98,
    },
  },
  4: {
    name: "Isha Verma",
    university: "Delhi University",
    college: "Arts",
    photo:
      "https://images.unsplash.com/photo-1517487313006-d80558d7a5cb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
    activities: {
      Dance: 92,
      Music: 85,
      Sports: 77,
      Art: 90,
      Debate: 84,
      Projects: 89,
    },
  },
  5: {
    name: "Kabir Reddy",
    university: "IIT Delhi",
    college: "Engineering",
    photo:
      "https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
    activities: {
      Dance: 88,
      Music: 75,
      Sports: 86,
      Art: 70,
      Debate: 82,
      Projects: 91,
    },
  },
  6: {
    name: "Meera Iyer",
    university: "Anna University",
    college: "Commerce",
    photo: "https://randomuser.me/api/portraits/women/52.jpg",
    activities: {
      Dance: 93,
      Music: 78,
      Sports: 68,
      Art: 85,
      Debate: 77,
      Projects: 95,
    },
  },
  7: {
    name: "Rajat Kapoor",
    university: "BITS Pilani",
    college: "Engineering",
    photo: "https://randomuser.me/api/portraits/men/66.jpg",
    activities: {
      Dance: 84,
      Music: 67,
      Sports: 88,
      Art: 74,
      Debate: 80,
      Projects: 96,
    },
  },
  8: {
    name: "Priya Nair",
    university: "Mumbai University",
    college: "HR College",
    photo: "https://randomuser.me/api/portraits/women/58.jpg",
    activities: {
      Dance: 89,
      Music: 83,
      Sports: 72,
      Art: 91,
      Debate: 87,
      Projects: 90,
    },
  },
  9: {
    name: "Tanmay Mishra",
    university: "Delhi University",
    college: "Science",
    photo: "https://randomuser.me/api/portraits/men/62.jpg",
    activities: {
      Dance: 78,
      Music: 76,
      Sports: 84,
      Art: 80,
      Debate: 82,
      Projects: 94,
    },
  },
  10: {
    name: "Divya Rao",
    university: "JNU",
    college: "Law",
    photo: "https://randomuser.me/api/portraits/women/64.jpg",
    activities: {
      Dance: 91,
      Music: 85,
      Sports: 70,
      Art: 95,
      Debate: 89,
      Projects: 97,
    },
  },
  11: {
    name: "Ayaan Singh",
    university: "IIT Bombay",
    college: "Engineering",
    photo: "https://randomuser.me/api/portraits/men/71.jpg",
    activities: {
      Dance: 84,
      Music: 74,
      Sports: 90,
      Art: 79,
      Debate: 76,
      Projects: 95,
    },
  },
  12: {
    name: "Riya Sen",
    university: "Mumbai University",
    college: "Arts",
    photo: "https://randomuser.me/api/portraits/women/56.jpg",
    activities: {
      Dance: 95,
      Music: 87,
      Sports: 69,
      Art: 96,
      Debate: 80,
      Projects: 92,
    },
  },
  13: {
    name: "Siddharth Joshi",
    university: "Delhi University",
    college: "Commerce",
    photo: "https://randomuser.me/api/portraits/men/85.jpg",
    activities: {
      Dance: 73,
      Music: 82,
      Sports: 85,
      Art: 78,
      Debate: 88,
      Projects: 94,
    },
  },
  14: {
    name: "Neha Kulkarni",
    university: "BITS Pilani",
    college: "Science",
    photo: "https://randomuser.me/api/portraits/women/60.jpg",
    activities: {
      Dance: 90,
      Music: 76,
      Sports: 80,
      Art: 87,
      Debate: 83,
      Projects: 91,
    },
  },
  15: {
    name: "Manav Bhatia",
    university: "Anna University",
    college: "Engineering",
    photo: "https://randomuser.me/api/portraits/men/68.jpg",
    activities: {
      Dance: 86,
      Music: 77,
      Sports: 93,
      Art: 75,
      Debate: 79,
      Projects: 90,
    },
  },
  16: {
    name: "Tanya Desai",
    university: "JNU",
    college: "Arts",
    photo: "https://randomuser.me/api/portraits/women/70.jpg",
    activities: {
      Dance: 92,
      Music: 84,
      Sports: 65,
      Art: 93,
      Debate: 85,
      Projects: 97,
    },
  },
  17: {
    name: "Kunal Saxena",
    university: "IIT Delhi",
    college: "Engineering",
    photo: "https://randomuser.me/api/portraits/men/83.jpg",
    activities: {
      Dance: 80,
      Music: 73,
      Sports: 91,
      Art: 77,
      Debate: 88,
      Projects: 89,
    },
  },
  18: {
    name: "Sneha Bhattacharya",
    university: "Delhi University",
    college: "Law",
    photo: "https://randomuser.me/api/portraits/women/54.jpg",
    activities: {
      Dance: 97,
      Music: 88,
      Sports: 60,
      Art: 95,
      Debate: 91,
      Projects: 96,
    },
  },
  19: {
    name: "Harsh Gupta",
    university: "BITS Pilani",
    college: "Commerce",
    photo: "https://randomuser.me/api/portraits/men/73.jpg",
    activities: {
      Dance: 81,
      Music: 69,
      Sports: 86,
      Art: 80,
      Debate: 77,
      Projects: 92,
    },
  },
  20: {
    name: "Pooja Chatterjee",
    university: "Mumbai University",
    college: "Arts",
    photo: "https://randomuser.me/api/portraits/women/62.jpg",
    activities: {
      Dance: 94,
      Music: 82,
      Sports: 72,
      Art: 88,
      Debate: 86,
      Projects: 93,
    },
  },
  21: {
    name: "Vikram Menon",
    university: "Anna University",
    college: "Science",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
    activities: {
      Dance: 85,
      Music: 80,
      Sports: 88,
      Art: 76,
      Debate: 79,
      Projects: 89,
    },
  },
  22: {
    name: "Ishita Ghosh",
    university: "JNU",
    college: "Law",
    photo: "https://randomuser.me/api/portraits/women/74.jpg",
    activities: {
      Dance: 91,
      Music: 87,
      Sports: 69,
      Art: 92,
      Debate: 90,
      Projects: 94,
    },
  },
  23: {
    name: "Nikhil Tripathi",
    university: "IIT Bombay",
    college: "Engineering",
    photo: "https://randomuser.me/api/portraits/men/79.jpg",
    activities: {
      Dance: 83,
      Music: 75,
      Sports: 92,
      Art: 85,
      Debate: 81,
      Projects: 96,
    },
  },
};

const ProgressBar = ({ label, value }) => {
  const getColorClass = (value) => {
    if (value >= 90) return "bg-purple-600";
    if (value >= 80) return "bg-blue-500";
    if (value >= 70) return "bg-green-500";
    if (value >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="mb-6 group">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
          {label}
        </span>
        <span className="text-sm font-bold bg-gray-100 px-2 py-1 rounded-lg text-gray-700 group-hover:bg-indigo-100 transition-all duration-300">
          {value}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
        <div
          className={`${getColorClass(
            value
          )} h-3 rounded-full transform transition-all duration-500 ease-out hover:scale-x-105 origin-left`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};
// ... (dummyStudentData and ProgressBar remain unchanged)

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state); // 👈 auth check

  const student = dummyStudentData[id];

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/"); // 👈 redirect to home if not logged in
    }
  }, [isAuthenticated, navigate]);

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
        <div className="bg-white p-8 rounded-xl shadow-lg animate-pulse">
          <p className="text-2xl text-red-500 font-bold">Student not found</p>
          <p className="text-gray-600 mt-2">
            Please check the student ID and try again
          </p>
        </div>
      </div>
    );
  }

  return (
    // ✨ Same content as before
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <img
                src={student.photo}
                alt={student.name}
                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              <div className="mt-4 md:mt-0 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {student.name}
                </h1>
                <p className="text-blue-100 mt-2 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  </svg>
                  {student.university}
                </p>
                <p className="text-blue-100 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {student.college}
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard */}
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-indigo-600 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">
                Performance Dashboard
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {Object.entries(student.activities).map(([activity, value]) => (
                <ProgressBar key={activity} label={activity} value={value} />
              ))}
            </div>

            <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center text-gray-700 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">Performance Summary</span>
              </div>
              <p className="text-gray-600 text-sm">
                This student shows exceptional skills in{" "}
                {Object.entries(student.activities)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 2)
                  .map(([activity]) => activity)
                  .join(" and ")}
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
