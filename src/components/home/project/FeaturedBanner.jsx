import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { featuredBannerData } from './projectsData';

export default function FeaturedBanner() {
  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-xl border border-neutral-100 group">
      {/* Background Image with Scale */}
      <img
        src={featuredBannerData.image}
        alt={featuredBannerData.project}
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Multi-stage High-End Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-[#321300]/25 mix-blend-multiply" />

      {/* Foreground Content */}
      <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 text-white z-10">
        
        {/* Top Meta */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[10px] font-bold tracking-widest uppercase">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>EXCLUSIVE SPOTLIGHT</span>
          </div>

          <p className="mt-4 text-xs font-semibold tracking-widest text-neutral-300 uppercase">
            {featuredBannerData.developer}
          </p>
          <h4 className="text-3xl font-extrabold tracking-tight mt-1 text-white">
            {featuredBannerData.project}
          </h4>
          <p className="text-xs text-amber-200/90 font-medium tracking-wide uppercase mt-1">
            {featuredBannerData.location}
          </p>
        </div>

        {/* Bottom CTA Area */}
        <div>
          <div className="p-3.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 mb-4">
            <p className="text-[11px] uppercase tracking-wider text-neutral-300 font-semibold">
              {featuredBannerData.tagline}
            </p>
            <p className="text-lg font-bold text-white mt-0.5">
              {featuredBannerData.startingPrice}
            </p>
          </div>

          <Link
            href="/featured-project"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-98 shadow-lg"
          >
            <span>Explore Showcase</span>
            <ArrowRight className="w-4 h-4 text-[#e11924]" />
          </Link>
        </div>

      </div>
    </div>
  );
}