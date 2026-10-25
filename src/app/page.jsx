import Hero from '../components/home/Hero';
import WorkOutLibrary from '../components/home/WorkOutLibrary';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <WorkOutLibrary />
      </main>
    </div>
  );
}
