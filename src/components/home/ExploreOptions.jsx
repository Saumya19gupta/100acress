// 'use client';

// import { useRef, useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const EXPLORE_OPTIONS = [
//   {
//     id: 'buying',
//     title: 'Buying a home',
//     href: '/properties/buy',
//     isNew: false,
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80',
//     type: 'image'
//   },
//   {
//     id: 'renting',
//     title: 'Renting a home',
//     href: '/properties/rent',
//     isNew: false,
//     image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=500&q=80',
//     type: 'image'
//   },
//   {
//     id: 'invest',
//     title: 'Invest in Real Estate',
//     href: '/investment-options',
//     isNew: true,
//     image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=500&q=80',
//     type: 'image'
//   },
//   {
//     id: 'sell',
//     title: 'Sell/Rent your property',
//     href: '/post-property',
//     isNew: false,
//     bannerText: 'Sell faster at the right price!',
//     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
//     type: 'banner'
//   },
//   {
//     id: 'plots',
//     title: 'Plots/Land',
//     href: '/properties/plots',
//     isNew: false,
//     image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80',
//     type: 'image'
//   },
//   {
//     id: 'insights',
//     title: 'Explore Insights',
//     href: '/insights',
//     isNew: true,
//     iconType: 'bulb',
//     type: 'graphic'
//   },
//   {
//     id: 'pg',
//     title: 'PG / Co-living',
//     href: '/pg-co-living',
//     isNew: false,
//     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=500&q=80',
//     type: 'image'
//   },
//   {
//     id: 'commercial',
//     title: 'Commercial Spaces',
//     href: '/properties/commercial',
//     isNew: false,
//     image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80',
//     type: 'image'
//   }
// ];

// export default function ExploreOptions() {
//   const scrollRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const checkScrollability = () => {
//     const el = scrollRef.current;
//     if (!el) return;
//     setCanScrollLeft(el.scrollLeft > 10);
//     setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
//   };

//   useEffect(() => {
//     checkScrollability();
//     window.addEventListener('resize', checkScrollability);
//     return () => window.removeEventListener('resize', checkScrollability);
//   }, []);

//   const handleScroll = (direction) => {
//     const el = scrollRef.current;
//     if (!el) return;
//     const offset = direction === 'left' ? -280 : 280;
//     el.scrollBy({ left: offset, behavior: 'smooth' });
//     setTimeout(checkScrollability, 350);
//   };

//   return (
//     <section className="w-full bg-white py-8 sm:py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Eyebrow Heading */}
//         <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-neutral-500 mb-6">
//           GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
//         </p>

//         {/* Carousel Container */}
//         <div className="relative group">
          
//           {/* Scroll Left Button */}
//           {canScrollLeft && (
//             <button
//               type="button"
//               onClick={() => handleScroll('left')}
//               aria-label="Scroll left"
//               className="absolute -left-3 top-12 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white text-neutral-700 hover:text-black shadow-md border border-neutral-200 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//           )}

//           {/* Cards Track */}
//           <div
//             ref={scrollRef}
//             onScroll={checkScrollability}
//             className="flex items-start gap-4 sm:gap-5 overflow-x-auto scroll-smooth no-scrollbar py-2 px-1"
//           >
//             {EXPLORE_OPTIONS.map((item) => (
//               <Link
//                 key={item.id}
//                 href={item.href}
//                 className="shrink-0 w-[140px] sm:w-[155px] md:w-[165px] group/card flex flex-col focus:outline-none"
//               >
//                 {/* Visual Thumbnail */}
//                 <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/70 shadow-2xs group-hover/card:shadow-md transition-all duration-200">
                  
//                   {/* Standard Image Item */}
//                   {item.type === 'image' && (
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300 ease-out"
//                       loading="lazy"
//                     />
//                   )}

