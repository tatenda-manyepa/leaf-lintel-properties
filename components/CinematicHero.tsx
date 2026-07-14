'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CinematicHero() {
  const [videoReady, setVideoReady] = useState(false);
  const [videoUnavailable, setVideoUnavailable] = useState(false);

  return (
    <section className="cinematic-hero relative min-h-[760px] overflow-hidden bg-charcoal">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero.svg"
          alt="Elegant contemporary property interior"
          fill
          priority
          className="cinematic-still object-cover opacity-70"
        />

        {!videoUnavailable && (
          <video
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ${
              videoReady ? 'opacity-70' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero.svg"
            aria-hidden="true"
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoUnavailable(true)}
          >
            <source src="/videos/leaf-lintel-hero.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/25" />
      <div className="cinematic-grain absolute inset-0 opacity-[0.055]" />

      <div className="section-shell relative z-10 flex min-h-[760px] items-center pt-28">
        <div className="hero-copy max-w-3xl py-20">
          <p className="eyebrow">Property · People · Long-term value</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-paper sm:text-6xl lg:text-7xl">
            Creating beautiful homes for modern living.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-paper/75">
            Leaf &amp; Lintel Properties creates and manages high-quality professional accommodation, with a considered approach to property, partnership and place.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-charcoal transition hover:-translate-y-0.5 hover:bg-soft-gold">
              Explore our project <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href="#landlords" className="rounded-md border border-paper/35 px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-paper transition hover:border-soft-gold hover:text-soft-gold">
              For landlords
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-paper/60 transition hover:text-soft-gold sm:flex"
        aria-label="Scroll to learn more"
      >
        Discover
        <span className="flex h-10 w-6 items-center justify-center rounded-full border border-paper/30">
          <ArrowDownIcon className="scroll-arrow h-3.5 w-3.5" />
        </span>
      </a>
    </section>
  );
}
