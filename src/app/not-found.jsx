"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      <div className="text-center max-w-lg">
        {/* 404 */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 animate-pulse">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">Page Not Found</h2>

        {/* Description */}
        <p className="mt-4 text-gray-300 text-lg">Sorry, the page you are looking for does not exist.</p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link href="/">
            <button className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 transition duration-300 shadow-lg hover:scale-105">
              Go Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-2xl border border-gray-500 hover:bg-gray-700 transition duration-300 shadow-lg hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
