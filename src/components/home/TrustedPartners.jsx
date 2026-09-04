'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Building2, Award } from 'lucide-react';
import { partners } from '@/data/partnersData';

export default function TrustedPartners() {
  const scrollRef = useRef(null);
  const animationFrameId = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  // Triple data list ensures seamless infinite boundary wrapping
  const extendedPartners = [...partners, ...partners, ...partners];

  // Initialize scroll position in the center block
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollLeft = el.scrollWidth / 3;
    }
  }, []);

  // Smooth continuous requestAnimationFrame ticker
  const runTicker = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const singleSetWidth = el.scrollWidth / 3;

    // Boundary wrap logic
    if (el.scrollLeft >= singleSetWidth * 2) {
      el.scrollLeft -= singleSetWidth;
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += singleSetWidth;
    }

    if (!isPaused && !isDragging) {
      el.scrollLeft += 0.85; // Continuous scroll speed
    }

    animationFrameId.current = requestAnimationFrame(runTicker);
  }, [isPaused, isDragging]);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(runTicker);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [runTicker]);

  // Arrow button click handling
  const handleManualScroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    setIsPaused(true);
    const scrollOffset = direction === 'left' ? -320 : 320;
    el.scrollBy({ left: scrollOffset, behavior: 'smooth' });

    // Resume auto-scroll after smooth transition completes
    setTimeout(() => {
      setIsPaused(false);
    }, 700);
  };

  // Drag & Touch handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setIsPaused(false);
    }
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current.scrollLeft = scrollStart - walk;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  return (
    <section 
      aria-labelledby="trusted-partners-title"
      className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-[#e11924] via-[#b80e18] to-[#6d050c]"
    >
      {/* Decorative ambient blurred shapes */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 -left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -right-32 w-[30rem] h-[30rem] rounded-full bg-black/20 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#ff4a55]/20 blur-2xl" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5 shadow-xs">
            <Award className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Trusted Network
            </span>
          </div>

          <h2 
            id="trusted-partners-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
          >
            Trusted by Industry Leaders
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed font-normal">
            We collaborate with leading real estate developers and trusted partners to deliver better opportunities for our customers.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative mt-14 sm:mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            handleMouseUpOrLeave();
            setIsPaused(false);
          }}
        >
          {/* Edge vignette gradients */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#ba0e18] to-transparent z-10" 
          />
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#73060d] to-transparent z-10" 
          />

          {/* Slider Element */}
          <div
            ref={scrollRef}
            tabIndex={0}
            aria-label="Partner logo carousel"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex items-center gap-4 sm:gap-6 overflow-x-hidden select-none cursor-grab active:cursor-grabbing py-4 focus:outline-none"
          >
            {extendedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="shrink-0 w-60 sm:w-68 lg:w-72 bg-white/95 hover:bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-black/10 border border-white/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-3.5">
                  {/* Abstract Logo Avatar Badge */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#e11924] to-[#8d070f] flex items-center justify-center text-white font-bold text-sm sm:text-base tracking-wider shrink-0 shadow-sm">
                    {partner.initials}
                  </div>

                  {/* Brand Meta */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 truncate">
                      {partner.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-500 font-medium truncate mt-0.5">
                      {partner.category}
                    </p>
                  </div>

                  <Building2 className="w-4 h-4 text-neutral-300 shrink-0" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>

          {/* Accessible Control Arrows */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleManualScroll('left')}
              aria-label="Previous partner slides"
              className="w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#e11924] border border-white/30 backdrop-blur-md flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => handleManualScroll('right')}
              aria-label="Next partner slides"
              className="w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#e11924] border border-white/30 backdrop-blur-md flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}