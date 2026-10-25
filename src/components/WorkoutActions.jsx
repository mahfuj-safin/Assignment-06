'use client';

import { toast } from 'react-toastify';

// Handle adding workouts to the plan and saving them for later
export default function WorkoutActions({ workout }) {
  // Add the selected workout to the user's daily plan
  const handleAddToPlan = () => {
    try {
      const currentPlan = JSON.parse(
        localStorage.getItem('fitlog-plan') || '[]',
      );

      if (!Array.isArray(currentPlan)) {
        throw new Error('Invalid workout plan data');
      }

      const isAlreadyPlanned = currentPlan.some(({ id }) => id === workout.id);

      if (isAlreadyPlanned) {
        toast.error('This workout is already in your plan.');
        return;
      }

      if (currentPlan.length >= 5) {
        toast.error('Your daily plan is limited to 5 workouts.');
        return;
      }

      const updatedPlan = [...currentPlan, workout];

      localStorage.setItem('fitlog-plan', JSON.stringify(updatedPlan));

      window.dispatchEvent(new Event('fitlog-update'));

      toast.success("Workout added to today's plan!");
    } catch (error) {
      console.error('Failed to update workout plan:', error);

      toast.error('Unable to save your workout. Please try again.');
    }
  };

  // Save the selected workout for later reference
  const handleSaveForLater = () => {
    try {
      const savedWorkouts = JSON.parse(
        localStorage.getItem('fitlog-saved') || '[]',
      );

      if (!Array.isArray(savedWorkouts)) {
        throw new Error('Invalid saved workouts data');
      }

      const isAlreadySaved = savedWorkouts.some(({ id }) => id === workout.id);

      if (isAlreadySaved) {
        toast.error('This workout is already saved.');
        return;
      }

      const updatedSavedWorkouts = [...savedWorkouts, workout];

      localStorage.setItem(
        'fitlog-saved',
        JSON.stringify(updatedSavedWorkouts),
      );

      window.dispatchEvent(new Event('fitlog-update'));

      toast.success('Workout saved for later!');
    } catch (error) {
      console.error('Failed to save workout:', error);

      toast.error('Unable to save this workout. Please try again.');
    }
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleAddToPlan}
        className="flex-1 rounded-lg bg-[#ccff00] px-5 py-3 font-bold text-black"
      >
        + Add to Today Plan
      </button>

      <button
        onClick={handleSaveForLater}
        className="flex-1 rounded-lg border border-gray-600 px-5 py-3 text-white"
      >
        ♡ Save for Later
      </button>
    </div>
  );
}
