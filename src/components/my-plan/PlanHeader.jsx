import React from 'react';

const PlanHeader = () => {
  return (
    <header>
      <p className="mb-3 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
        YOUR TRAINING
      </p>

      <h1 className="text-4xl font-black tracking-tight md:text-6xl">
        MY PLAN
      </h1>

      <p className="mt-4 text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>
    </header>
  );
};

export default PlanHeader;
