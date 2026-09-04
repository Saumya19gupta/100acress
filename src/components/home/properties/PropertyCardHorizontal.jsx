

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Heart, 
  ShieldCheck, 
  Star, 
  MessageCircle, 
  Building2,
  Maximize2
} from 'lucide-react';

export default function PropertyCardHorizontal({ property }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className="group bg-white rounded-xl border border-neutral-200/90 hover:border-neutral-300 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row overflow-hidden">
      
      {/* 1. Compact Media Frame */}
      <div className="relative w-full sm:w-56 md:w-60 shrink-0 aspect-[16/10] sm:aspect-auto bg-neutral-100 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Verification Tag */}
        {property.verified && (
          <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-bold text-white uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Verified</span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          aria-label="Save property"
          className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/80 hover:bg-white backdrop-blur-xs flex items-center justify-center text-neutral-600 hover:text-[#e11924] shadow-xs transition-colors cursor-pointer"
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-[#e11924] text-[#e11924]' : ''}`} />
        </button>

        {/* BHK Pill */}
        <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-white/95 text-[10px] font-bold text-neutral-900 shadow-xs uppercase">
          {property.bhk}
        </span>
      </div>

      {/* 2. Sleek Content Body */}
      <div className="flex-1 p-3.5 sm:p-4 flex flex-col justify-between min-w-0">
        
        <div>
          {/* Header Row: Developer + Rating */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 truncate flex items-center gap-1">
              <Building2 className="w-3 h-3" />
              {property.developer}
            </span>
            <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] font-bold shrink-0">
              <span>{property.rating}</span>
              <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
            </div>
          </div>

          {/* Title & Location */}
          <h3 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight mt-1 truncate group-hover:text-[#e11924] transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 text-[11px] text-neutral-500 mt-0.5">
            <MapPin className="w-3 h-3 text-neutral-400 shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          {/* Inline Specs */}
          <div className="mt-2.5 flex items-center gap-3 text-[11px] text-neutral-600 pt-2 border-t border-neutral-100">
            <span className="flex items-center gap-1 font-semibold text-neutral-900">
              <Maximize2 className="w-3 h-3 text-neutral-400" />
              {property.area}
            </span>
            <span className="text-neutral-300">&bull;</span>
            <span className="truncate">Possession: <strong className="text-neutral-800 font-semibold">{property.possession}</strong></span>
          </div>
        </div>

        {/* Price & Compact Buttons */}
        <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-base sm:text-lg font-black text-neutral-950 tracking-tight leading-none">
              {property.priceDisplay}
            </div>
            <span className="text-[10px] text-neutral-400 font-medium">
              {property.pricePerSqFt}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <a
              href={`https://wa.me/918500900100?text=Interested%20in%20${encodeURIComponent(property.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 px-2.5 rounded-lg border border-neutral-200 hover:border-emerald-600 hover:text-emerald-700 text-neutral-700 text-[11px] font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <Link
              href={`/property/${property.id}`}
              className="h-8 px-3.5 rounded-lg bg-[#e11924] hover:bg-[#c9141f] text-white text-[11px] font-bold tracking-wide flex items-center justify-center transition-colors shadow-2xs"
            >
              Details
            </Link>
          </div>
        </div>

      </div>

    </article>
  );
}