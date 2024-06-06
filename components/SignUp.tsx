"use client"
import { useState } from 'react'

import { z } from 'zod';
const userSchema = z.object({

  email: z.string().email(),

});

const passwordSchema = z.string().refine(password => password.length >= 8, {
  message: "Password must be at least 8 characters long",
  path: ['password'], // indicates this error is about the password field
});

function UserForm() {
  const [formData, setFormData] = useState({  email: '', password: '' });
  const [errors, setErrors] = useState({});
  
    const result = userSchema.safeParse(formData);
    if (result.success) {
      // Proceed with form submission
      console.log(result.data);
    } else {
      // Handle validation errors
      setErrors(result.error.formErrors.fieldErrors);
    }
  // The rest of your form goes here
}

export async function SignUp() {
  return (
    <div className="flex justify-center p-10 rounded shadow-md  items-center h-screen bg-gray-900">
      

 <form action={UserForm}
        className="bg-gray-800 p-10 rounded shadow-md  transition duration-300 ease-in-out">
      
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Sign Up</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow  hover:bg-gray-700 hover:text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-400 text-sm font-bold mb-2 hover:bg-gray-700 hover:text-white ">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-700 hover:text-white"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password-confirm" className="block text-gray-400 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="password-confirm"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-700 hover:text-white"
            />
        </div>
        <div>
        <button
          type="submit"
          className="
          border text-sm font-medium relative  w-full border-neutral-200 dark:border-white/[0.2] text-black dark:text-white center r items-center px-8 py-2 rounded-lg hover:bg-gray-700 hover:text-white focus:bg-gray-600 focus:text-white active:bg-violet-400 active:text-white
    "
        >  
          <a href="/user/sign-in" className="text-sm font-medium relative  w-fulldark:border-white/[0.2] text-black dark:text-white center px-8 py-2 hover:text-whit focus:text-white active:bg-violet-400 active:text-white">   Create account </a>
          </button>
          </div>
   </form>
    </div>
  );
}