//                   {/* Banner / Poster Item (Sell Faster Card) */}
//                   {item.type === 'banner' && (
//                     <div className="relative w-full h-full bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 p-2.5 flex items-center justify-between overflow-hidden">
//                       <p className="text-[11px] font-bold text-neutral-900 leading-tight z-10 max-w-[65%]">
//                         {item.bannerText}
//                       </p>
//                       <img
//                         src={item.image}
//                         alt=""
//                         aria-hidden="true"
//                         className="absolute right-0 bottom-0 w-16 h-20 object-cover object-top opacity-90 group-hover/card:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                   )}

//                   {/* Graphic Illustration (Explore Insights Card) */}
//                   {item.type === 'graphic' && (
//                     <div className="w-full h-full bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center p-2">
//                       <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover/card:scale-110 transition-transform">
//                         <svg 
//                           className="w-5 h-5 fill-current" 
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-2 18c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h-4v1z" />
//                         </svg>
//                       </div>
//                     </div>
//                   )}

//                   {/* 'NEW' Micro Badge */}
//                   {item.isNew && (
//                     <span className="absolute top-1.5 left-1.5 bg-[#e11924] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-[3px] uppercase tracking-wider shadow-xs">
//                       NEW
//                     </span>
//                   )}
//                 </div>

//                 {/* Bottom Label */}
//                 <span className="mt-2.5 text-xs sm:text-[13px] font-medium text-neutral-900 text-center leading-snug group-hover/card:text-[#e11924] transition-colors">
//                   {item.title}
//                 </span>
//               </Link>
//             ))}
//           </div>

//           {/* Scroll Right Button */}
//           {canScrollRight && (
//             <button
//               type="button"
//               onClick={() => handleScroll('right')}
//               aria-label="Scroll right"
//               className="absolute -right-3 top-12 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white text-neutral-700 hover:text-black shadow-md border border-neutral-200 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           )}

//         </div>

//       </div>
//     </section>
//   );
// }



// 'use client';

// import { useState, useRef } from 'react';
// import { 
//   ChevronRight, 
//   ChevronLeft, 
//   Search, 
//   ChevronDown, 
//   X, 
//   ArrowRight,
//   TrendingUp,
//   Building,
//   Home,
//   KeyRound,
//   MapPin,
//   Lightbulb
// } from 'lucide-react';

// const EXPLORE_CARDS = [
//   {
//     id: 'buy',
//     title: 'Buying a home',
//     tag: null,
//     defaultTab: 'Buy',
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'rent',
//     title: 'Renting a home',
//     tag: null,
//     defaultTab: 'Rent / Lease',
//     image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'invest',
//     title: 'Invest in Real Estate',
//     tag: 'NEW',
//     defaultTab: 'Buy',
//     image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'sell',
//     title: 'Sell/Rent your property',
//     tag: null,
//     isSpecial: true,
//     defaultTab: 'Rent / Lease',
//     image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'plots',
//     title: 'Plots/Land',
//     tag: null,
//     defaultTab: 'Plots / Land',
//     image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'insights',
//     title: 'Explore Insights',
//     tag: 'NEW',
//     defaultTab: 'Buy',
//     image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'pg',
//     title: 'PG',
//     tag: null,
//     defaultTab: 'PG / Co-living',
//     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
//   },
// ];

// const MODAL_TABS = ['Buy', 'Rent / Lease', 'Plots / Land', 'PG / Co-living'];

// const RESIDENTIAL_TYPES = [
//   'Residential',
//   'Commercial',
//   'Plots / Land',
//   'Agricultural Land'
// ];

// export default function ExploreOptionsSection() {
//   const sliderRef = useRef(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('Buy');
//   const [cityInput, setCityInput] = useState('');
//   const [selectedType, setSelectedType] = useState('Residential');
//   const [isTypeOpen, setIsTypeOpen] = useState(false);

//   // Manual smooth horizontal scroll for the cards list
//   const scroll = (direction) => {
//     if (sliderRef.current) {
//       const scrollAmount = direction === 'left' ? -300 : 300;
//       sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   const handleCardClick = (card) => {
//     setActiveTab(card.defaultTab || 'Buy');
//     setIsModalOpen(true);
//   };

