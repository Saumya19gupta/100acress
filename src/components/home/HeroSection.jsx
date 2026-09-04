// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { 
//   Search, 
//   MapPin, 
//   Home, 
//   IndianRupee, 
//   ChevronDown, 
//   SlidersHorizontal,
//   Sparkles,
//   ShieldCheck
// } from 'lucide-react';

// const TABS = [
//   { id: 'buy', label: 'Buy' },
//   { id: 'rent', label: 'Rent' },
//   { id: 'commercial', label: 'Commercial' },
//   { id: 'plots', label: 'Plots / Land' },
// ];

// const LOCATIONS = [
//   'Golf Course Road, Gurugram',
//   'Dwarka Expressway, Gurugram',
//   'Golf Course Ext. Road, Gurugram',
//   'South Delhi, Delhi',
//   'Downtown Dubai, UAE',
//   'Palm Jumeirah, Dubai',
//   'Worli, Mumbai',
//   'Goa (Villas)',
// ];

// const PROPERTY_TYPES = [
//   'Ultra Luxury Apartments',
//   'Penthouses',
//   'Independent Floors',
//   'Luxury Villas',
//   'Branded Residences',
//   'Studio / Serviced Suites',
//   'Commercial Retail / SCO',
// ];

// const BUDGETS = [
//   '₹1 Cr - ₹3 Cr',
//   '₹3 Cr - ₹5 Cr',
//   '₹5 Cr - ₹10 Cr',
//   '₹10 Cr - ₹20 Cr',
//   '₹20 Cr+',
// ];

// const QUICK_SEARCHES = [
//   'Golf Course Road',
//   'Dwarka Expressway',
//   'Penthouses Under ₹10 Cr',
//   'Sobha Developers',
//   'Dubai Marina',
// ];

// export default function HeroSection() {
//   const [activeTab, setActiveTab] = useState('buy');
//   const [location, setLocation] = useState(LOCATIONS[0]);
//   const [propertyType, setPropertyType] = useState(PROPERTY_TYPES[0]);
//   const [budget, setBudget] = useState(BUDGETS[1]);

//   // Dropdown open states
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const searchBarRef = useRef(null);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
//         setOpenDropdown(null);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const query = new URLSearchParams({
//       intent: activeTab,
//       location,
//       type: propertyType,
//       budget,
//     });
//     window.location.href = `/properties?${query.toString()}`;
//   };

//   return (
//     <section className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
//       {/* 1. HERO BACKGROUND WITH AMBIENT VIGNETTE OVERLAY */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         {/* Replace with your high-res villa/penthouse image path */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000 ease-out"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85')`,
//           }}
//         />
//         {/* Layered dark gradients for legibility & smooth footer transition */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
//         <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black" />
//       </div>

//       {/* 2. HERO CONTENT CONTAINER */}
//       <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
//         {/* Trust Badge */}
//         <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F1192C] opacity-75" />
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F1192C]" />
//           </span>
//           <span className="text-xs font-medium text-[#A1A1AA] tracking-wide">
//             India & Dubai's Premier Luxury Real Estate Platform
//           </span>
//           <ShieldCheck className="w-3.5 h-3.5 text-[#F1192C]" />
//         </div>

//         {/* Main Headline */}
//         <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-3xl leading-[1.15]">
//           Find Spaces Worth Calling <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#A1A1AA]">Home.</span>
//         </h1>

//         {/* Sub-headline */}
//         <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#A1A1AA] max-w-xl leading-relaxed">
//           Curated penthouses, high-end builder floors, and branded luxury residences with verified listings and end-to-end guidance.
//         </p>

//         {/* 3. MULTI-TABBED FLOATING SEARCH CONSOLE */}
//         <div ref={searchBarRef} className="w-full mt-10 max-w-4xl">
          
//           {/* Navigation Tabs */}
//           <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3">
//             <div className="inline-flex p-1 rounded-full bg-black/60 backdrop-blur-md border border-[#27272A]">
//               {TABS.map((tab) => {
//                 const isActive = activeTab === tab.id;
//                 return (
//                   <button
//                     key={tab.id}
//                     type="button"
//                     onClick={() => {
//                       setActiveTab(tab.id);
//                       setOpenDropdown(null);
//                     }}
//                     className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
//                       isActive 
//                         ? 'bg-[#F1192C] text-white shadow-lg shadow-[#F1192C]/20' 
//                         : 'text-[#A1A1AA] hover:text-white hover:bg-white/5'
//                     }`}
//                   >
//                     {tab.label}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Search Box Panel */}
//           <div className="relative mt-2 p-2 sm:p-3 bg-black/80 backdrop-blur-xl border border-[#27272A] rounded-2xl sm:rounded-full shadow-2xl">
//             <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-stretch sm:items-center divide-y sm:divide-y-0 sm:divide-x divide-[#27272A] gap-2 sm:gap-0">
              
//               {/* Field 1: Location */}
//               <div className="relative flex-1 text-left">
//                 <button
//                   type="button"
//                   onClick={() => setOpenDropdown(openDropdown === 'location' ? null : 'location')}
//                   className="w-full px-4 py-3 flex items-center justify-between gap-3 text-left hover:bg-white/5 sm:rounded-l-full transition-colors"
//                 >
//                   <div className="flex items-center gap-3 min-w-0">
//                     <MapPin className="w-4 h-4 text-[#F1192C] shrink-0" />
//                     <div className="truncate">
//                       <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#71717A]">Location</span>
//                       <span className="block text-xs sm:text-sm font-medium text-white truncate">{location}</span>
//                     </div>
//                   </div>
//                   <ChevronDown className={`w-3.5 h-3.5 text-[#71717A] shrink-0 transition-transform duration-200 ${openDropdown === 'location' ? 'rotate-180' : ''}`} />
//                 </button>

//                 {openDropdown === 'location' && (
//                   <div className="absolute left-0 top-full mt-2 w-72 bg-[#0d0d10] border border-[#27272A] rounded-xl shadow-2xl py-2 z-50 text-left">
//                     <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-[#71717A]">Prime Hotspots</div>
//                     {LOCATIONS.map((loc) => (
//                       <button
//                         key={loc}
//                         type="button"
//                         onClick={() => {
//                           setLocation(loc);
//                           setOpenDropdown(null);
//                         }}
//                         className={`w-full px-4 py-2 text-xs text-left hover:bg-white/5 transition-colors ${location === loc ? 'text-[#F1192C] font-semibold' : 'text-[#A1A1AA]'}`}
//                       >
//                         {loc}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Field 2: Property Type */}
//               <div className="relative flex-1 text-left">
//                 <button
//                   type="button"
//                   onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}
//                   className="w-full px-4 py-3 flex items-center justify-between gap-3 text-left hover:bg-white/5 transition-colors"
//                 >
//                   <div className="flex items-center gap-3 min-w-0">
//                     <Home className="w-4 h-4 text-[#F1192C] shrink-0" />
//                     <div className="truncate">
//                       <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#71717A]">Property Type</span>
//                       <span className="block text-xs sm:text-sm font-medium text-white truncate">{propertyType}</span>
//                     </div>
//                   </div>
//                   <ChevronDown className={`w-3.5 h-3.5 text-[#71717A] shrink-0 transition-transform duration-200 ${openDropdown === 'type' ? 'rotate-180' : ''}`} />
//                 </button>

//                 {openDropdown === 'type' && (
//                   <div className="absolute left-0 top-full mt-2 w-64 bg-[#0d0d10] border border-[#27272A] rounded-xl shadow-2xl py-2 z-50 text-left">
//                     <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-[#71717A]">Categories</div>
//                     {PROPERTY_TYPES.map((type) => (
//                       <button
//                         key={type}
//                         type="button"
//                         onClick={() => {
//                           setPropertyType(type);
//                           setOpenDropdown(null);
//                         }}
//                         className={`w-full px-4 py-2 text-xs text-left hover:bg-white/5 transition-colors ${propertyType === type ? 'text-[#F1192C] font-semibold' : 'text-[#A1A1AA]'}`}
//                       >
//                         {type}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Field 3: Budget */}
//               <div className="relative flex-1 text-left">
//                 <button
//                   type="button"
//                   onClick={() => setOpenDropdown(openDropdown === 'budget' ? null : 'budget')}
//                   className="w-full px-4 py-3 flex items-center justify-between gap-3 text-left hover:bg-white/5 transition-colors"
//                 >
//                   <div className="flex items-center gap-3 min-w-0">
//                     <IndianRupee className="w-4 h-4 text-[#F1192C] shrink-0" />
//                     <div className="truncate">
//                       <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#71717A]">Price Range</span>
//                       <span className="block text-xs sm:text-sm font-medium text-white truncate">{budget}</span>
//                     </div>
//                   </div>
//                   <ChevronDown className={`w-3.5 h-3.5 text-[#71717A] shrink-0 transition-transform duration-200 ${openDropdown === 'budget' ? 'rotate-180' : ''}`} />
//                 </button>

