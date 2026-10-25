import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center text-white">
      <p className="text-sm font-bold tracking-[0.3em] text-[#ccff00]">
        FITLOG
      </p>

      <h1 className="mt-4 text-7xl font-black text-[#ccff00] sm:text-9xl">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold sm:text-3xl">PAGE NOT FOUND</h2>

      <p className="mt-3 max-w-md text-gray-400">
        Looks like this page does not exist. Let&apos;s get you back to your
        workout library.
      </p>

      <Link
        href="/#library"
        className="mt-8 rounded-lg bg-[#ccff00] px-6 py-3 font-bold text-black! transition hover:bg-lime-300"
      >
        BACK TO WORKOUTS
      </Link>
    </main>
  );
};

export default NotFound;
