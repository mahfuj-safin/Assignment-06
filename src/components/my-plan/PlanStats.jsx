import React from 'react';

const PlanStats = ({ exercises, minutes, calories }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <p className="text-sm text-gray-400">Exercises</p>
        <p className="mt-2 text-3xl font-bold">{exercises}</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <p className="text-sm text-gray-400">Minutes</p>
        <p className="mt-2 text-3xl font-bold">{minutes}</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <p className="text-sm text-gray-400">Calories</p>
        <p className="mt-2 text-3xl font-bold">{calories}</p>
      </div>
    </div>
  );
};

export default PlanStats;
