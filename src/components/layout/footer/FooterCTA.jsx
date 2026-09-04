'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <div className="pb-16 border-b border-[#27272A]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Your next property starts here.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Explore verified properties, connect with trusted experts, and make confident real-estate decisions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
          <Link
            href="/properties"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white bg-[#F1192C] hover:bg-[#d81425] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F1192C]"
          >
            <span>Explore Properties</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/list-property"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium text-white border border-white/20 hover:border-white hover:bg-white/5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            List Your Property
          </Link>
        </div>
      </div>
    </div>
  );
}