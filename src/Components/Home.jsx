import React from 'react';
import pe from "/pexels31.jpg"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${pe})` }}
        className="hero w-full bg-cover bg-bottom h-full text-[#444040] py-20"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-shadow-cyan-950 mb-6">
            Connect, Showcase, and Excel in Your <span className='text-[#7a0c0cfe]'>Passions!</span>
          </h1>
          <button
            id="getStarted"
            className="text-[#735557] bg-[#e8e2c4] font-semibold py-3 px-8 rounded-full shadow-lg"
            onClick={() =>
              alert(
                "Welcome to Campus Connect! Let's get started on showcasing your talents!"
              )
            }
          >
            Get Started
          </button>
        </div>
        <section className="features mt-16">
          <h2 className="text-3xl text-[#e8e2c4e3] font-bold text-center mb-16">
            Key Features
          </h2>
          <ul className="grid grid-cols-2 gap-9 text-lg font-semibold px-52 text-center">
            <Link to='/show' className="bg-white text-[#Af8F6F] p-4 border-[1.5px] border-[#b19ea0] rounded-lg hover:shadow-xl transition duration-300">
              Activity Showcasing
            </Link>
            <Link to='/performance' className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#b19ea0] rounded-lg hover:shadow-xl transition duration-300">
              Performance Evaluation
            </Link>
            <Link to='/indi' className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#b19ea0]   rounded-lg hover:shadow-xl transition duration-300">
              Individual Performance Chart
            </Link>
            <Link to='/comp' className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#b19ea0] rounded-lg hover:shadow-xl transition duration-300">
              Comparative Analysis
            </Link>
            <Link to='career' className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#938a8b] rounded-lg hover:shadow-xl transition duration-300">
              Career Guidance
            </Link>
            <Link to='game' className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#b19ea0] rounded-lg hover:shadow-xl transition duration-300">
              Gamification and Rewards
            </Link>
            <Link to='comm' className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#b19ea0] rounded-lg hover:shadow-xl transition duration-300">
              Community Engagement
            </Link>
            <Link className="bg-white text-[#AF8F6F] p-4 border-[1.5px] border-[#b19ea0] rounded-lg hover:shadow-xl transition duration-300">
              Something Else
            </Link>
          </ul>
        </section>
      </section>
    </>
  );
};

export default Home;