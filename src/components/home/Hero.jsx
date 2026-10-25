import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-8">
      <div className="grid items-center gap-8 rounded-xl border border-[#303030] bg-[#15161b] px-6 py-10 sm:px-10 md:grid-cols-2 md:px-12 md:py-14">
        {/* Hero text */}
        <div>
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="mt-7 inline-block bg-[#ccff00] px-6 py-3 text-sm font-extrabold text-black! transition hover:bg-[#b8e600]"
          >
            BROWSE WORKOUTS ↓
          </a>
        </div>

        {/* Hero image */}
        <div className="flex items-center justify-center">
          <Image
            src="/banner.png"
            alt="FitLog workout banner"
            width={740}
            height={500}
            className="h-auto w-full max-w-xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
