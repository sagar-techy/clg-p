import React from 'react';

const Dashboard = () => {
  return (
    <section className="dashboard bg-[#735557d1] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Your Performance Dashboard</h2>
        
        <div className="stats-container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Your Performance Stats</h3>
            <div className="space-y-4">
              <div className="stat-item">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">🎵 Music</span>
                  <span className="text-blue-500 font-bold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">💃 Dance</span>
                  <span className="text-purple-500 font-bold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">🎭 Acting</span>
                  <span className="text-indigo-500 font-bold">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Comparative Analysis</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-700">Top Performer in Music</p>
                <p className="text-blue-600 font-bold text-xl mt-1">User135</p>
                <p className="text-sm text-gray-500 mt-2">Score: 98%</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-700">Your Ranking</p>
                <p className="text-green-600 font-bold text-xl mt-1">Top 15%</p>
                <p className="text-sm text-gray-500 mt-2">Among 200+ students</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <button className=" bg-[#5f2509ca] font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-blue-100 transition duration-300">
            View Detailed Report
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
