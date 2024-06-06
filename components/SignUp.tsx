

export function SignUP() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        className="bg-gray-800 p-10 rounded shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-400 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
          />
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-lg"
          >
            Create account
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-100">Sign In</h2>
        <button
          type="submit"
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-lg"
        >
         Create account
        </button>
   
    </div>
  );
}