//                 {openDropdown === 'budget' && (
//                   <div className="absolute left-0 top-full mt-2 w-56 bg-[#0d0d10] border border-[#27272A] rounded-xl shadow-2xl py-2 z-50 text-left">
//                     <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-[#71717A]">Budget Tier</div>
//                     {BUDGETS.map((b) => (
//                       <button
//                         key={b}
//                         type="button"
//                         onClick={() => {
//                           setBudget(b);
//                           setOpenDropdown(null);
//                         }}
//                         className={`w-full px-4 py-2 text-xs text-left hover:bg-white/5 transition-colors ${budget === b ? 'text-[#F1192C] font-semibold' : 'text-[#A1A1AA]'}`}
//                       >
//                         {b}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Search Button */}
//               <div className="p-1 sm:pl-2">
//                 <button
//                   type="submit"
//                   className="w-full sm:w-auto px-6 py-3.5 sm:rounded-full rounded-xl bg-[#F1192C] hover:bg-[#d81425] text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-[#F1192C]/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
//                 >
//                   <Search className="w-4 h-4" />
//                   <span>Search</span>
//                 </button>
//               </div>

//             </form>
//           </div>

//           {/* 4. QUICK SUGGESTIONS BELOW SEARCH */}
//           <div className="mt-4 flex items-center justify-center flex-wrap gap-2 text-xs text-[#71717A]">
//             <span className="flex items-center gap-1 font-medium">
//               <Sparkles className="w-3.5 h-3.5 text-[#F1192C]" /> Popular:
//             </span>
//             {QUICK_SEARCHES.map((item) => (
//               <button
//                 key={item}
//                 type="button"
//                 onClick={() => setLocation(item)}
//                 className="px-2.5 py-1 rounded-full border border-[#27272A] bg-black/40 text-[#A1A1AA] hover:text-white hover:border-white/30 transition-colors"
//               >
//                 {item}
//               </button>
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }












// 'use client';

// import { useState, useEffect } from 'react';
// import { 
//   Search, 
//   MapPin, 
//   Home, 
//   IndianRupee, 
//   ChevronDown, 
//   ChevronLeft, 
//   ChevronRight,
//   Sparkles,
//   Building2
// } from 'lucide-react';

// const SLIDES = [
//   {
//     id: 1,
//     url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85',
//     alt: 'Luxury Modern Villa with Pool'
//   },
//   {
//     id: 2,
//     url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85',
//     alt: 'Contemporary Architectural Mansion'
//   },
//   {
//     id: 3,
//     url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
//     alt: 'Ultra Luxury High-Rise Penthouse View'
//   },
//   {
//     id: 4,
//     url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=85',
//     alt: 'Minimalist Modern Waterfront Residence'
//   }
// ];

// const PROPERTY_TYPES = [
//   'All Residential',
//   'Apartments / Flats',
//   'Independent Floors',
//   'Luxury Villas',
//   'Penthouses',
//   'Plots & Land',
//   'Studio Apartments'
// ];

// const BUDGET_RANGES = [
//   'Any Budget',
//   'Under ₹50 Lac',
//   '₹50 Lac - ₹1 Cr',
//   '₹1 Cr - ₹3 Cr',
//   '₹3 Cr - ₹5 Cr',
//   '₹5 Cr - ₹10 Cr',
//   '₹10 Cr - ₹20 Cr',
//   'Above ₹20 Cr'
// ];

// const CITIES = [
//   'Gurugram',
//   'Dubai (UAE)',
//   'Delhi NCR',
//   'Mumbai',
//   'Noida',
//   'Goa',
//   'Ayodhya'
// ];

// const QUICK_TRENDS = [
//   'Golf Course Road',
//   'Dwarka Expressway',
//   'Sohna Road',
//   'DLF Phase 5',
//   'M3M Golfestate',
//   'Southern Peripheral Road'
// ];

// export default function HeroSection() {
//   // Slider State
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   // Search Box State
//   const [activeTab, setActiveTab] = useState('Buy');
//   const [selectedCity, setSelectedCity] = useState('Gurugram');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedType, setSelectedType] = useState('Apartments / Flats');
//   const [selectedBudget, setSelectedBudget] = useState('₹1 Cr - ₹3 Cr');

//   // Dropdown Visibility
//   const [openDropdown, setOpenDropdown] = useState(null); // 'city' | 'type' | 'budget' | null

//   // Auto slide effect
//   useEffect(() => {
//     if (isPaused) return;
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 5500);

//     return () => clearInterval(timer);
//   }, [isPaused]);

//   const handlePrevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
//   };

//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     const payload = {
//       intent: activeTab,
//       city: selectedCity,
//       query: searchQuery,
//       type: selectedType,
//       budget: selectedBudget,
//     };
//     console.log('Search Triggered:', payload);
//     // Router navigation ya API trigger yahan add kar sakte hain
//   };

//   return (
//     <section 
//       className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[760px] flex items-end justify-center overflow-hidden bg-black"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => {
//         setIsPaused(false);
//         setOpenDropdown(null);
//       }}
//     >
//       {/* ================= BACKGROUND IMAGE SLIDER ================= */}
//       <div className="absolute inset-0 w-full h-full pointer-events-none">
//         {SLIDES.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
//             } transform transition-transform duration-[7000ms]`}
//           >
//             <img
//               src={slide.url}
//               alt={slide.alt}
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//         ))}

//         {/* Multi-layered Cinematic Dark Overlay for Visual Contrast */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
//         <div className="absolute inset-0 bg-black/25" />
//       </div>

//       {/* Slider Controls (Minimalist & Corporate) */}
//       <div className="absolute top-1/2 -translate-y-1/2 w-full px-4 sm:px-8 flex justify-between items-center pointer-events-none z-10 hidden sm:flex">
//         <button
//           type="button"
//           onClick={handlePrevSlide}
//           aria-label="Previous Slide"
//           className="pointer-events-auto w-11 h-11 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md text-white/80 hover:text-white border border-white/10 hover:border-white/30 flex items-center justify-center transition-all duration-200"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           type="button"
//           onClick={handleNextSlide}
//           aria-label="Next Slide"
//           className="pointer-events-auto w-11 h-11 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md text-white/80 hover:text-white border border-white/10 hover:border-white/30 flex items-center justify-center transition-all duration-200"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Slide Indicators (Dots) */}
//       <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-10 flex items-center gap-2">
//         {SLIDES.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//             className={`h-1.5 transition-all duration-300 rounded-full ${
//               index === currentSlide 
//                 ? 'w-8 bg-[#e11924]' 
//                 : 'w-2 bg-white/40 hover:bg-white/70'
//             }`}
//           />
//         ))}
//       </div>

//       {/* ================= SEARCH BOX CONTAINER ================= */}
//       <div className="relative z-20 w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        
//         {/* Navigation Tabs */}
//         <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 bg-black/70 backdrop-blur-xl border border-white/15 rounded-2xl sm:rounded-full mb-3 shadow-2xl overflow-x-auto max-w-full no-scrollbar">
//           {['Buy', 'Rent', 'Commercial', 'Plots / Land', 'New Projects'].map((tab) => {
//             const isActive = activeTab === tab;
//             return (
//               <button
//                 key={tab}
//                 type="button"
//                 onClick={() => setActiveTab(tab)}
//                 className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
//                   isActive
//                     ? 'bg-[#e11924] text-white shadow-lg shadow-[#e11924]/30'
//                     : 'text-neutral-300 hover:text-white hover:bg-white/10'
//                 }`}
//               >
//                 {tab}
//               </button>
//             );
//           })}
//         </div>

//         {/* Main Search Filter Panel */}
//         <div className="bg-white rounded-3xl p-3 sm:p-4 lg:p-3 shadow-2xl border border-neutral-200/40">
//           <form onSubmit={handleSearchSubmit} className="flex flex-col lg:flex-row items-stretch gap-2.5 lg:gap-0">
            
//             {/* 1. City Dropdown */}
//             <div className="relative flex-1 sm:max-w-xs lg:w-48 lg:border-r border-neutral-200">
//               <button
//                 type="button"
//                 onClick={() => setOpenDropdown(openDropdown === 'city' ? null : 'city')}
//                 className="w-full h-full min-h-[54px] flex items-center justify-between px-4 py-2.5 rounded-2xl hover:bg-neutral-50 transition-colors text-left"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 rounded-full bg-[#e11924]/10 flex items-center justify-center text-[#e11924] shrink-0">
//                     <MapPin className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <span className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-400">
//                       City
//                     </span>
//                     <span className="block text-sm font-bold text-neutral-900 truncate">
//                       {selectedCity}
//                     </span>
//                   </div>
//                 </div>
//                 <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${openDropdown === 'city' ? 'rotate-180' : ''}`} />
//               </button>

