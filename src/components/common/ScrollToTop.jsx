// 'use client';

// import { useState, useEffect } from 'react';
// import { ChevronUp } from 'lucide-react';

// export default function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
//       const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

//       // 300px ke baad button show hoga
//       if (scrollTop > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }

//       // Circular ring ke liye progress % calculate karega
//       if (scrollHeight > 0) {
//         const progress = Math.min((scrollTop / scrollHeight) * 100, 100);
//         setScrollProgress(progress);
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   // Circular progress calculations (Radius = 18)
//   const radius = 18;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

//   return (
//     <div
//       className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out ${
//         isVisible
//           ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
//           : 'opacity-0 translate-y-4 pointer-events-none scale-90'
//       }`}
//     >
//       <button
//         type="button"
//         onClick={scrollToTop}
//         aria-label="Scroll to top"
//         className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_24px_rgba(225,25,36,0.25)] flex items-center justify-center border border-neutral-200/80 active:scale-95 transition-all duration-200 cursor-pointer"
//       >
//         {/* Circular Progress Ring */}
//         <svg
//           className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-[2px]"
//           viewBox="0 0 44 44"
//         >
//           {/* Background Track */}
//           <circle
//             cx="22"
//             cy="22"
//             r={radius}
//             className="stroke-neutral-100"
//             strokeWidth="2.5"
//             fill="transparent"
//           />
//           {/* Red Progress Stroke */}
//           <circle
//             cx="22"
//             cy="22"
//             r={radius}
//             className="stroke-[#e11924] transition-all duration-75 ease-out"
//             strokeWidth="2.5"
//             strokeDasharray={circumference}
//             strokeDashoffset={strokeDashoffset}
//             strokeLinecap="round"
//             fill="transparent"
//           />
//         </svg>

//         {/* Center Arrow Icon with Hover Bounce */}
//         <ChevronUp className="w-5 h-5 text-neutral-700 group-hover:text-[#e11924] group-hover:-translate-y-0.5 transition-all duration-200" strokeWidth={2.5} />
//       </button>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (scrollHeight > 0) {
        const progress = Math.min((scrollTop / scrollHeight) * 100, 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Professional Custom Easing Scroll Animation
  const scrollToTop = () => {
    const startPosition = window.scrollY || document.documentElement.scrollTop;
    if (startPosition === 0) return;

    // Smooth duration: 800ms (standard professional feel)
    const duration = 800;
    let startTime = null;

    // easeInOutCubic: Shuruat me smooth, beech me gentle, end me bilkul soft stop
    const easeInOutCubic = (t) => {
      return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition * (1 - ease));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-4 pointer-events-none scale-90'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_24px_rgba(225,25,36,0.25)] flex items-center justify-center border border-neutral-200/80 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        {/* Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-[2px]"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-neutral-100"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-[#e11924] transition-all duration-75 ease-out"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Arrow Icon with subtle hover lift */}
        <ChevronUp 
          className="w-5 h-5 text-neutral-700 group-hover:text-[#e11924] group-hover:-translate-y-0.5 transition-all duration-200" 
          strokeWidth={2.5} 
        />
      </button>
    </div>
  );
}