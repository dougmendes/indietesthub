"use client"; 

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa"; // arrow icon 

export default function SignIn() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Header */}
      <header className="w-full px-8 py-4">
        <Link href="/">
          <div className="text-2xl font-bold">IndieTestHub</div>
        </Link>
      </header>

      {/* Sign Up Form */}
      <main className="flex flex-col gap-8 items-center justify-center flex-grow">
        <div className="relative bg-white p-8 rounded-md shadow-lg w-full max-w-md">
          {/*Arrow to back home */}
          <Link href="/" className="absolute top-4 left-4 text-black hover:text-gray-600 transition">
            <FaArrowLeft size={20} />
          </Link>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-black mb-6">Sign In</h1>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-black mb-2">
                E-mail
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-2 border rounded-md text-black"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-black mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-2 border rounded-md text-black"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:shadow-neon hover:bg-gradient-cyberpunk transition-all duration-300"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
