import React from "react";
import { useParams } from "react-router-dom";

const dummyStudentData = {
  1: {
    name: "Aarav Mehta",
    university: "Delhi University",
    college: "St. Stephen’s College",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
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
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
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
    photo: "https://randomuser.me/api/portraits/men/64.jpg",
    activities: {
      Dance: 70,
      Music: 65,
      Sports: 95,
      Art: 80,
      Debate: 75,
      Projects: 98,
    },
  },
};

const ProgressBar = ({ label, value }) => (
  <div className="mb-4">
    <div className="flex justify-between">
      <span className="font-medium text-gray-700">{label}</span>
      <span className="text-sm text-gray-600">{value}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-green-500 h-4 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const StudentDetails = () => {
  const { id } = useParams();
  const student = dummyStudentData[id];

  if (!student)
    return <p className="p-10 text-xl text-red-500">Student not found.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center space-x-6">
          <img
            src={student.photo}
            alt={student.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-blue-900">{student.name}</h1>
            <p className="text-gray-700">🎓 {student.university}</p>
            <p className="text-gray-600">🏫 {student.college}</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Performance
          </h2>
          {Object.entries(student.activities).map(([activity, value]) => (
            <ProgressBar key={activity} label={activity} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
