import { signIn, providerMap } from "@/lib/auth";
import { AuthError } from "next-auth";

export function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        className="bg-gray-800 p-10 rounded shadow-md"
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Sign In</h2>
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
                <button
          type="submit"
          className="border text-sm font-medium relative  w-full border-neutral-200 dark:border-white/[0.2] text-black dark:text-white center r items-center px-8 py-2 rounded-lg hover:bg-gray-700 hover:text-white focus:bg-gray-600 focus:text-white active:bg-violet-400 active:text-white"
        >
          Sign in
        </button>
          < div className=" mt-4" >
        <button
          type="submit"
            className="
          
          border text-sm font-medium relative  w-full border-neutral-200 bg-blue-400/[0.8] text-black dark:text-white center r items-center px-8 py-2 rounded-lg hover:bg-blue-400/[0.2] hover:text-white focus:bg-gray-600 focus:text-white active:bg-violet-400 active:text-white
      "
        >
          Sign in with GitHub
        </button></div>
        <div className=" mt-4" >      Don't have an account?      <a href="/user/sign-up" className="text-sm font-medium text-gray-400 hover:text-gray-200"> Sign up
        </a></div>
   
      </form>
    
    </div>
  );
}
