import Image from 'next/image';
import Link from 'next/link';

const WorkoutCard = ({
  workout,
  activeTab,
  completed,
  onMarkAsDone,
  onRemove,
}) => {
  const isCompleted = completed.includes(workout.id);

  return (
    <article className="flex flex-col gap-5 rounded-xl border border-white/10 bg-white/3 p-4 transition hover:border-white/20 sm:flex-row sm:items-center sm:p-5 ">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <Image
          src={workout.image}
          alt={workout.name}
          width={128}
          height={112}
          className="h-24 w-24 shrink-0 rounded-lg object-cover sm:h-28 sm:w-32"
        />

        <div className="min-w-0">
          <h3 className="text-lg font-bold sm:text-xl">{workout.name}</h3>

          <p className="mt-2 text-sm text-gray-400">
            {workout.equipment || 'No equipment specified'}
          </p>

          <p className="mt-3 text-sm text-gray-300">
            ◷ {workout.duration} min
            {' · '}
            🔥 {workout.caloriesBurned} kcal
            {' · '}★ {workout.rating}
          </p>

          {activeTab === 'plan' && isCompleted && (
            <p className="mt-2 text-sm font-semibold text-[#ccff00]">
              ✓ Completed
            </p>
          )}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="whitespace-nowrap rounded-lg bg-[#ccff00] px-3 py-2.5 text-center text-sm font-bold text-black! transition hover:bg-[#b8e600]"
        >
          View Details
        </Link>

        {activeTab === 'plan' && (
          <button
            onClick={() => onMarkAsDone(workout.id)}
            disabled={isCompleted}
            className="whitespace-nowrap rounded-lg border border-[#ccff00]/50 px-3 py-2.5 text-sm font-semibold text-[#ccff00] transition hover:bg-[#ccff00]/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isCompleted ? '✓ Done' : '✓ Mark as Done'}
          </button>
        )}

        <button
          onClick={() => onRemove(workout.id)}
          aria-label={`Remove ${workout.name}`}
          title="Remove workout"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl text-gray-400 transition hover:bg-red-500/10 hover:text-red-400"
        >
          ×
        </button>
      </div>
    </article>
  );
};

export default WorkoutCard;
