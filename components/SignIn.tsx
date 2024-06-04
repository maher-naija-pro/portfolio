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
        <button
          type="submit"
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-lg"
        >
          Sign in with GitHub
        </button>
      </form>
    </div>
  );
}
