'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      try {
        const plan = JSON.parse(localStorage.getItem('fitlog-plan') || '[]');

        const saved = JSON.parse(localStorage.getItem('fitlog-saved') || '[]');

        setPlanCount(Array.isArray(plan) ? plan.length : 0);
        setSavedCount(Array.isArray(saved) ? saved.length : 0);
      } catch (error) {
        console.error('Failed to load workout counts:', error);
        setPlanCount(0);
        setSavedCount(0);
      }
    };

    updateCounts();

    window.addEventListener('fitlog-update', updateCounts);
    window.addEventListener('storage', updateCounts);

    return () => {
      window.removeEventListener('fitlog-update', updateCounts);
      window.removeEventListener('storage', updateCounts);
    };
  }, []);

  return (
    <header className="relative border-b border-[#303030] bg-[#101010] ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 ">
        {/* Mobile hamburger button: left side */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="mr-3 flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/20 transition hover:border-[#ccff00] md:hidden"
        >
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl tracking-wider font-black"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span>
            FIT<span className="text-[#ccff00]">LOG</span>
          </span>
        </Link>

        {/* Desktop navigation links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#library"
            style={{
              color: pathname === '/' ? '#ccff00' : '#e5e7eb',
            }}
            className="font-semibold transition-colors"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            style={{
              color: pathname === '/my-plan' ? '#ccff00' : '#e5e7eb',
            }}
            className="font-semibold transition-colors"
          >
            My Plan
          </Link>
        </div>

        {/* Plan and Saved badges */}
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-2 text-xs font-bold text-black! sm:px-4"
          >
            Plan <span>{planCount}</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-[#ccff00] px-3 py-2 text-xs font-bold text-[#ccff00] sm:px-4"
          >
            Saved <span>{savedCount}</span>
          </Link>
        </div>
      </nav>

      {/* Mobile overlay background */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-72 max-w-[85vw] border-r border-white/10 bg-[#101010] px-6 pt-24 shadow-2xl transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col gap-6">
          <Link
            href="/#library"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            className="font-semibold text-gray-200 transition hover:text-[#ccff00]"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            className="font-semibold text-gray-200 transition hover:text-[#ccff00]"
          >
            My Plan
          </Link>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
