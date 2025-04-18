import React, { useState } from 'react';

const Upload = () => {
 const [file, setFile] = useState(null);
 
 const handleFileChange = (event) => {
  setFile(event.target.files[0]);
 };
 
 const handleSubmit = (event) => {
  event.preventDefault();
  alert('Activity submitted! Your content is under review!');
 }

 return (
   <section className="bg-[#F5F5F5]  text-white py-16 min-h-screen flex items-center justify-center">
     <div className="container mx-auto px-4">
       <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
         <div className="bg-[#5f2509ca] py-6">
           <h2 className="text-3xl font-bold text-center text-white">
             Upload Activity
           </h2>
         </div>
         <div className="p-6">
           <form onSubmit={handleSubmit} className="space-y-6">
             <div>
               <label
                 htmlFor="title"
                 className="block  text-gray-700 font-medium mb-2"
               >
                 Title
               </label>
               <input
                 id="title"
                 type="text"
                 placeholder="Enter activity title"
                 required
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
               />
             </div>

             <div>
               <label
                 htmlFor="description"
                 className="block text-gray-700 font-medium mb-2"
               >
                 Description
               </label>
               <textarea
                 id="description"
                 placeholder="Describe your activity"
                 required
                 rows="4"
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
               ></textarea>
             </div>

             <div>
               <label
                 htmlFor="file"
                 className="block text-gray-700 font-medium mb-2"
               >
                 Upload File
               </label>
               <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition duration-300">
                 <input
                   id="file"
                   type="file"
                   accept="video/*,image/*"
                   required
                   onChange={handleFileChange}
                   className="hidden"
                 />
                 <label htmlFor="file" className="cursor-pointer">
                   <div className="flex flex-col items-center justify-center">
                     <svg
                       className="w-12 h-12 text-gray-400"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                       ></path>
                     </svg>
                     <p className="mt-2 text-sm text-gray-600">
                       {file ? file.name : "Click to upload or drag and drop"}
                     </p>
                     <p className="text-xs text-gray-500 mt-1">
                       Supports images and videos
                     </p>
                   </div>
                 </label>
               </div>
             </div>

             <div>
               <label
                 htmlFor="category"
                 className="block text-gray-700 font-medium mb-2"
               >
                 Category
               </label>
               <select
                 id="category"
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
               >
                 <option value="music">Music</option>
                 <option value="dance">Dance</option>
                 <option value="acting">Acting</option>
                 <option value="writing">Creative Writing</option>
                 <option value="painting">Painting</option>
                 <option value="debate">Debate</option>
                 <option value="poster-making">Poster Making</option>
               </select>
             </div>

             <button
               type="submit"
               className="w-full bg-[#735557] text-xl text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
             >
               Submit Activity
             </button>
           </form>
         </div>
       </div>
     </div>
   </section>
 );
};

export default Upload;