//               {/* City Menu */}
//               {openDropdown === 'city' && (
//                 <div className="absolute top-[108%] left-0 z-50 w-56 bg-white rounded-2xl shadow-xl border border-neutral-200/80 p-2 animate-in fade-in zoom-in-95 duration-150">
//                   {CITIES.map((city) => (
//                     <button
//                       key={city}
//                       type="button"
//                       onClick={() => {
//                         setSelectedCity(city);
//                         setOpenDropdown(null);
//                       }}
//                       className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
//                         selectedCity === city
//                           ? 'bg-[#e11924]/10 text-[#e11924] font-semibold'
//                           : 'text-neutral-700 hover:bg-neutral-100'
//                       }`}
//                     >
//                       {city}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* 2. Main Search Input (Keyword / Locality / Project) */}
//             <div className="flex-[2] lg:border-r border-neutral-200">
//               <div className="w-full h-full min-h-[54px] flex items-center px-4 py-2.5 rounded-2xl hover:bg-neutral-50 lg:hover:bg-transparent transition-colors">
//                 <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 shrink-0 mr-3">
//                   <Search className="w-4 h-4" />
//                 </div>
//                 <div className="flex-1">
//                   <label htmlFor="search-input" className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-400">
//                     Search Locality / Project
//                   </label>
//                   <input
//                     id="search-input"
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search by builder, project or area (e.g. Golf Course Road)..."
//                     className="w-full bg-transparent text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* 3. Property Type Dropdown */}
//             <div className="relative flex-1 lg:border-r border-neutral-200">
//               <button
//                 type="button"
//                 onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}
//                 className="w-full h-full min-h-[54px] flex items-center justify-between px-4 py-2.5 rounded-2xl hover:bg-neutral-50 transition-colors text-left"
//               >
//                 <div className="flex items-center gap-3 truncate">
//                   <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 shrink-0">
//                     <Home className="w-4 h-4" />
//                   </div>
//                   <div className="truncate">
//                     <span className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-400">
//                       Property Type
//                     </span>
//                     <span className="block text-sm font-bold text-neutral-900 truncate">
//                       {selectedType}
//                     </span>
//                   </div>
//                 </div>
//                 <ChevronDown className={`w-4 h-4 text-neutral-400 shrink-0 ml-1 transition-transform ${openDropdown === 'type' ? 'rotate-180' : ''}`} />
//               </button>

//               {/* Property Type Menu */}
//               {openDropdown === 'type' && (
//                 <div className="absolute top-[108%] left-0 z-50 w-64 bg-white rounded-2xl shadow-xl border border-neutral-200/80 p-2 animate-in fade-in zoom-in-95 duration-150">
//                   {PROPERTY_TYPES.map((type) => (
//                     <button
//                       key={type}
//                       type="button"
//                       onClick={() => {
//                         setSelectedType(type);
//                         setOpenDropdown(null);
//                       }}
//                       className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
//                         selectedType === type
//                           ? 'bg-[#e11924]/10 text-[#e11924] font-semibold'
//                           : 'text-neutral-700 hover:bg-neutral-100'
//                       }`}
//                     >
//                       {type}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* 4. Budget Range Dropdown */}
//             <div className="relative flex-1">
//               <button
//                 type="button"
//                 onClick={() => setOpenDropdown(openDropdown === 'budget' ? null : 'budget')}
//                 className="w-full h-full min-h-[54px] flex items-center justify-between px-4 py-2.5 rounded-2xl hover:bg-neutral-50 transition-colors text-left"
//               >
//                 <div className="flex items-center gap-3 truncate">
//                   <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 shrink-0">
//                     <IndianRupee className="w-4 h-4" />
//                   </div>
//                   <div className="truncate">
//                     <span className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-400">
//                       Budget
//                     </span>
//                     <span className="block text-sm font-bold text-neutral-900 truncate">
//                       {selectedBudget}
//                     </span>
//                   </div>
//                 </div>
//                 <ChevronDown className={`w-4 h-4 text-neutral-400 shrink-0 ml-1 transition-transform ${openDropdown === 'budget' ? 'rotate-180' : ''}`} />
//               </button>

//               {/* Budget Menu */}
//               {openDropdown === 'budget' && (
//                 <div className="absolute top-[108%] right-0 z-50 w-60 bg-white rounded-2xl shadow-xl border border-neutral-200/80 p-2 animate-in fade-in zoom-in-95 duration-150">
//                   {BUDGET_RANGES.map((budget) => (
//                     <button
//                       key={budget}
//                       type="button"
//                       onClick={() => {
//                         setSelectedBudget(budget);
//                         setOpenDropdown(null);
//                       }}
//                       className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
//                         selectedBudget === budget
//                           ? 'bg-[#e11924]/10 text-[#e11924] font-semibold'
//                           : 'text-neutral-700 hover:bg-neutral-100'
//                       }`}
//                     >
//                       {budget}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* 5. Submit CTA Button */}
//             <div className="p-1 lg:pl-3 flex items-center">
//               <button
//                 type="submit"
//                 className="w-full lg:w-auto h-12 lg:h-[54px] px-8 rounded-2xl bg-[#e11924] hover:bg-[#c8141f] active:scale-[0.99] text-white font-semibold flex items-center justify-center gap-2.5 shadow-lg shadow-[#e11924]/30 hover:shadow-[#e11924]/45 transition-all duration-200 cursor-pointer shrink-0"
//               >
//                 <Search className="w-4 h-4 stroke-[2.5]" />
//                 <span>Search</span>
//               </button>
//             </div>

//           </form>
//         </div>

//         {/* Quick Suggestion Pills */}
//         <div className="mt-4 flex items-center flex-wrap gap-2 text-xs">
//           <span className="text-white/75 font-medium flex items-center gap-1.5 mr-1">
//             <Sparkles className="w-3.5 h-3.5 text-[#e11924]" />
//             Trending Localities:
//           </span>
//           {QUICK_TRENDS.map((loc) => (
//             <button
//               key={loc}
//               type="button"
//               onClick={() => setSearchQuery(loc)}
//               className="text-neutral-200 hover:text-white bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-full transition-all duration-150 cursor-pointer"
//             >
//               {loc}
//             </button>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }



// 'use client';

// import { useState, useEffect } from 'react';
// import { 
//   Search, 
//   MapPin, 
//   Home, 
//   IndianRupee, 
//   ChevronDown, 
//   ChevronLeft, 
//   ChevronRight 
// } from 'lucide-react';

// const SLIDES = [
//   {
//     id: 1,
//     url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80',
//     alt: 'Luxury Residence Exterior'
//   },
//   {
//     id: 2,
//     url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80',
//     alt: 'Modern Architecture'
//   },
//   {
//     id: 3,
//     url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80',
//     alt: 'Penthouse Living Space'
//   }
// ];

// const TABS = ['Buy', 'Rent', 'Commercial', 'Plots'];
// const CITIES = ['Gurugram', 'Delhi NCR', 'Mumbai', 'Dubai', 'Noida'];
// const PROPERTY_TYPES = ['Apartments', 'Independent Floors', 'Villas', 'Plots'];
// const BUDGETS = ['Any Budget', 'Under ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹3Cr', '₹3Cr+'];

// export default function CompactHeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [activeTab, setActiveTab] = useState('Buy');
//   const [city, setCity] = useState('Gurugram');
//   const [propType, setPropType] = useState('Apartments');
//   const [budget, setBudget] = useState('Any Budget');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [openMenu, setOpenMenu] = useState(null);

//   // Background Auto-slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section 
//       className="relative w-full h-[380px] sm:h-[400px] lg:h-[440px] flex items-center justify-center bg-black overflow-hidden select-none"
//       onMouseLeave={() => setOpenMenu(null)}
//     >
//       {/* ================= BACKGROUND SLIDER ================= */}
//       <div className="absolute inset-0 pointer-events-none">
//         {SLIDES.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={slide.url}
//               alt={slide.alt}
//               className="w-full h-full object-cover object-center scale-100"
//             />
//           </div>
//         ))}
//         {/* Subtle dark shade */}
//         <div className="absolute inset-0 bg-black/55" />
//       </div>

//       {/* Slim Slider Controls */}
//       <button
//         onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
//         className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/70 text-white/80 flex items-center justify-center backdrop-blur-xs hidden md:flex transition-colors cursor-pointer"
//         aria-label="Previous Slide"
//       >
//         <ChevronLeft className="w-5 h-5" />
//       </button>
//       <button
//         onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
//         className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/70 text-white/80 flex items-center justify-center backdrop-blur-xs hidden md:flex transition-colors cursor-pointer"
//         aria-label="Next Slide"
//       >
//         <ChevronRight className="w-5 h-5" />
//       </button>

//       {/* ================= COMPACT SEARCH BOX (HOUSING.COM STYLE) ================= */}
//       <div className="relative z-30 w-full max-w-5xl px-4 sm:px-6">
        