//   return (
//     <section className="w-full bg-white py-12 relative overflow-hidden select-none">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Subtle Section Title */}
//         <p className="text-center text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-8">
//           GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
//         </p>

//         {/* Carousel Wrapper */}
//         <div className="relative group">
          
//           {/* Left Arrow Button */}
//           <button
//             type="button"
//             onClick={() => scroll('left')}
//             aria-label="Scroll left"
//             className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-8 z-20 w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-lg text-neutral-700 flex items-center justify-center hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer hidden sm:flex"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>

//           {/* Cards Horizontal Container */}
//           <div
//             ref={sliderRef}
//             className="flex items-start gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1"
//           >
//             {EXPLORE_CARDS.map((card) => (
//               <div
//                 key={card.id}
//                 onClick={() => handleCardClick(card)}
//                 className="shrink-0 w-36 sm:w-44 md:w-48 cursor-pointer group/card"
//               >
//                 {/* Image Card Container */}
//                 <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 group-hover/card:border-neutral-400 group-hover/card:shadow-md transition-all duration-300">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 ease-out"
//                     loading="lazy"
//                   />

//                   {/* Special Illustration Text Overlays (like Sell faster at the right price) */}
//                   {card.isSpecial && (
//                     <div className="absolute inset-0 bg-emerald-900/10 p-2.5 flex flex-col justify-between pointer-events-none">
//                       <span className="text-[11px] font-bold text-neutral-900 leading-tight">
//                         Sell faster at<br />the right price!
//                       </span>
//                     </div>
//                   )}

//                   {/* Red 'NEW' Badge */}
//                   {card.tag && (
//                     <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-[#e11924] text-white shadow-xs">
//                       {card.tag}
//                     </span>
//                   )}
//                 </div>

//                 {/* Bottom Label */}
//                 <p className="mt-2.5 text-xs sm:text-sm font-semibold text-neutral-800 text-center truncate group-hover/card:text-[#e11924] transition-colors">
//                   {card.title}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow Button (matches image 1 round design) */}
//           <button
//             type="button"
//             onClick={() => scroll('right')}
//             aria-label="Scroll right"
//             className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-8 z-20 w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-lg text-neutral-700 flex items-center justify-center hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer flex"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>

//       </div>

//       {/* ================= EXACT SEARCH MODAL FROM IMAGE 2 ================= */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          
//           {/* Main Modal Card */}
//           <div 
//             className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden animate-in zoom-in-95 duration-200"
//             onClick={(e) => e.stopPropagation()}
//           >
            
//             {/* Modal Body */}
//             <div className="p-6 sm:p-7">
              
//               {/* Header Title + Close Button */}
//               <div className="flex items-center justify-between mb-5">
//                 <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
//                   Explore real estate in...
//                 </h3>
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
//                   aria-label="Close"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>

//               {/* Sub-Tabs Row (Buy, Rent/Lease, etc.) */}
//               <div className="flex items-center gap-6 border-b border-neutral-100 pb-3 mb-5 overflow-x-auto no-scrollbar">
//                 {MODAL_TABS.map((tab) => {
//                   const isActive = activeTab === tab;
//                   return (
//                     <button
//                       key={tab}
//                       type="button"
//                       onClick={() => setActiveTab(tab)}
//                       className={`text-xs sm:text-sm font-semibold whitespace-nowrap relative pb-1 transition-colors cursor-pointer ${
//                         isActive ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-700'
//                       }`}
//                     >
//                       <span>{tab}</span>
//                       {isActive && (
//                         <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#0066cc] rounded-full" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>

//               {/* Pill-Shaped Combined Search Bar */}
//               <div className="flex items-center border border-neutral-300 rounded-full p-1.5 shadow-xs focus-within:border-[#0066cc] transition-colors">
                
