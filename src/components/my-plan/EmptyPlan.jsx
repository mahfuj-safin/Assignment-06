import Link from 'next/link';
import React from 'react';

const EmptyPlan = () => {
  return (
    <div className="py-16 text-center">
      <h2 className="text-2xl font-black">NOTHING HERE YET</h2>

      <p className="mt-3 text-gray-400">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/#library"
        className="mt-6 inline-block rounded bg-[#ccff00] px-6 py-3 font-bold text-black!"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyPlan;