//         {/* Sleek Housing Tabs */}
//         <div className="flex items-center gap-1 mb-2">
//           {TABS.map((tab) => {
//             const isActive = activeTab === tab;
//             return (
//               <button
//                 key={tab}
//                 type="button"
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-t-lg transition-all cursor-pointer ${
//                   isActive
//                     ? 'bg-white text-black font-semibold'
//                     : 'bg-black/40 text-neutral-300 hover:text-white backdrop-blur-md'
//                 }`}
//               >
//                 {tab}
//               </button>
//             );
//           })}
//         </div>

//         {/* Compact Search Bar */}
//         <div className="bg-white rounded-2xl md:rounded-full p-2 md:p-1.5 shadow-2xl border border-neutral-200 flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0">
          
//           {/* 1. City Select */}
//           <div className="relative md:w-44 md:border-r border-neutral-200">
//             <button
//               type="button"
//               onClick={() => setOpenMenu(openMenu === 'city' ? null : 'city')}
//               className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-neutral-50 rounded-full cursor-pointer"
//             >
//               <div className="flex items-center gap-2 truncate">
//                 <MapPin className="w-4 h-4 text-[#e11924] shrink-0" />
//                 <div className="truncate">
//                   <span className="block text-[10px] uppercase font-bold text-neutral-400">City</span>
//                   <span className="block text-xs font-semibold text-neutral-800 truncate">{city}</span>
//                 </div>
//               </div>
//               <ChevronDown className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
//             </button>

//             {openMenu === 'city' && (
//               <div className="absolute top-[115%] left-0 z-50 w-44 bg-white rounded-xl shadow-xl border border-neutral-200 p-1">
//                 {CITIES.map((c) => (
//                   <button
//                     key={c}
//                     type="button"
//                     onClick={() => { setCity(c); setOpenMenu(null); }}
//                     className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
//                       city === c ? 'bg-[#e11924]/10 text-[#e11924] font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
//                     }`}
//                   >
//                     {c}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* 2. Main Input */}
//           <div className="flex-1 md:px-3 md:border-r border-neutral-200">
//             <div className="flex items-center gap-2 px-2 md:px-0">
//               <Search className="w-4 h-4 text-neutral-400 shrink-0 hidden sm:block" />
//               <div className="w-full">
//                 <label htmlFor="search-box" className="block text-[10px] uppercase font-bold text-neutral-400">
//                   Search
//                 </label>
//                 <input
//                   id="search-box"
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search locality, landmark or builder..."
//                   className="w-full text-xs font-medium text-neutral-900 placeholder:text-neutral-400 bg-transparent focus:outline-none"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* 3. Property Type */}
//           <div className="relative md:w-40 md:border-r border-neutral-200">
//             <button
//               type="button"
//               onClick={() => setOpenMenu(openMenu === 'type' ? null : 'type')}
//               className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-neutral-50 rounded-full cursor-pointer"
//             >
//               <div className="flex items-center gap-2 truncate">
//                 <Home className="w-4 h-4 text-neutral-500 shrink-0" />
//                 <div className="truncate">
//                   <span className="block text-[10px] uppercase font-bold text-neutral-400">Type</span>
//                   <span className="block text-xs font-semibold text-neutral-800 truncate">{propType}</span>
//                 </div>
//               </div>
//               <ChevronDown className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
//             </button>

//             {openMenu === 'type' && (
//               <div className="absolute top-[115%] left-0 z-50 w-44 bg-white rounded-xl shadow-xl border border-neutral-200 p-1">
//                 {PROPERTY_TYPES.map((t) => (
//                   <button
//                     key={t}
//                     type="button"
//                     onClick={() => { setPropType(t); setOpenMenu(null); }}
//                     className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
//                       propType === t ? 'bg-[#e11924]/10 text-[#e11924] font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
//                     }`}
//                   >
//                     {t}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* 4. Budget */}
//           <div className="relative md:w-36">
//             <button
//               type="button"
//               onClick={() => setOpenMenu(openMenu === 'budget' ? null : 'budget')}
//               className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-neutral-50 rounded-full cursor-pointer"
//             >
//               <div className="flex items-center gap-1.5 truncate">
//                 <IndianRupee className="w-4 h-4 text-neutral-500 shrink-0" />
//                 <div className="truncate">
//                   <span className="block text-[10px] uppercase font-bold text-neutral-400">Budget</span>
//                   <span className="block text-xs font-semibold text-neutral-800 truncate">{budget}</span>
//                 </div>
//               </div>
//               <ChevronDown className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
//             </button>

//             {openMenu === 'budget' && (
//               <div className="absolute top-[115%] right-0 z-50 w-40 bg-white rounded-xl shadow-xl border border-neutral-200 p-1">
//                 {BUDGETS.map((b) => (
//                   <button
//                     key={b}
//                     type="button"
//                     onClick={() => { setBudget(b); setOpenMenu(null); }}
//                     className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
//                       budget === b ? 'bg-[#e11924]/10 text-[#e11924] font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
//                     }`}
//                   >
//                     {b}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* 5. Search Action Button */}
//           <div className="md:pl-2">
//             <button
//               type="button"
//               className="w-full md:w-auto h-10 px-6 rounded-full bg-[#e11924] hover:bg-[#c9141f] text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
//             >
//               <Search className="w-3.5 h-3.5 stroke-[2.5]" />
//               <span>Search</span>
//             </button>
//           </div>

//         </div>

//         {/* Minimal Bottom Indicators */}
//         <div className="mt-3 flex justify-center items-center gap-1.5">
//           {SLIDES.map((_, i) => (
//             <span
//               key={i}
//               className={`h-1 rounded-full transition-all duration-300 ${
//                 i === currentSlide ? 'w-5 bg-[#e11924]' : 'w-1.5 bg-white/40'
//               }`}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }




// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { 
//   Search, 
//   ChevronDown, 
//   ChevronLeft, 
//   ChevronRight, 
//   LocateFixed, 
//   Mic 
// } from 'lucide-react';

// const SLIDES = [
//   {
//     id: 1,
//     url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80',
//     alt: 'Luxury Exterior'
//   },
//   {
//     id: 2,
//     url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80',
//     alt: 'Modern Architecture'
//   },
//   {
//     id: 3,
//     url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80',
//     alt: 'Penthouse View'
//   }
// ];

// const TABS = [
//   { name: 'Buy', hasDot: false },
//   { name: 'Rent', hasDot: false },
//   { name: 'New Launch', hasDot: true },
//   { name: 'Commercial', hasDot: false },
//   { name: 'Plots/Land', hasDot: false },
//   { name: 'Projects', hasDot: false },
// ];

// const RESIDENTIAL_TYPES = [
//   'All Residential',
//   'Apartments / Flats',
//   'Independent House / Villa',
//   'Builder Floor',
//   'Studio Apartment',
//   'Penthouse'
// ];

// export default function OverlappingHero() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [activeTab, setActiveTab] = useState('Buy');
//   const [selectedType, setSelectedType] = useState('All Residential');
//   const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Auto-slide effect (no text, pure image)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full pb-16 sm:pb-20">
      
//       {/* ================= COMPACT HERO BANNER ================= */}
//       <div className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] overflow-hidden bg-black select-none">
//         {SLIDES.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={slide.url}
//               alt={slide.alt}
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//         ))}

//         {/* Minimal gradient shade */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/30" />

//         {/* Left & Right Slider Controls */}
//         <button
//           type="button"
//           onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
//           className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-colors hidden md:flex cursor-pointer"
//           aria-label="Previous Slide"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>
//         <button
//           type="button"
//           onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
//           className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-colors hidden md:flex cursor-pointer"
//           aria-label="Next Slide"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div>

//       {/* ================= EXACT OVERLAPPING SEARCH CARD ================= */}
//       <div className="relative z-30 max-w-5xl mx-auto px-4 -mt-16 sm:-mt-20">
//         <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.15)] border border-neutral-100 overflow-visible">
          
//           {/* TOP TAB BAR */}
//           <div className="flex items-center justify-between border-b border-neutral-100 px-4 sm:px-6 overflow-x-auto no-scrollbar">
//             <div className="flex items-center space-x-6 sm:space-x-8">
//               {TABS.map((tab) => {
//                 const isActive = activeTab === tab.name;
//                 return (
//                   <button
//                     key={tab.name}
//                     type="button"
//                     onClick={() => setActiveTab(tab.name)}
//                     className={`relative py-4 text-xs sm:text-sm font-semibold tracking-tight transition-colors whitespace-nowrap cursor-pointer ${
//                       isActive ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
//                     }`}
//                   >
//                     <span>{tab.name}</span>

//                     {/* Red Notification Dot (e.g. for New Launch) */}
//                     {tab.hasDot && (
//                       <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e11924] ml-1 mb-2" />
//                     )}

//                     {/* Active Bottom Underline */}
//                     {isActive && (
//                       <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#e11924] rounded-t-sm" />
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Right side 'Post Property FREE' */}
//             <div className="hidden lg:flex items-center pl-4 py-3 shrink-0">
//               <Link
//                 href="/post-property"
//                 className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-[#e11924] transition-colors"
//               >
//                 <span>Post Property</span>
//                 <span className="bg-emerald-500 text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">
//                   FREE
//                 </span>
//               </Link>
//             </div>
//           </div>

//           {/* BOTTOM SEARCH ROW */}
//           <div className="p-3 sm:p-4 flex flex-col md:flex-row items-stretch md:items-center gap-2.5">
            
