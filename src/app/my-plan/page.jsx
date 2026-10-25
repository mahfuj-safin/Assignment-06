'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import PlanHeader from '@/components/my-plan/PlanHeader';
import PlanStats from '@/components/my-plan/PlanStats';
import PlanTabs from '@/components/my-plan/PlanTabs';
import WorkoutCard from '@/components/my-plan/WorkoutCard';
import EmptyPlan from '@/components/my-plan/EmptyPlan';
import WorkoutSort from '@/components/my-plan/WorkOutSort';

const MyPlanPage = () => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [activeTab, setActiveTab] = useState('plan');
  const [isLoading, setIsLoading] = useState(true);
  const [completed, setCompleted] = useState([]);
  const [sortBy, setSortBy] = useState('duration');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      try {
        const storedPlan = JSON.parse(
          localStorage.getItem('fitlog-plan') || '[]',
        );

        const storedSaved = JSON.parse(
          localStorage.getItem('fitlog-saved') || '[]',
        );

        const storedCompleted = JSON.parse(
          localStorage.getItem('fitlog-completed') || '[]',
        );

        setPlan(Array.isArray(storedPlan) ? storedPlan : []);
        setSaved(Array.isArray(storedSaved) ? storedSaved : []);
        setCompleted(Array.isArray(storedCompleted) ? storedCompleted : []);
      } catch (error) {
        console.error('Failed to load workouts:', error);
      } finally {
        setIsLoading(false);
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const activeWorkouts = activeTab === 'plan' ? plan : saved;

  const sortedWorkouts = [...activeWorkouts].sort((a, b) => {
    if (sortBy === 'duration') {
      return Number(b.duration || 0) - Number(a.duration || 0);
    }

    if (sortBy === 'calories') {
      return Number(b.caloriesBurned || 0) - Number(a.caloriesBurned || 0);
    }

    if (sortBy === 'rating') {
      return Number(b.rating || 0) - Number(a.rating || 0);
    }

    return 0;
  });

  const totalMinutes = activeWorkouts.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0,
  );

  const totalCalories = activeWorkouts.reduce(
    (total, workout) => total + Number(workout.caloriesBurned || 0),
    0,
  );

  const handleMarkAsDone = workoutId => {
    if (completed.includes(workoutId)) {
      return;
    }

    const updatedCompleted = [...completed, workoutId];

    setCompleted(updatedCompleted);

    localStorage.setItem('fitlog-completed', JSON.stringify(updatedCompleted));

    toast.success('Workout completed! Great job!');
  };

  const handleRemoveWorkout = workoutId => {
    if (activeTab === 'plan') {
      const updatedPlan = plan.filter(workout => workout.id !== workoutId);

      setPlan(updatedPlan);
      localStorage.setItem('fitlog-plan', JSON.stringify(updatedPlan));

      const updatedCompleted = completed.filter(id => id !== workoutId);

      setCompleted(updatedCompleted);

      localStorage.setItem(
        'fitlog-completed',
        JSON.stringify(updatedCompleted),
      );
    } else {
      const updatedSaved = saved.filter(workout => workout.id !== workoutId);

      setSaved(updatedSaved);
      localStorage.setItem('fitlog-saved', JSON.stringify(updatedSaved));
    }

    window.dispatchEvent(new Event('fitlog-update'));

    toast.success('Workout removed from your list!');
  };

  return (
    <main className="min-h-screen bg-[#0c0d0a] px-5 py-12 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <PlanHeader />

        <PlanStats
          exercises={activeWorkouts.length}
          minutes={totalMinutes}
          calories={totalCalories}
        />

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#303030]">
          <PlanTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            planCount={plan.length}
            savedCount={saved.length}
          />

          <div className="pb-3">
            <WorkoutSort sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>

        <section className="py-8">
          {isLoading ? (
            <p className="text-gray-400">Loading workouts…</p>
          ) : sortedWorkouts.length === 0 ? (
            <EmptyPlan />
          ) : (
            <div className="flex flex-col gap-4">
              {sortedWorkouts.map(workout => (
                <WorkoutCard
                  key={workout.id}
                  workout={workout}
                  activeTab={activeTab}
                  completed={completed}
                  onMarkAsDone={handleMarkAsDone}
                  onRemove={handleRemoveWorkout}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default MyPlanPage;
