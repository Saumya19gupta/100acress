'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Heart, ShieldCheck, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <article className="group bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between">
      
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Top Floating Glass Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          {project.reraApproved && (
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] font-semibold tracking-wider uppercase text-white shadow-xs">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>RERA Approved</span>
            </div>
          )}

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            aria-label="Save to favorites"
            className="pointer-events-auto w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur-md flex items-center justify-center text-neutral-600 hover:text-[#e11924] shadow-sm transition-all duration-200 active:scale-90"
          >
            <Heart 
              className={`w-4 h-4 transition-colors ${
                isLiked ? 'fill-[#e11924] text-[#e11924]' : 'text-neutral-600'
              }`} 
            />
          </button>
        </div>

        {/* Category Pill Tag */}
        {project.tag && (
          <div className="absolute bottom-3 left-3">
            <span className="px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-neutral-800 shadow-xs">
              {project.tag}
            </span>
          </div>
        )}
      </div>

      {/* Meta Content Section */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-semibold text-neutral-900 tracking-tight line-clamp-1 group-hover:text-[#e11924] transition-colors">
            {project.title}
          </h3>

          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-[#e11924] tracking-tight">
              {project.price}
            </span>
          </div>

          <div className="mt-2 flex items-start gap-1.5 text-neutral-500">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
            <p className="text-xs font-normal line-clamp-1">
              {project.location}
            </p>
          </div>
        </div>

        {/* Actions Row */}
        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-2">
          {/* WhatsApp Direct Connect */}
          <a
            href={`https://wa.me/${project.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(project.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/80 text-emerald-700 text-xs font-semibold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-600/20 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          {/* Project Details Link */}
          <Link
            href={`/project/${project.id}`}
            aria-label={`View details of ${project.title}`}
            className="w-8 h-8 rounded-xl border border-neutral-200 hover:border-[#e11924] hover:text-[#e11924] flex items-center justify-center text-neutral-600 transition-colors shrink-0"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </article>
  );
}