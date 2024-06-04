import { signIn, providerMap } from "@/lib/auth";
import { AuthError } from "next-auth";

export function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      {Object.values(providerMap).map((provider) => (
        <form
          className="bg-gray-800 p-10 rounded shadow-md"
          action={async () => {
            "use server";
            try {
              await signIn(provider.id);
            } catch (error) {
              // Signin can fail for a number of reasons, such as the user
              // not existing, or the user not having the correct role.
              // In some cases, you may want to redirect to a custom error
              if (error instanceof AuthError) {
                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
              }

              // Otherwise if a redirects happens NextJS can handle it
              // so you can just re-thrown the error and let NextJS handle it.
              // Docs:
              // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
              throw error;
            }
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
      ))}
    </div>
  );
}
