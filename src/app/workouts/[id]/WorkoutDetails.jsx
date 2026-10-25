'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WorkoutActions from '@/components/WorkoutActions';

const WorkoutDetails = ({ id }) => {
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Workout not found');
        }

        return res.json();
      })
      .then(data => {
        setWorkout(data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <p className="py-20 text-center text-gray-400">
        Loading workout details...
      </p>
    );
  }

  if (error || !workout) {
    return (
      <section className="px-5 py-20 text-center text-white">
        <h1 className="text-3xl font-bold">Workout Not Found</h1>

        <p className="mt-3 text-gray-400">
          Sorry, this workout could not be found.
        </p>

        <Link
          href="/#library"
          className="mt-6 inline-block rounded-lg bg-lime-400 px-5 py-3 font-bold text-gray-950"
        >
          Back to Library
        </Link>
      </section>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 text-white">
      <Link
        href="/#library"
        className="mb-8 inline-block text-lime-400 hover:underline"
      >
        ← Back to Library
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Image
            src={workout.image}
            alt={workout.name}
            width={740}
            height={500}
            loading="eager"
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-lime-400">
            {workout.difficulty}
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            {workout.name}
          </h1>
          <p className="mt-4 text-gray-400">{workout.description}</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-900 p-4">
              <p className="text-sm text-gray-400">Duration</p>
              <p className="mt-1 text-xl font-bold">{workout.duration} min</p>
            </div>

            <div className="rounded-lg bg-gray-900 p-4">
              <p className="text-sm text-gray-400">Calories</p>
              <p className="mt-1 text-xl font-bold">
                {workout.caloriesBurned} kcal
              </p>
            </div>

            <div className="rounded-lg bg-gray-900 p-4">
              <p className="text-sm text-gray-400">Sets</p>
              <p className="mt-1 text-xl font-bold">{workout.sets}</p>
            </div>

            <div className="rounded-lg bg-gray-900 p-4">
              <p className="text-sm text-gray-400">Reps</p>
              <p className="mt-1 text-xl font-bold">{workout.reps}</p>
            </div>
            <div className="rounded-lg bg-gray-900 p-4 ">
              <p className="text-sm text-gray-400">Rating</p>
              <p className="mt-1 text-xl font-bold text-white">
                ★ {workout.rating}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-bold">Muscle Groups</h2>
            <p className="mt-2 text-gray-400">
              {workout.muscleGroups.join(', ')}
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-lg font-bold">Equipment</h2>
            <p className="mt-2 text-gray-400">{workout.equipment}</p>
          </div>
          <WorkoutActions workout={workout} />
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Instructions</h2>

        <ol className="mt-5 space-y-4">
          {workout.instructions.map((instruction, index) => (
            <li
              key={index}
              className="rounded-lg border border-gray-800 bg-gray-900 p-4"
            >
              <span className="mr-3 font-bold text-lime-400">{index + 1}.</span>

              {instruction}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
};

export default WorkoutDetails;