//             {/* 1. All Residential Dropdown */}
//             <div className="relative md:w-52 shrink-0">
//               <button
//                 type="button"
//                 onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
//                 className="w-full h-11 flex items-center justify-between px-3 text-left hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer"
//               >
//                 <span className="text-xs sm:text-sm font-medium text-neutral-800 truncate">
//                   {selectedType}
//                 </span>
//                 <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${isTypeDropdownOpen ? 'rotate-180' : ''}`} />
//               </button>

//               {isTypeDropdownOpen && (
//                 <div className="absolute top-[110%] left-0 z-50 w-56 bg-white rounded-xl shadow-xl border border-neutral-100 py-1.5 animate-in fade-in zoom-in-95">
//                   {RESIDENTIAL_TYPES.map((type) => (
//                     <button
//                       key={type}
//                       type="button"
//                       onClick={() => {
//                         setSelectedType(type);
//                         setIsTypeDropdownOpen(false);
//                       }}
//                       className={`w-full text-left px-3.5 py-2 text-xs transition-colors cursor-pointer ${
//                         selectedType === type
//                           ? 'bg-[#e11924]/10 text-[#e11924] font-semibold'
//                           : 'text-neutral-700 hover:bg-neutral-50'
//                       }`}
//                     >
//                       {type}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Separator for desktop */}
//             <div className="hidden md:block h-6 w-px bg-neutral-200" />

//             {/* 2. Main Search Input */}
//             <div className="flex-1 flex items-center px-3 h-11">
//               <Search className="w-4 h-4 text-neutral-400 mr-2.5 shrink-0" />
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder='Search "3 BHK for sale in Mumbai"'
//                 className="w-full text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 bg-transparent focus:outline-none"
//               />
//             </div>

//             {/* 3. Utility Icons (GPS + Voice) & Primary Search Button */}
//             <div className="flex items-center justify-end gap-2 shrink-0 pt-2 md:pt-0">
              
//               {/* Detect Location Icon */}
//               <button
//                 type="button"
//                 title="Use Current Location"
//                 className="w-9 h-9 flex items-center justify-center rounded-full text-sky-600 hover:bg-sky-50 transition-colors cursor-pointer"
//               >
//                 <LocateFixed className="w-4 h-4" />
//               </button>

//               {/* Voice Search Icon */}
//               <button
//                 type="button"
//                 title="Voice Search"
//                 className="w-9 h-9 flex items-center justify-center rounded-full text-sky-600 hover:bg-sky-50 transition-colors cursor-pointer"
//               >
//                 <Mic className="w-4 h-4" />
//               </button>

//               {/* Solid Search Button with Primary Color */}
//               <button
//                 type="button"
//                 className="h-10 px-7 rounded-lg bg-[#e11924] hover:bg-[#c9141f] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all cursor-pointer flex items-center justify-center"
//               >
//                 Search
//               </button>
//             </div>

//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }




// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { 
//   Search, 
//   ChevronDown, 
//   ChevronLeft, 
//   ChevronRight, 
//   LocateFixed, 
//   Mic, 
//   X, 
//   History, 
//   ArrowUpRight,
//   Plus
// } from 'lucide-react';

// const SLIDES = [
//   {
//     id: 1,
//     url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80',
//     alt: 'Luxury Exterior'
//   },
//   {
//     id: 2,
//     url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80',
//     alt: 'Modern Architecture'
//   }
// ];

// const DESKTOP_TABS = [
//   { name: 'Buy', hasDot: false },
//   { name: 'Rent', hasDot: false },
//   { name: 'New Launch', hasDot: true },
//   { name: 'Commercial', hasDot: false },
//   { name: 'Plots/Land', hasDot: false },
//   { name: 'Projects', hasDot: false },
// ];

// const RESIDENTIAL_TYPES = [
//   'All Residential',
//   'Apartments / Flats',
//   'Independent House / Villa',
//   'Builder Floor',
//   'Studio Apartment',
//   'Penthouse'
// ];

// const MOBILE_TABS = ['Buy', 'Rent/PG', 'Commercial'];

// const POPULAR_LOCALITIES = [
//   'Naini',
//   'Jhalwa',
//   'Jhusi',
//   'Allahpur',
//   'Civil Lines',
//   'Kalindipuram',
//   'George Town'
// ];

// export default function ResponsiveHeroSearch() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [desktopTab, setDesktopTab] = useState('Buy');
//   const [selectedType, setSelectedType] = useState('All Residential');
//   const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
//   const [desktopQuery, setDesktopQuery] = useState('');

//   // Mobile Modal State
//   const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
//   const [mobileTab, setMobileTab] = useState('Buy');
//   const [mobileQuery, setMobileQuery] = useState('');

//   // Slide Auto-run
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   // Lock body scroll when mobile modal is open
//   useEffect(() => {
//     if (isMobileSearchOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMobileSearchOpen]);

//   return (
//     <div className="relative w-full pb-14 sm:pb-20">
      
//       {/* ================= HERO BANNER SLIDER ================= */}
//       <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] overflow-hidden bg-black select-none">
//         {SLIDES.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={slide.url}
//               alt={slide.alt}
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//         ))}

//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/30" />

//         {/* Desktop Controls */}
//         <button
//           type="button"
//           onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
//           className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-colors hidden md:flex cursor-pointer"
//           aria-label="Previous Slide"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>
//         <button
//           type="button"
//           onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
//           className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-colors hidden md:flex cursor-pointer"
//           aria-label="Next Slide"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div>

//       {/* ================= SEARCH BOX CONTAINER ================= */}
//       <div className="relative z-30 max-w-5xl mx-auto px-4 -mt-7 sm:-mt-16 md:-mt-20">

//         {/* ---------------- 1. MOBILE DEFAULT SEARCH BAR (IMAGE 1) ---------------- */}
//         <div className="block md:hidden">
//           <button
//             type="button"
//             onClick={() => setIsMobileSearchOpen(true)}
//             className="w-full bg-white rounded-xl shadow-lg border border-sky-100 px-4 py-3.5 flex items-center justify-between text-left active:scale-[0.99] transition-transform cursor-pointer"
//           >
//             <div className="flex items-center gap-3 min-w-0 pr-2">
//               <Search className="w-5 h-5 text-neutral-400 shrink-0" />
//               <span className="text-[13px] text-neutral-800 font-normal truncate">
//                 Search &ldquo;3 BHK flats for sale in Noida&rdquo;
//               </span>
//             </div>
//             <div className="shrink-0 text-[#0066cc] p-1">
//               <Mic className="w-5 h-5" />
//             </div>
//           </button>
//         </div>

//         {/* ---------------- 2. DESKTOP FULL SEARCH BAR ---------------- */}
//         <div className="hidden md:block bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-neutral-100 overflow-visible">
          
//           {/* Top Tabs */}
//           <div className="flex items-center justify-between border-b border-neutral-100 px-6">
//             <div className="flex items-center space-x-8">
//               {DESKTOP_TABS.map((tab) => {
//                 const isActive = desktopTab === tab.name;
//                 return (
//                   <button
//                     key={tab.name}
//                     type="button"
//                     onClick={() => setDesktopTab(tab.name)}
//                     className={`relative py-4 text-sm font-semibold tracking-tight transition-colors whitespace-nowrap cursor-pointer ${
//                       isActive ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
//                     }`}
//                   >
//                     <span>{tab.name}</span>
//                     {tab.hasDot && (
//                       <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e11924] ml-1 mb-2" />
//                     )}
//                     {isActive && (
//                       <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#e11924] rounded-t-sm" />
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             <Link
//               href="/post-property"
//               className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-[#e11924] transition-colors"
//             >
//               <span>Post Property</span>
//               <span className="bg-emerald-600 text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">
//                 FREE
//               </span>
//             </Link>
//           </div>

//           {/* Bottom Filter Controls */}
//           <div className="p-3.5 flex items-center gap-2">
            
//             {/* Dropdown */}
//             <div className="relative w-48 shrink-0">
//               <button
//                 type="button"
//                 onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
//                 className="w-full h-11 flex items-center justify-between px-3 text-left hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer"
//               >
//                 <span className="text-sm font-medium text-neutral-800 truncate">
//                   {selectedType}
//                 </span>
//                 <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${isTypeDropdownOpen ? 'rotate-180' : ''}`} />
//               </button>

//               {isTypeDropdownOpen && (
//                 <div className="absolute top-[110%] left-0 z-50 w-56 bg-white rounded-xl shadow-xl border border-neutral-100 py-1.5 animate-in fade-in zoom-in-95">
//                   {RESIDENTIAL_TYPES.map((type) => (
//                     <button
//                       key={type}
//                       type="button"
//                       onClick={() => {
//                         setSelectedType(type);
//                         setIsTypeDropdownOpen(false);
//                       }}
//                       className={`w-full text-left px-3.5 py-2 text-xs transition-colors cursor-pointer ${
//                         selectedType === type ? 'bg-[#e11924]/10 text-[#e11924] font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
//                       }`}
//                     >
//                       {type}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="h-6 w-px bg-neutral-200" />