//                 {/* 1. Residential Dropdown */}
//                 <div className="relative">
//                   <button
//                     type="button"
//                     onClick={() => setIsTypeOpen(!isTypeOpen)}
//                     className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-800 hover:bg-neutral-50 rounded-full cursor-pointer"
//                   >
//                     <span>{selectedType}</span>
//                     <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${isTypeOpen ? 'rotate-180' : ''}`} />
//                   </button>

//                   {isTypeOpen && (
//                     <div className="absolute top-[120%] left-0 z-30 w-44 bg-white rounded-2xl shadow-xl border border-neutral-200 p-1.5">
//                       {RESIDENTIAL_TYPES.map((type) => (
//                         <button
//                           key={type}
//                           type="button"
//                           onClick={() => {
//                             setSelectedType(type);
//                             setIsTypeOpen(false);
//                           }}
//                           className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
//                             selectedType === type ? 'bg-sky-50 text-[#0066cc] font-semibold' : 'text-neutral-700 hover:bg-neutral-100'
//                           }`}
//                         >
//                           {type}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <div className="h-5 w-px bg-neutral-200 mx-1" />

//                 {/* 2. City Input with Search Icon */}
//                 <div className="flex-1 flex items-center px-2">
//                   <Search className="w-4 h-4 text-neutral-400 mr-2 shrink-0" />
//                   <input
//                     type="text"
//                     value={cityInput}
//                     onChange={(e) => setCityInput(e.target.value)}
//                     placeholder="City Name"
//                     className="w-full text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 bg-transparent focus:outline-none"
//                   />
//                 </div>

//                 {/* 3. Explore CTA Button */}
//                 <button
//                   type="button"
//                   className="px-5 py-2 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors cursor-pointer shrink-0 shadow-xs"
//                 >
//                   Explore
//                 </button>
//               </div>

//               {/* History / "Continue browsing where you left off..." */}
//               <div className="mt-6">
//                 <p className="text-[11px] text-neutral-500 font-medium mb-2.5">
//                   Continue browsing where you left off...
//                 </p>
//                 <div className="flex items-center gap-2">
//                   <button
//                     type="button"
//                     onClick={() => setCityInput('Dubai')}
//                     className="px-3 py-1.5 rounded-full border border-neutral-200 hover:border-neutral-400 text-xs font-medium text-neutral-700 bg-neutral-50/50 transition-colors cursor-pointer"
//                   >
//                     Buy in Dubai
//                   </button>
//                 </div>
//               </div>

//             </div>

//             {/* Bottom Gray Sub-Bar */}
//             <div className="bg-neutral-50 border-t border-neutral-100 px-6 py-3 flex items-center justify-between text-xs text-neutral-600">
//               <div className="flex items-center gap-4">
//                 <button type="button" className="hover:text-neutral-900 font-medium cursor-pointer">
//                   Dubai <span className="text-[10px] text-neutral-400 ml-1">For NRI</span>
//                 </button>
//                 <span className="text-neutral-300">&bull;</span>
//                 <span className="text-neutral-400 text-[11px]">International</span>
//               </div>

//               <button
//                 type="button"
//                 className="inline-flex items-center gap-1 font-semibold text-neutral-700 hover:text-[#0066cc] transition-colors cursor-pointer"
//               >
//                 <span>View top cities</span>
//                 <ArrowRight className="w-3.5 h-3.5" />
//               </button>
//             </div>

//           </div>

//         </div>
//       )}

//     </section>
//   );
// }



// 'use client';

// import { useState, useRef } from 'react';
// import { 
//   ChevronRight, 
//   ChevronLeft, 
//   Search, 
//   ChevronDown, 
//   X, 
//   ArrowRight
// } from 'lucide-react';

