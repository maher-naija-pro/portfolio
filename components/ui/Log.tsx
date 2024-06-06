"use client";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";



export function Log() {
    
  const session = useSession()
  const router = useRouter();
  if (session.data?.user) {

    return (
      <div className="">

        <button
           onClick={() => signOut()}
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-lg"
        >  <span>Logout</span>

          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
  
      </div>
    );
  }
  else return (
      <div className="">
      <button
          onClick={() => router.push("/user/sign-in")}
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-lg"
        >  <span>LogIn</span>

          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
  
      </div>


  )
};