//             {/* Input */}
//             <div className="flex-1 flex items-center px-3 h-11">
//               <Search className="w-4 h-4 text-neutral-400 mr-2.5 shrink-0" />
//               <input
//                 type="text"
//                 value={desktopQuery}
//                 onChange={(e) => setDesktopQuery(e.target.value)}
//                 placeholder='Search "3 BHK for sale in Mumbai"'
//                 className="w-full text-sm text-neutral-800 placeholder:text-neutral-400 bg-transparent focus:outline-none"
//               />
//             </div>

//             {/* Action Tools */}
//             <div className="flex items-center gap-2 shrink-0">
//               <button type="button" className="w-9 h-9 flex items-center justify-center rounded-full text-sky-600 hover:bg-sky-50 transition-colors cursor-pointer" title="Use GPS">
//                 <LocateFixed className="w-4 h-4" />
//               </button>
//               <button type="button" className="w-9 h-9 flex items-center justify-center rounded-full text-sky-600 hover:bg-sky-50 transition-colors cursor-pointer" title="Voice Search">
//                 <Mic className="w-4 h-4" />
//               </button>
//               <button type="button" className="h-10 px-7 rounded-lg bg-[#e11924] hover:bg-[#c9141f] text-white text-sm font-semibold tracking-wide shadow transition-all cursor-pointer">
//                 Search
//               </button>
//             </div>

//           </div>

//         </div>

//       </div>

//       {/* ================= 3. MOBILE FULL-SCREEN MODAL (IMAGE 2) ================= */}
//       {isMobileSearchOpen && (
//         <div className="fixed inset-0 z-50 bg-[#f4f5f7] flex flex-col md:hidden animate-in fade-in duration-200">
          
//           {/* Blue/Brand Header */}
//           <div className="bg-[#00519c] px-4 pt-4 pb-8 flex items-center justify-between">
//             {/* Segmented Pill */}
//             <div className="inline-flex items-center bg-[#003d75] p-1 rounded-full border border-white/10">
//               {MOBILE_TABS.map((tab) => {
//                 const isActive = mobileTab === tab;
//                 return (
//                   <button
//                     key={tab}
//                     type="button"
//                     onClick={() => setMobileTab(tab)}
//                     className={`px-4 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
//                       isActive
//                         ? 'bg-white text-[#00519c] shadow-xs'
//                         : 'text-white/80 hover:text-white'
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Close Cross Button */}
//             <button
//               type="button"
//               onClick={() => setIsMobileSearchOpen(false)}
//               className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer transition-colors"
//               aria-label="Close search"
//             >
//               <X className="w-4 h-4" />
//             </button>
//           </div>

//           {/* Floating Mobile Search Input */}
//           <div className="px-4 -mt-5">
//             <div className="bg-white rounded-xl shadow-md border border-neutral-200/80 px-3.5 py-2.5 flex items-center">
//               <input
//                 type="text"
//                 autoFocus
//                 value={mobileQuery}
//                 onChange={(e) => setMobileQuery(e.target.value)}
//                 placeholder="Try - Sector 150 Noida"
//                 className="w-full text-sm text-neutral-800 placeholder:text-neutral-400 bg-transparent focus:outline-none"
//               />
//               <div className="flex items-center gap-2 pl-2 shrink-0">
//                 <button type="button" className="text-[#0066cc] p-1 hover:bg-sky-50 rounded-full" title="Current Location">
//                   <LocateFixed className="w-4 h-4" />
//                 </button>
//                 <div className="h-4 w-px bg-neutral-200" />
//                 <button type="button" className="text-neutral-500 p-1 hover:bg-neutral-100 rounded-full" title="Voice Search">
//                   <Mic className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Modal Content Scroll Area */}
//           <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            
//             {/* Last Searched Card */}
//             <div className="bg-white rounded-2xl p-4 shadow-xs border border-neutral-200/60">
//               <h4 className="text-xs font-bold text-neutral-900 mb-3">Last searched..</h4>
//               <button
//                 type="button"
//                 onClick={() => setMobileQuery('Buy in Delhi / NCR')}
//                 className="w-full flex items-center justify-between py-1 text-left cursor-pointer group"
//               >
//                 <div className="flex items-center gap-3">
//                   <History className="w-4 h-4 text-neutral-400" />
//                   <span className="text-xs font-medium text-neutral-700 group-hover:text-neutral-900">
//                     Buy in Delhi / NCR
//                   </span>
//                 </div>
//                 <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700" />
//               </button>
//             </div>

//             {/* Popular Localities Card */}
//             <div className="bg-white rounded-2xl p-4 shadow-xs border border-neutral-200/60">
//               <h4 className="text-xs font-bold text-[#1e293b] mb-3">Popular Localities in Allahabad</h4>
//               <div className="grid grid-cols-2 gap-2">
//                 {POPULAR_LOCALITIES.map((locality) => (
//                   <button
//                     key={locality}
//                     type="button"
//                     onClick={() => setMobileQuery(locality)}
//                     className="flex items-center justify-center gap-1 py-2 px-3 rounded-lg border border-neutral-200/80 text-xs font-medium text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-colors cursor-pointer truncate"
//                   >
//                     <Plus className="w-3 h-3 text-neutral-400 shrink-0" />
//                     <span className="truncate">{locality}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//           </div>

//           {/* Mobile Search Bottom CTA Button */}
//           {mobileQuery.trim().length > 0 && (
//             <div className="p-4 bg-white border-t border-neutral-200">
//               <button
//                 type="button"
//                 onClick={() => setIsMobileSearchOpen(false)}
//                 className="w-full py-3 bg-[#00519c] text-white rounded-xl font-semibold text-sm shadow-md cursor-pointer"
//               >
//                 Search &ldquo;{mobileQuery}&rdquo;
//               </button>
//             </div>
//           )}

//         </div>
//       )}

//     </div>
//   );
// }




// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { 
//   Search, 
//   ChevronDown, 
//   ChevronLeft, 
//   ChevronRight, 
//   LocateFixed, 
//   Mic, 
//   X, 
//   History, 
//   ArrowUpRight,
//   Plus
// } from 'lucide-react';

// const SLIDES = [
//   {
//     id: 1,
//     url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80',
//     alt: 'Luxury Exterior'
//   },
//   {
//     id: 2,
//     url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80',
//     alt: 'Modern Architecture'
//   }
// ];

// const DESKTOP_TABS = [
//   { name: 'Buy', hasDot: false },
//   { name: 'Rent', hasDot: false },
//   { name: 'New Launch', hasDot: true },
//   { name: 'Commercial', hasDot: false },
//   { name: 'Plots/Land', hasDot: false },
//   { name: 'Projects', hasDot: false },
// ];

// const RESIDENTIAL_TYPES = [
//   'All Residential',
//   'Apartments / Flats',
//   'Independent House / Villa',
//   'Builder Floor',
//   'Studio Apartment',
//   'Penthouse'
// ];

// const MOBILE_TABS = ['Buy', 'Rent/PG', 'Commercial'];

// const POPULAR_LOCALITIES = [
//   'Naini',
//   'Jhalwa',
//   'Jhusi',
//   'Allahpur',
//   'Civil Lines',
//   'Kalindipuram',
//   'George Town'
// ];

// export default function ResponsiveHeroSearch() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [desktopTab, setDesktopTab] = useState('Buy');
//   const [selectedType, setSelectedType] = useState('All Residential');
//   const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
//   const [desktopQuery, setDesktopQuery] = useState('');

//   // Mobile Modal State
//   const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
//   const [mobileTab, setMobileTab] = useState('Buy');
//   const [mobileQuery, setMobileQuery] = useState('');

//   // Slide Auto-run
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   // Lock body scroll when mobile modal is open
//   useEffect(() => {
//     if (isMobileSearchOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMobileSearchOpen]);

//   return (
//     <div className="relative w-full pb-14 sm:pb-20">
      
//       {/* ================= HERO BANNER SLIDER ================= */}
//       <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] overflow-hidden bg-black select-none">
//         {SLIDES.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={slide.url}
//               alt={slide.alt}
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//         ))}

//         {/* <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-white/20" /> */}
    

//         <div className="absolute inset-0 " />

//         {/* Desktop Controls */}
//         <button
//           type="button"
//           onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
//           className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-colors hidden md:flex cursor-pointer"
//           aria-label="Previous Slide"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>
//         <button
//           type="button"
//           onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
//           className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-colors hidden md:flex cursor-pointer"
//           aria-label="Next Slide"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div>

//       {/* ================= SEARCH BOX CONTAINER ================= */}
//       <div className="relative z-30 max-w-5xl mx-auto px-4 -mt-7 sm:-mt-16 md:-mt-20">

//         {/* ---------------- 1. MOBILE DEFAULT SEARCH BAR (IMAGE 1) ---------------- */}
//         <div className="block md:hidden">
//           <button
//             type="button"
//             onClick={() => setIsMobileSearchOpen(true)}
//             className="w-full bg-white rounded-xl shadow-lg border border-sky-100 px-4 py-3.5 flex items-center justify-between text-left active:scale-[0.99] transition-transform cursor-pointer"
//           >
//             <div className="flex items-center gap-3 min-w-0 pr-2">
//               <Search className="w-5 h-5 text-neutral-400 shrink-0" />
//               <span className="text-[13px] text-neutral-800 font-normal truncate">
//                 Search &ldquo;3 BHK flats for sale in Noida&rdquo;
//               </span>
//             </div>
//             <div className="shrink-0 text-[#0066cc] p-1">
//               <Mic className="w-5 h-5" />
//             </div>
//           </button>
//         </div>

