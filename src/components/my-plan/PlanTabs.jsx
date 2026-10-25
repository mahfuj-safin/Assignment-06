import React from 'react';

const PlanTabs = ({ activeTab, setActiveTab, planCount, savedCount }) => {
  return (
    <div className="mt-10 flex gap-6 border-b border-white/10">
      <button
        onClick={() => setActiveTab('plan')}
        className={`border-b-2 px-1 pb-4 text-sm font-bold ${
          activeTab === 'plan'
            ? 'border-[#ccff00] text-[#ccff00]'
            : 'border-transparent text-gray-400'
        }`}
      >
        Today's Plan ({planCount})
      </button>

      <button
        onClick={() => setActiveTab('saved')}
        className={`border-b-2 px-1 pb-4 text-sm font-bold ${
          activeTab === 'saved'
            ? 'border-[#ccff00] text-[#ccff00]'
            : 'border-transparent text-gray-400'
        }`}
      >
        Saved ({savedCount})
      </button>
    </div>
  );
};

export default PlanTabs;