// const EXPLORE_CARDS = [
//   {
//     id: 'buy',
//     title: 'Buying a home',
//     tag: null,
//     defaultTab: 'Buy',
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'rent',
//     title: 'Renting a home',
//     tag: null,
//     defaultTab: 'Rent / Lease',
//     image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'invest',
//     title: 'Invest in Real Estate',
//     tag: 'NEW',
//     defaultTab: 'Buy',
//     image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'sell',
//     title: 'Sell/Rent your property',
//     tag: null,
//     isSpecial: true,
//     defaultTab: 'Rent / Lease',
//     image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'plots',
//     title: 'Plots/Land',
//     tag: null,
//     defaultTab: 'Plots / Land',
//     image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'insights',
//     title: 'Explore Insights',
//     tag: 'NEW',
//     defaultTab: 'Buy',
//     image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     id: 'pg',
//     title: 'PG',
//     tag: null,
//     defaultTab: 'PG / Co-living',
//     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
//   },
// ];

// const MODAL_TABS = ['Buy', 'Rent / Lease', 'Plots / Land', 'PG / Co-living'];

// const RESIDENTIAL_TYPES = [
//   'Residential',
//   'Commercial',
//   'Plots / Land',
//   'Agricultural Land'
// ];

// export default function ExploreOptionsSection() {
//   const sliderRef = useRef(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('Buy');
//   const [cityInput, setCityInput] = useState('');
//   const [selectedType, setSelectedType] = useState('Residential');
//   const [isTypeOpen, setIsTypeOpen] = useState(false);

//   // Smooth scroll handler
//   const scroll = (direction) => {
//     if (sliderRef.current) {
//       const scrollAmount = direction === 'left' ? -300 : 300;
//       sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   const handleCardClick = (card) => {
//     setActiveTab(card.defaultTab || 'Buy');
//     setIsModalOpen(true);
//   };

//   return (
//     <section className="w-full bg-white py-12 relative overflow-hidden select-none">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Subtle Section Title */}
//         <p className="text-center text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-8">
//           GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
//         </p>

//         {/* Carousel Wrapper */}
//         <div className="relative group">
          
//           {/* Left Arrow Button */}
//           <button
//             type="button"
//             onClick={() => scroll('left')}
//             aria-label="Scroll left"
//             className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-8 z-20 w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-lg text-neutral-700 flex items-center justify-center hover:bg-neutral-50 hover:text-[#e11924] active:scale-95 transition-all cursor-pointer hidden sm:flex"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>

//           {/* Cards Container (Bottom Scrollbar Hidden across all browsers) */}
//           <div
//             ref={sliderRef}
//             className="flex items-start gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-4 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
//           >
//             {EXPLORE_CARDS.map((card) => (
//               <div
//                 key={card.id}
//                 onClick={() => handleCardClick(card)}
//                 className="shrink-0 w-36 sm:w-44 md:w-48 cursor-pointer group/card"
//               >
//                 {/* Image Card Container */}
//                 <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 group-hover/card:border-neutral-400 group-hover/card:shadow-md transition-all duration-300">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 ease-out"
//                     loading="lazy"
//                   />

//                   {/* Special Illustration Text Overlays */}
//                   {card.isSpecial && (
//                     <div className="absolute inset-0 bg-neutral-900/20 p-2.5 flex flex-col justify-between pointer-events-none">
//                       <span className="text-[11px] font-bold text-white leading-tight drop-shadow-xs">
//                         Sell faster at<br />the right price!
//                       </span>
//                     </div>
//                   )}

//                   {/* Red 'NEW' Badge */}
//                   {card.tag && (
//                     <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-[#e11924] text-white shadow-xs">
//                       {card.tag}
//                     </span>
//                   )}
//                 </div>

//                 {/* Bottom Label */}
//                 <p className="mt-2.5 text-xs sm:text-sm font-semibold text-neutral-800 text-center truncate group-hover/card:text-[#e11924] transition-colors">
//                   {card.title}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow Button */}
//           <button
//             type="button"
//             onClick={() => scroll('right')}
//             aria-label="Scroll right"
//             className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-8 z-20 w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-lg text-neutral-700 flex items-center justify-center hover:bg-neutral-50 hover:text-[#e11924] active:scale-95 transition-all cursor-pointer flex"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>