//         {/* ---------------- 2. DESKTOP FULL SEARCH BAR ---------------- */}
//         <div className="hidden md:block bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-neutral-100 overflow-visible">
          
//           {/* Top Tabs */}
//           <div className="flex items-center justify-between border-b border-neutral-100 px-6">
//             <div className="flex items-center space-x-8">
//               {DESKTOP_TABS.map((tab) => {
//                 const isActive = desktopTab === tab.name;
//                 return (
//                   <button
//                     key={tab.name}
//                     type="button"
//                     onClick={() => setDesktopTab(tab.name)}
//                     className={`relative py-4 text-sm font-semibold tracking-tight transition-colors whitespace-nowrap cursor-pointer ${
//                       isActive ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
//                     }`}
//                   >
//                     <span>{tab.name}</span>
//                     {tab.hasDot && (
//                       <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e11924] ml-1 mb-2" />
//                     )}
//                     {isActive && (
//                       <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#e11924] rounded-t-sm" />
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             <Link
//               href="/post-property"
//               className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-[#e11924] transition-colors"
//             >
//               <span>Post Property</span>
//               <span className="bg-emerald-600 text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">
//                 FREE
//               </span>
//             </Link>
//           </div>

//           {/* Bottom Filter Controls */}
//           <div className="p-3.5 flex items-center gap-2">
            
//             {/* Dropdown */}
//             <div className="relative w-48 shrink-0">
//               <button
//                 type="button"
//                 onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
//                 className="w-full h-11 flex items-center justify-between px-3 text-left hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer"
//               >
//                 <span className="text-sm font-medium text-neutral-800 truncate">
//                   {selectedType}
//                 </span>
//                 <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${isTypeDropdownOpen ? 'rotate-180' : ''}`} />
//               </button>

//               {isTypeDropdownOpen && (
//                 <div className="absolute top-[110%] left-0 z-50 w-56 bg-white rounded-xl shadow-xl border border-neutral-100 py-1.5 animate-in fade-in zoom-in-95">
//                   {RESIDENTIAL_TYPES.map((type) => (
//                     <button
//                       key={type}
//                       type="button"
//                       onClick={() => {
//                         setSelectedType(type);
//                         setIsTypeDropdownOpen(false);
//                       }}
//                       className={`w-full text-left px-3.5 py-2 text-xs transition-colors cursor-pointer ${
//                         selectedType === type ? 'bg-[#e11924]/10 text-[#e11924] font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
//                       }`}
//                     >
//                       {type}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="h-6 w-px bg-neutral-200" />

//             {/* Input */}
//             <div className="flex-1 flex items-center px-3 h-11">
//               <Search className="w-4 h-4 text-neutral-400 mr-2.5 shrink-0" />
//               <input
//                 type="text"
//                 value={desktopQuery}
//                 onChange={(e) => setDesktopQuery(e.target.value)}
//                 placeholder='Search "3 BHK for sale in Mumbai"'
//                 className="w-full text-sm text-neutral-800 placeholder:text-neutral-400 bg-transparent focus:outline-none"
//               />
//             </div>

//             {/* Action Tools */}
//             <div className="flex items-center gap-2 shrink-0">
//               <button type="button" className="w-9 h-9 flex items-center justify-center rounded-full text-sky-600 hover:bg-sky-50 transition-colors cursor-pointer" title="Use GPS">
//                 <LocateFixed className="w-4 h-4" />
//               </button>
//               <button type="button" className="w-9 h-9 flex items-center justify-center rounded-full text-sky-600 hover:bg-sky-50 transition-colors cursor-pointer" title="Voice Search">
//                 <Mic className="w-4 h-4" />
//               </button>
//               <button type="button" className="h-10 px-7 rounded-lg bg-[#e11924] hover:bg-[#c9141f] text-white text-sm font-semibold tracking-wide shadow transition-all cursor-pointer">
//                 Search
//               </button>
//             </div>

//           </div>

//         </div>

//       </div>

//       {/* ================= 3. MOBILE FULL-SCREEN MODAL (IMAGE 2) ================= */}
//       {isMobileSearchOpen && (
//         <div className="fixed inset-0 z-50 bg-[#f4f5f7] flex flex-col md:hidden animate-in fade-in duration-200">
          
//           {/* Blue/Brand Header */}
//           <div className="bg-[#00519c] px-4 pt-4 pb-8 flex items-center justify-between">
//             {/* Segmented Pill */}
//             <div className="inline-flex items-center bg-[#003d75] p-1 rounded-full border border-white/10">
//               {MOBILE_TABS.map((tab) => {
//                 const isActive = mobileTab === tab;
//                 return (
//                   <button
//                     key={tab}
//                     type="button"
//                     onClick={() => setMobileTab(tab)}
//                     className={`px-4 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
//                       isActive
//                         ? 'bg-white text-[#00519c] shadow-xs'
//                         : 'text-white/80 hover:text-white'
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Close Cross Button */}
//             <button
//               type="button"
//               onClick={() => setIsMobileSearchOpen(false)}
//               className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer transition-colors"
//               aria-label="Close search"
//             >
//               <X className="w-4 h-4" />
//             </button>
//           </div>

//           {/* Floating Mobile Search Input */}
//           <div className="px-4 -mt-5">
//             <div className="bg-white rounded-xl shadow-md border border-neutral-200/80 px-3.5 py-2.5 flex items-center">
//               <input
//                 type="text"
//                 autoFocus
//                 value={mobileQuery}
//                 onChange={(e) => setMobileQuery(e.target.value)}
//                 placeholder="Try - Sector 150 Noida"
//                 className="w-full text-sm text-neutral-800 placeholder:text-neutral-400 bg-transparent focus:outline-none"
//               />
//               <div className="flex items-center gap-2 pl-2 shrink-0">
//                 <button type="button" className="text-[#0066cc] p-1 hover:bg-sky-50 rounded-full" title="Current Location">
//                   <LocateFixed className="w-4 h-4" />
//                 </button>
//                 <div className="h-4 w-px bg-neutral-200" />
//                 <button type="button" className="text-neutral-500 p-1 hover:bg-neutral-100 rounded-full" title="Voice Search">
//                   <Mic className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Modal Content Scroll Area */}
//           <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            
//             {/* Last Searched Card */}
//             <div className="bg-white rounded-2xl p-4 shadow-xs border border-neutral-200/60">
//               <h4 className="text-xs font-bold text-neutral-900 mb-3">Last searched..</h4>
//               <button
//                 type="button"
//                 onClick={() => setMobileQuery('Buy in Delhi / NCR')}
//                 className="w-full flex items-center justify-between py-1 text-left cursor-pointer group"
//               >
//                 <div className="flex items-center gap-3">
//                   <History className="w-4 h-4 text-neutral-400" />
//                   <span className="text-xs font-medium text-neutral-700 group-hover:text-neutral-900">
//                     Buy in Delhi / NCR
//                   </span>
//                 </div>
//                 <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700" />
//               </button>
//             </div>

//             {/* Popular Localities Card */}
//             <div className="bg-white rounded-2xl p-4 shadow-xs border border-neutral-200/60">
//               <h4 className="text-xs font-bold text-[#1e293b] mb-3">Popular Localities in Allahabad</h4>
//               <div className="grid grid-cols-2 gap-2">
//                 {POPULAR_LOCALITIES.map((locality) => (
//                   <button
//                     key={locality}
//                     type="button"
//                     onClick={() => setMobileQuery(locality)}
//                     className="flex items-center justify-center gap-1 py-2 px-3 rounded-lg border border-neutral-200/80 text-xs font-medium text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-colors cursor-pointer truncate"
//                   >
//                     <Plus className="w-3 h-3 text-neutral-400 shrink-0" />
//                     <span className="truncate">{locality}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//           </div>

//           {/* Mobile Search Bottom CTA Button */}
//           {mobileQuery.trim().length > 0 && (
//             <div className="p-4 bg-white border-t border-neutral-200">
//               <button
//                 type="button"
//                 onClick={() => setIsMobileSearchOpen(false)}
//                 className="w-full py-3 bg-[#00519c] text-white rounded-xl font-semibold text-sm shadow-md cursor-pointer"
//               >
//                 Search &ldquo;{mobileQuery}&rdquo;
//               </button>
//             </div>
//           )}

//         </div>
//       )}

//     </div>
//   );
// }




'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  LocateFixed, 
  Mic, 
  X, 
  History, 
  ArrowUpRight,
  Plus
} from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80',
    alt: 'Luxury Exterior'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80',
    alt: 'Modern Architecture'
  }
];

