import { Suspense } from 'react';
import WorkoutDetails from './WorkoutDetails';

const WorkoutPageContent = async ({ params }) => {
  const { id } = await params;

  return <WorkoutDetails id={id} />;
};

const WorkoutPage = ({ params }) => {
  return (
    <Suspense
      fallback={
        <p className="py-20 text-center text-gray-400">
          Loading workout details...
        </p>
      }
    >
      <WorkoutPageContent params={params} />
    </Suspense>
  );
};

export default WorkoutPage;