//       </div>

//       {/* ================= SEARCH MODAL (BRAND RED ACCENTS) ================= */}
//       {isModalOpen && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
//           onClick={() => setIsModalOpen(false)}
//         >
//           {/* Main Modal Card */}
//           <div 
//             className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden animate-in zoom-in-95 duration-200"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Body */}
//             <div className="p-6 sm:p-7">
              
//               {/* Header Title + Close Button */}
//               <div className="flex items-center justify-between mb-5">
//                 <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
//                   Explore real estate in...
//                 </h3>
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
//                   aria-label="Close"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>

//               {/* Sub-Tabs Row with Red Indicator */}
//               <div className="flex items-center gap-6 border-b border-neutral-100 pb-3 mb-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
//                 {MODAL_TABS.map((tab) => {
//                   const isActive = activeTab === tab;
//                   return (
//                     <button
//                       key={tab}
//                       type="button"
//                       onClick={() => setActiveTab(tab)}
//                       className={`text-xs sm:text-sm font-semibold whitespace-nowrap relative pb-1 transition-colors cursor-pointer ${
//                         isActive ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-700'
//                       }`}
//                     >
//                       <span>{tab}</span>
//                       {isActive && (
//                         <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#e11924] rounded-full" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>

//               {/* Pill-Shaped Combined Search Bar with Red Focus */}
//               <div className="flex items-center border border-neutral-300 rounded-full p-1.5 shadow-xs focus-within:border-[#e11924] focus-within:ring-1 focus-within:ring-[#e11924] transition-all">
                
//                 {/* 1. Residential Dropdown */}
//                 <div className="relative">
//                   <button
//                     type="button"
//                     onClick={() => setIsTypeOpen(!isTypeOpen)}
//                     className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-800 hover:bg-neutral-50 rounded-full cursor-pointer"
//                   >
//                     <span>{selectedType}</span>
//                     <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${isTypeOpen ? 'rotate-180' : ''}`} />
//                   </button>

//                   {isTypeOpen && (
//                     <div className="absolute top-[120%] left-0 z-30 w-44 bg-white rounded-2xl shadow-xl border border-neutral-200 p-1.5">
//                       {RESIDENTIAL_TYPES.map((type) => (
//                         <button
//                           key={type}
//                           type="button"
//                           onClick={() => {
//                             setSelectedType(type);
//                             setIsTypeOpen(false);
//                           }}
//                           className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
//                             selectedType === type 
//                               ? 'bg-[#e11924]/10 text-[#e11924] font-semibold' 
//                               : 'text-neutral-700 hover:bg-neutral-100'
//                           }`}
//                         >
//                           {type}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <div className="h-5 w-px bg-neutral-200 mx-1" />

//                 {/* 2. City Input */}
//                 <div className="flex-1 flex items-center px-2">
//                   <Search className="w-4 h-4 text-neutral-400 mr-2 shrink-0" />
//                   <input
//                     type="text"
//                     value={cityInput}
//                     onChange={(e) => setCityInput(e.target.value)}
//                     placeholder="City Name"
//                     className="w-full text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 bg-transparent focus:outline-none"
//                   />
//                 </div>

//                 {/* 3. Primary Red Explore Button */}
//                 <button
//                   type="button"
//                   className="px-5 py-2 rounded-full bg-[#e11924] hover:bg-[#c9141f] active:scale-95 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer shrink-0 shadow-xs"
//                 >
//                   Explore
//                 </button>
//               </div>

