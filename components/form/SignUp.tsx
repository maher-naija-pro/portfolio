"use client"

import React from "react";
import { useForm, type FieldValues } from "react-hook-form"

export function SignUp() {
const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
const onSubmit = async (data: FieldValues) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };
  return (
    <div className="flex justify-center p-10 rounded shadow-md  items-center h-screen bg-gray-900">
      

 <form   onSubmit={handleSubmit(onSubmit)} 
        className="bg-gray-800 p-10 rounded shadow-md  transition duration-300 ease-in-out">
      
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Sign Up</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
              Email
            </label>
          <input
              type="email"
            id="email"
               {...register("email", {
          required: "Email is required",
        })}
              placeholder="your email here"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow  hover:bg-gray-700 hover:text-white"
          />
              {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}
        </div>
      
        <div >

        <button
          type="submit"
          className="
          border text-sm font-medium relative  w-full border-neutral-200 dark:border-white/[0.2] text-black dark:text-white center r items-center px-8 py-2 rounded-lg hover:bg-gray-700 hover:text-white focus:bg-gray-600 focus:text-white active:bg-violet-400 active:text-white"
        >  
          <a className="text-sm font-medium relative  w-full dark:border-white/[0.2] text-black dark:text-white center px-8 py-2 hover:text-whit focus:text-white active:bg-violet-400 active:text-white">   Create account </a>
          </button>
          </div>
   </form>
    </div>
  );
}
