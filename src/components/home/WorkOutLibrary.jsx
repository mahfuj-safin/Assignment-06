'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WorkOutLibrary = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://api.abcz.workers.dev/api/fitlog')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to load workouts');
        }

        return res.json();
      })
      .then(data => {
        setWorkouts(data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="library" className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="mb-7">
        <h2 className="text-3xl font-black text-white">THE LIBRARY</h2>

        <p className="mt-2 text-sm text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {loading && (
        <p className="py-10 text-center text-gray-400">Loading workouts...</p>
      )}

      {error && <p className="py-10 text-center text-red-400">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map(workout => (
            <div
              key={workout.id}
              className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ccff00] hover:shadow-[0_8px_30px_rgba(204,255,0,0.08)]"
            >
              <Image
                src={workout.image}
                alt={workout.name}
                width={740}
                height={500}
                className="h-52 w-full object-cover"
              />

              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs text-lime-400">
                    {workout.difficulty}
                  </span>

                  <span className="text-sm text-yellow-400">
                    ★ {workout.rating}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">{workout.name}</h3>

                <p className="text-sm text-gray-400">
                  {workout.muscleGroups.join(', ')}
                </p>

                <div className="flex justify-between text-sm text-gray-300">
                  <span>{workout.duration} min</span>
                  <span>{workout.caloriesBurned} kcal</span>
                </div>

                <p className="text-sm text-gray-400">
                  {workout.sets} sets · {workout.reps} reps
                </p>

                <Link
                  href={`/workouts/${workout.id}`}
                  className="block rounded-lg bg-lime-400 px-4 py-3 text-center font-bold text-black! transition hover:bg-lime-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default WorkOutLibrary;