//               {/* History Section */}
//               <div className="mt-6">
//                 <p className="text-[11px] text-neutral-500 font-medium mb-2.5">
//                   Continue browsing where you left off...
//                 </p>
//                 <div className="flex items-center gap-2">
//                   <button
//                     type="button"
//                     onClick={() => setCityInput('Dubai')}
//                     className="px-3 py-1.5 rounded-full border border-neutral-200 hover:border-[#e11924] hover:text-[#e11924] text-xs font-medium text-neutral-700 bg-neutral-50/50 transition-colors cursor-pointer"
//                   >
//                     Buy in Dubai
//                   </button>
//                 </div>
//               </div>

//             </div>

//             {/* Bottom Sub-Bar */}
//             <div className="bg-neutral-50 border-t border-neutral-100 px-6 py-3 flex items-center justify-between text-xs text-neutral-600">
//               <div className="flex items-center gap-4">
//                 <button type="button" className="hover:text-neutral-900 font-medium cursor-pointer">
//                   Dubai <span className="text-[10px] text-neutral-400 ml-1">For NRI</span>
//                 </button>
//                 <span className="text-neutral-300">&bull;</span>
//                 <span className="text-neutral-400 text-[11px]">International</span>
//               </div>

//               <button
//                 type="button"
//                 className="inline-flex items-center gap-1 font-semibold text-neutral-700 hover:text-[#e11924] transition-colors cursor-pointer"
//               >
//                 <span>View top cities</span>
//                 <ArrowRight className="w-3.5 h-3.5" />
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//     </section>
//   );
// }





'use client';

import { useState, useRef } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  ChevronDown, 
  X, 
  ArrowRight
} from 'lucide-react';

const EXPLORE_CARDS = [
  {
    id: 'buy',
    title: 'Buying a home',
    tag: null,
    defaultTab: 'Buy',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'rent',
    title: 'Renting a home',
    tag: null,
    defaultTab: 'Rent / Lease',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'invest',
    title: 'Invest in Real Estate',
    tag: 'NEW',
    defaultTab: 'Buy',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sell',
    title: 'Sell/Rent your property',
    tag: null,
    isSpecial: true,
    defaultTab: 'Rent / Lease',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'plots',
    title: 'Plots/Land',
    tag: null,
    defaultTab: 'Plots / Land',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'insights',
    title: 'Explore Insights',
    tag: 'NEW',
    defaultTab: 'Buy',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pg',
    title: 'PG',
    tag: null,
    defaultTab: 'PG / Co-living',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
  },
];

const MODAL_TABS = ['Buy', 'Rent / Lease', 'Plots / Land', 'PG / Co-living'];

const RESIDENTIAL_TYPES = [
  'Residential',
  'Commercial',
  'Plots / Land',
  'Agricultural Land'
];

