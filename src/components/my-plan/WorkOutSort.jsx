const WorkoutSort = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="workout-sort"
        className="whitespace-nowrap text-sm text-gray-400"
      >
        Sort By :
      </label>

      <div className="relative ">
        <select
          id="workout-sort"
          value={sortBy}
          onChange={event => setSortBy(event.target.value)}
          className="appearance-none rounded-lg border border-gray-700 bg-[#101010] py-2 pl-3 pr-9 text-sm text-white outline-none transition focus:border-[#ccff00]"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default WorkoutSort;
