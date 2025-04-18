import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [userType, setUserType] = useState('student');
  const dispatch = useDispatch();
  const  navigate = useNavigate()

 const handleSubmit = (event) => {
   event.preventDefault();
  // Mock login success
  dispatch({ type: 'LOGIN', payload: { email } });
   alert('Login successful! Welcome back.');
   // Redirect to dashboard or home page
    navigate('/dashboard');
 };

 return (
   <section className="bg-[#F5F5F5] text-white py-16 min-h-screen flex items-center justify-center">
     <div className="container mx-auto px-4">
       <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
         <div className="bg-[#5f2509ca] py-6">
           <h2 className="text-3xl font-bold text-center text-white">
             Login / Sign Up
           </h2>
         </div>
         <div className="p-8">
           <form onSubmit={handleSubmit} className="space-y-6">
             <div>
               <label
                 htmlFor="email"
                 className="block text-gray-700 font-medium mb-2"
               >
                 Email
               </label>
               <input
                 id="email"
                 type="email"
                 placeholder="Enter your email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
               />
             </div>
             <div>
               <label
                 htmlFor="password"
                 className="block text-gray-700 font-medium mb-2"
               >
                 Password
               </label>
               <input
                 id="password"
                 type="password"
                 placeholder="Enter your password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
               />
             </div>
             <div>
               <label
                 htmlFor="userType"
                 className="block text-gray-700 font-medium mb-2"
               >
                 User Type
               </label>
               <select
                 id="userType"
                 value={userType}
                 onChange={(e) => setUserType(e.target.value)}
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
               >
                 <option value="student">Student</option>
                 <option value="faculty">Faculty</option>
               </select>
             </div>
             <button
               type="submit"
               className="w-full bg-[#5f2509ca] text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
             >
               Login
             </button>
             <p className="text-center text-gray-600 mt-4">
               Don't have an account?{" "}
               <a
                 href="#"
                 className="text-blue-500 hover:text-blue-700 font-medium transition duration-300"
               >
                 Sign up here
               </a>
               .
             </p>
           </form>
         </div>
       </div>
     </div>
   </section>
 );
};

export default Login;