export default function ExploreOptionsSection() {
  const sliderRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Buy');
  const [cityInput, setCityInput] = useState('');
  const [selectedType, setSelectedType] = useState('Residential');
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  // Smooth scroll handler
  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCardClick = (card) => {
    setActiveTab(card.defaultTab || 'Buy');
    setIsModalOpen(true);
  };

  return (
    <section className="w-full bg-white py-2 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Title */}
        <p className="text-center text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-8">
          GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
        </p>

        {/* Carousel Wrapper */}
        <div className="relative group">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-8 z-20 w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-lg text-neutral-700 flex items-center justify-center hover:bg-neutral-50 hover:text-[#e11924] active:scale-95 transition-all cursor-pointer hidden sm:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Container (Bottom Scrollbar Hidden across all browsers) */}
          <div
            ref={sliderRef}
            className="flex items-start gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-4 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {EXPLORE_CARDS.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)}
                className="shrink-0 w-36 sm:w-44 md:w-48 cursor-pointer group/card"
              >
                {/* Image Card Container */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 group-hover/card:border-neutral-400 group-hover/card:shadow-md transition-all duration-300">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Special Illustration Text Overlays */}
                  {card.isSpecial && (
                    <div className="absolute inset-0 bg-neutral-900/20 p-2.5 flex flex-col justify-between pointer-events-none">
                      <span className="text-[11px] font-bold text-white leading-tight drop-shadow-xs">
                        Sell faster at<br />the right price!
                      </span>
                    </div>
                  )}

                  {/* Red 'NEW' Badge */}
                  {card.tag && (
                    <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-[#e11924] text-white shadow-xs">
                      {card.tag}
                    </span>
                  )}
                </div>

                {/* Bottom Label */}
                <p className="mt-2.5 text-xs sm:text-sm font-semibold text-neutral-800 text-center truncate group-hover/card:text-[#e11924] transition-colors">
                  {card.title}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-8 z-20 w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-lg text-neutral-700 flex items-center justify-center hover:bg-neutral-50 hover:text-[#e11924] active:scale-95 transition-all cursor-pointer flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* ================= SEARCH MODAL (BRAND RED ACCENTS) ================= */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Main Modal Card */}
          <div 
            className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Body */}
            <div className="p-6 sm:p-7">
              
              {/* Header Title + Close Button */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  Explore real estate in...
                </h3>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Sub-Tabs Row with Red Indicator */}
              <div className="flex items-center gap-6 border-b border-neutral-100 pb-3 mb-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {MODAL_TABS.map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`text-xs sm:text-sm font-semibold whitespace-nowrap relative pb-1 transition-colors cursor-pointer ${
                        isActive ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-700'
                      }`}
                    >
                      <span>{tab}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#e11924] rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Pill-Shaped Combined Search Bar with Red Focus */}
              <div className="flex items-center border border-neutral-300 rounded-full p-1.5 shadow-xs focus-within:border-[#e11924] focus-within:ring-1 focus-within:ring-[#e11924] transition-all">
                
                {/* 1. Residential Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsTypeOpen(!isTypeOpen)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-800 hover:bg-neutral-50 rounded-full cursor-pointer"
                  >
                    <span>{selectedType}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${isTypeOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isTypeOpen && (
                    <div className="absolute top-[120%] left-0 z-30 w-44 bg-white rounded-2xl shadow-xl border border-neutral-200 p-1.5">
                      {RESIDENTIAL_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            setSelectedType(type);
                            setIsTypeOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                            selectedType === type 
                              ? 'bg-[#e11924]/10 text-[#e11924] font-semibold' 
                              : 'text-neutral-700 hover:bg-neutral-100'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="h-5 w-px bg-neutral-200 mx-1" />

                {/* 2. City Input */}
                <div className="flex-1 flex items-center px-2">
                  <Search className="w-4 h-4 text-neutral-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                    placeholder="City Name"
                    className="w-full text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 bg-transparent focus:outline-none"
                  />
                </div>

                {/* 3. Primary Red Explore Button */}
                <button
                  type="button"
                  className="px-5 py-2 rounded-full bg-[#e11924] hover:bg-[#c9141f] active:scale-95 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer shrink-0 shadow-xs"
                >
                  Explore
                </button>
              </div>

              {/* History Section */}
              <div className="mt-6">
                <p className="text-[11px] text-neutral-500 font-medium mb-2.5">
                  Continue browsing where you left off...
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCityInput('Dubai')}
                    className="px-3 py-1.5 rounded-full border border-neutral-200 hover:border-[#e11924] hover:text-[#e11924] text-xs font-medium text-neutral-700 bg-neutral-50/50 transition-colors cursor-pointer"
                  >
                    Buy in Dubai
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Sub-Bar */}
            <div className="bg-neutral-50 border-t border-neutral-100 px-6 py-3 flex items-center justify-between text-xs text-neutral-600">
              <div className="flex items-center gap-4">
                <button type="button" className="hover:text-neutral-900 font-medium cursor-pointer">
                  Dubai <span className="text-[10px] text-neutral-400 ml-1">For NRI</span>
                </button>
                <span className="text-neutral-300">&bull;</span>
                <span className="text-neutral-400 text-[11px]">International</span>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-1 font-semibold text-neutral-700 hover:text-[#e11924] transition-colors cursor-pointer"
              >
                <span>View top cities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}