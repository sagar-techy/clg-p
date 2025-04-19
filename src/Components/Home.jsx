import React from "react";
import pe from "/pexels31.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dummyStudents from "../data/dummyStudent";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, email } = useSelector((state) => state);

  const handleGetStarted = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      const student = dummyStudents.find((s) =>
        s.name.toLowerCase().includes(email.split("@")[0].split(".")[0])
      );
      if (student) {
        navigate(`/colleges`);
      } else {
        alert("Student profile not found. Please register.");
        navigate("/colleges");
      }
    }
  };

  const handleStudentDetails = () => {
    if (!isAuthenticated) {
      alert("You must be logged in to view student details.");
      return;
    }

    const student = dummyStudents.find((s) =>
      s.name.toLowerCase().includes(email.split("@")[0].split(".")[0])
    );

    if (student) {
      navigate(`/student/${student.id}`);
    } else {
      alert("Student profile not found. Please register.");
    }
  };

  return (
    <>
      <section
        style={{ backgroundImage: `url(${pe})` }}
        className="hero w-full bg-cover bg-bottom h-full text-[#444040] py-20"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-40">
            Connect, Showcase, and Excel in Your{" "}
            <span className="text-[#ff2a2afe]">Passions!</span>
          </h1>
          <div className="flex justify-center gap-4 mb-8">
            <button
              id="getStarted"
              className="text-[#735557] cursor-pointer bg-[#e8e2c4] font-semibold py-3 px-8 rounded-full shadow-lg"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
            <button
              className="text-[#735557] cursor-pointer bg-[#e8e2c4] font-semibold py-3 px-8 rounded-full shadow-lg"
              onClick={handleStudentDetails}
            >
              Student Details
            </button>
          </div>
        </div>

        <section className="features mt-16">
          <h2 className="text-3xl text-[#e8e2c4e3] font-bold text-center mb-16">
            Key Features
          </h2>
          <ul className="grid grid-cols-2 gap-9 text-lg font-semibold px-52 text-center">
            <Link
              to="/show"
              className="bg-white p-4 border-[1.5px] border-[#b19ea0] rounded-lg hover:shadow-xl text-[#Af8F6F] hover:bg-[#ebc59eb0] hover:border-[#ebc49e] hover:text-white hover:font-bold transition duration-200"
            >
              Activity Showcasing
            </Link>
            <Link
              to="/performance"
              className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#b19ea0] rounded-lg hover:shadow-xl  hover:bg-[#ebc59eb0] hover:border-[#ebc49e] hover:text-white hover:font-bold transition duration-200"
            >
              Performance Evaluation
            </Link>
            <Link
              to="/indi"
              className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#b19ea0]   rounded-lg hover:shadow-xl  hover:bg-[#ebc59eb0] hover:border-[#ebc49e] hover:text-white hover:font-bold transition duration-200"
            >
              Individual Performance Chart
            </Link>
            <Link
              to="/comp"
              className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#b19ea0] rounded-lg hover:shadow-xl  hover:bg-[#ebc59eb0] hover:border-[#ebc49e] hover:text-white hover:font-bold transition duration-200"
            >
              Comparative Analysis
            </Link>
            <Link
              to="/career"
              className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#938a8b] rounded-lg hover:shadow-xl  hover:bg-[#ebc59eb0] hover:border-[#ebc49e] hover:text-white hover:font-bold transition duration-200"
            >
              Career Guidance
            </Link>
            <Link
              to="/game"
              className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#b19ea0] rounded-lg hover:shadow-xl  hover:bg-[#ebc59eb0] hover:border-[#ebc49e] hover:text-white hover:font-bold transition duration-200"
            >
              Gamification and Rewards
            </Link>
            <Link
              to="/comm"
              className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#b19ea0] rounded-lg hover:shadow-xl  hover:bg-[#ebc59eb0] hover:border-[#ebc49e] hover:text-white hover:font-bold transition duration-200"
            >
              Community Engagement
            </Link>
            <Link className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#b19ea0] rounded-lg hover:shadow-xl  hover:bg-[#ebc59eb0] hover:border-[#ebc49e] hover:text-white hover:font-bold transition duration-200">
              Personalized Recommendations
            </Link>
          </ul>
        </section>
      </section>
    </>
  );
};

export default Home;