const DESKTOP_TABS = [
  { name: 'Buy', hasDot: false },
  { name: 'Rent', hasDot: false },
  { name: 'New Launch', hasDot: true },
  { name: 'Commercial', hasDot: false },
  { name: 'Plots/Land', hasDot: false },
  { name: 'Projects', hasDot: false },
];

const RESIDENTIAL_TYPES = [
  'All Residential',
  'Apartments / Flats',
  'Independent House / Villa',
  'Builder Floor',
  'Studio Apartment',
  'Penthouse'
];

const MOBILE_TABS = ['Buy', 'Rent/PG', 'Commercial'];

const POPULAR_LOCALITIES = [
  'Naini',
  'Jhalwa',
  'Jhusi',
  'Allahpur',
  'Civil Lines',
  'Kalindipuram',
  'George Town'
];

export default function ResponsiveHeroSearch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [desktopTab, setDesktopTab] = useState('Buy');
  const [selectedType, setSelectedType] = useState('All Residential');
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [desktopQuery, setDesktopQuery] = useState('');

  // Mobile Modal State
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState('Buy');
  const [mobileQuery, setMobileQuery] = useState('');

  // Slide Auto-run
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll when mobile modal is open
  useEffect(() => {
    if (isMobileSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileSearchOpen]);

  return (
    <div className="relative w-full pb-8 sm:pb-10">
      
      {/* ================= HERO BANNER SLIDER ================= */}
      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] overflow-hidden bg-black select-none">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-white/20" /> */}
    

        <div className="absolute inset-0 " />

        {/* Desktop Controls */}
        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-colors hidden md:flex cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-colors hidden md:flex cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ================= SEARCH BOX CONTAINER ================= */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 -mt-7 sm:-mt-16 md:-mt-20">

        {/* ---------------- 1. MOBILE DEFAULT SEARCH BAR (IMAGE 1) ---------------- */}
        <div className="block md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileSearchOpen(true)}
            className="w-full bg-white rounded-xl shadow-lg border border-sky-100 px-4 py-3.5 flex items-center justify-between text-left active:scale-[0.99] transition-transform cursor-pointer"
          >
            <div className="flex items-center gap-3 min-w-0 pr-2">
              <Search className="w-5 h-5 text-neutral-400 shrink-0" />
              <span className="text-[13px] text-neutral-800 font-normal truncate">
                Search &ldquo;3 BHK flats for sale in Noida&rdquo;
              </span>
            </div>
            <div className="shrink-0 text-[#0066cc] p-1">
              <Mic className="w-5 h-5" />
            </div>
          </button>
        </div>

        {/* ---------------- 2. DESKTOP FULL SEARCH BAR ---------------- */}
        <div className="hidden md:block bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-neutral-100 overflow-visible">
          
          {/* Top Tabs */}
          <div className="flex items-center justify-between border-b border-neutral-100 px-6">
            <div className="flex items-center space-x-8">
              {DESKTOP_TABS.map((tab) => {
                const isActive = desktopTab === tab.name;
                return (
                  <button
                    key={tab.name}
                    type="button"
                    onClick={() => setDesktopTab(tab.name)}
                    className={`relative py-4 text-sm font-semibold tracking-tight transition-colors whitespace-nowrap cursor-pointer ${
                      isActive ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    <span>{tab.name}</span>
                    {tab.hasDot && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e11924] ml-1 mb-2" />
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#e11924] rounded-t-sm" />
                    )}
                  </button>
                );
              })}
            </div>

            <Link
              href="/post-property"
              className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-[#e11924] transition-colors"
            >
              <span>Post Property</span>
              <span className="bg-emerald-600 text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">
                FREE
              </span>
            </Link>
          </div>

          {/* Bottom Filter Controls */}
          <div className="p-3.5 flex items-center gap-2">
            
            {/* Dropdown */}
            <div className="relative w-48 shrink-0">
              <button
                type="button"
                onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                className="w-full h-11 flex items-center justify-between px-3 text-left hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer"
              >
                <span className="text-sm font-medium text-neutral-800 truncate">
                  {selectedType}
                </span>
                <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${isTypeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isTypeDropdownOpen && (
                <div className="absolute top-[110%] left-0 z-50 w-56 bg-white rounded-xl shadow-xl border border-neutral-100 py-1.5 animate-in fade-in zoom-in-95">
                  {RESIDENTIAL_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setSelectedType(type);
                        setIsTypeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs transition-colors cursor-pointer ${
                        selectedType === type ? 'bg-[#e11924]/10 text-[#e11924] font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="h-6 w-px bg-neutral-200" />

            {/* Input */}
            <div className="flex-1 flex items-center px-3 h-11">
              <Search className="w-4 h-4 text-neutral-400 mr-2.5 shrink-0" />
              <input
                type="text"
                value={desktopQuery}
                onChange={(e) => setDesktopQuery(e.target.value)}
                placeholder='Search "3 BHK for sale in Mumbai"'
                className="w-full text-sm text-neutral-800 placeholder:text-neutral-400 bg-transparent focus:outline-none"
              />
            </div>

            {/* Action Tools */}
            <div className="flex items-center gap-2 shrink-0">
              <button type="button" className="w-9 h-9 flex items-center justify-center rounded-full text-sky-600 hover:bg-sky-50 transition-colors cursor-pointer" title="Use GPS">
                <LocateFixed className="w-4 h-4" />
              </button>
              <button type="button" className="w-9 h-9 flex items-center justify-center rounded-full text-sky-600 hover:bg-sky-50 transition-colors cursor-pointer" title="Voice Search">
                <Mic className="w-4 h-4" />
              </button>
              <button type="button" className="h-10 px-7 rounded-lg bg-[#e11924] hover:bg-[#c9141f] text-white text-sm font-semibold tracking-wide shadow transition-all cursor-pointer">
                Search
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* ================= 3. MOBILE FULL-SCREEN MODAL (IMAGE 2) ================= */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 z-50 bg-[#f4f5f7] flex flex-col md:hidden animate-in fade-in duration-200">
          
          {/* Blue/Brand Header */}
          <div className="bg-[#00519c] px-4 pt-4 pb-8 flex items-center justify-between">
            {/* Segmented Pill */}
            <div className="inline-flex items-center bg-[#003d75] p-1 rounded-full border border-white/10">
              {MOBILE_TABS.map((tab) => {
                const isActive = mobileTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setMobileTab(tab)}
                    className={`px-4 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#00519c] shadow-xs'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Close Cross Button */}
            <button
              type="button"
              onClick={() => setIsMobileSearchOpen(false)}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close search"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Floating Mobile Search Input */}
          <div className="px-4 -mt-5">
            <div className="bg-white rounded-xl shadow-md border border-neutral-200/80 px-3.5 py-2.5 flex items-center">
              <input
                type="text"
                autoFocus
                value={mobileQuery}
                onChange={(e) => setMobileQuery(e.target.value)}
                placeholder="Try - Sector 150 Noida"
                className="w-full text-sm text-neutral-800 placeholder:text-neutral-400 bg-transparent focus:outline-none"
              />
              <div className="flex items-center gap-2 pl-2 shrink-0">
                <button type="button" className="text-[#0066cc] p-1 hover:bg-sky-50 rounded-full" title="Current Location">
                  <LocateFixed className="w-4 h-4" />
                </button>
                <div className="h-4 w-px bg-neutral-200" />
                <button type="button" className="text-neutral-500 p-1 hover:bg-neutral-100 rounded-full" title="Voice Search">
                  <Mic className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            
            {/* Last Searched Card */}
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-neutral-200/60">
              <h4 className="text-xs font-bold text-neutral-900 mb-3">Last searched..</h4>
              <button
                type="button"
                onClick={() => setMobileQuery('Buy in Delhi / NCR')}
                className="w-full flex items-center justify-between py-1 text-left cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <History className="w-4 h-4 text-neutral-400" />
                  <span className="text-xs font-medium text-neutral-700 group-hover:text-neutral-900">
                    Buy in Delhi / NCR
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700" />
              </button>
            </div>

            {/* Popular Localities Card */}
            <div className="bg-white rounded-2xl p-4 shadow-xs border border-neutral-200/60">
              <h4 className="text-xs font-bold text-[#1e293b] mb-3">Popular Localities in Allahabad</h4>
              <div className="grid grid-cols-2 gap-2">
                {POPULAR_LOCALITIES.map((locality) => (
                  <button
                    key={locality}
                    type="button"
                    onClick={() => setMobileQuery(locality)}
                    className="flex items-center justify-center gap-1 py-2 px-3 rounded-lg border border-neutral-200/80 text-xs font-medium text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-colors cursor-pointer truncate"
                  >
                    <Plus className="w-3 h-3 text-neutral-400 shrink-0" />
                    <span className="truncate">{locality}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Mobile Search Bottom CTA Button */}
          {mobileQuery.trim().length > 0 && (
            <div className="p-4 bg-white border-t border-neutral-200">
              <button
                type="button"
                onClick={() => setIsMobileSearchOpen(false)}
                className="w-full py-3 bg-[#00519c] text-white rounded-xl font-semibold text-sm shadow-md cursor-pointer"
              >
                Search &ldquo;{mobileQuery}&rdquo;
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  );
}