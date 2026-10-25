import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-[#303030] bg-[#101010]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-xl font-black tracking-wider">
          FIT<span className="text-[#ccff00]">LOG</span>
        </Link>

        <p className="text-sm text-gray-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
