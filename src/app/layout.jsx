import { ToastContainer } from 'react-toastify';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

export const metadata = {
  title: 'FitLog | Workout Library',
  description:
    "Pick your workout, build today's plan, and track your training with FitLog.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div className="h-16"></div>}>
          <Navbar />
        </Suspense>
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
