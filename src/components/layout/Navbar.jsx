// "use client";

// import { useEffect, useState } from "react";
// import { Search, Menu } from "lucide-react";
// import TopBar from "./TopBar";
// import DesktopNavigation from "./DesktopNavigation";
// import MobileNavigation from "./MobileNavigation";
// import SearchModal from "./SearchModal";

// function BrandMark() {
//   return (
//     <svg
//       viewBox="0 0 32 32"
//       className="h-8 w-8 shrink-0"
//       aria-hidden="true"
//     >
//       <path d="M16 3 L29 12 V29 H19 V19 H13 V29 H3 V12 Z" fill="#18181B" />
//       <path d="M16 3 L29 12 H23.5 L16 6.5 L8.5 12 H3 Z" fill="#F1192C" />
//     </svg>
//   );
// }

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       setScrolled(window.scrollY > 24);
//     }
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="sticky top-0 z-30 w-full">
//       <TopBar collapsed={scrolled} />

//       <div
//         className={`transition-all duration-300 ease-out ${
//           scrolled
//             ? "border-b border-[#E4E4E7] bg-white/90 shadow-[0_8px_30px_-15px_rgba(24,24,27,0.15)] backdrop-blur-md"
//             : "border-b border-transparent bg-white"
//         }`}
//       >
//         <div
//           className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 ease-out sm:px-6 lg:px-8 ${
//             scrolled ? "py-3" : "py-5"
//           }`}
//         >
//           {/* Logo */}
//           <a href="/" className="flex items-center gap-3">
//             <BrandMark />
//             <span className="flex flex-col leading-none">
//               <span className="text-lg font-semibold tracking-tight text-[#18181B]">
//                 Atrium Estates
//               </span>
//               <span className="mt-1 text-[11px] text-[#71717A]">
//                 Real estate, considered
//               </span>
//             </span>
//           </a>

//           {/* Desktop center + right cluster (1024px+) */}
//           <DesktopNavigation onSearchClick={() => setSearchOpen(true)} />

//           {/* Tablet links (768px – 1023px) */}
//           <nav
//             aria-label="Primary"
//             className="hidden items-center gap-6 md:flex lg:hidden"
//           >
//             <a
//               href="/"
//               className="text-sm font-medium text-[#18181B] transition-colors hover:text-[#F1192C]"
//             >
//               Home
//             </a>
//             <a
//               href="/properties"
//               className="text-sm font-medium text-[#18181B] transition-colors hover:text-[#F1192C]"
//             >
//               Explore Properties
//             </a>
//             <a
//               href="/services"
//               className="text-sm font-medium text-[#18181B] transition-colors hover:text-[#F1192C]"
//             >
//               Our Services
//             </a>
//           </nav>

//           {/* Tablet + mobile right actions */}
//           <div className="flex items-center gap-2 md:gap-3 lg:hidden">
//             <button
//               type="button"
//               onClick={() => setSearchOpen(true)}
//               aria-label="Search properties"
//               className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E4E7] text-[#18181B] transition-colors hover:border-[#F1192C] hover:text-[#F1192C]"
//             >
//               <Search className="h-4 w-4" aria-hidden="true" />
//             </button>
//             <button
//               type="button"
//               onClick={() => setMobileOpen(true)}
//               aria-label="Open menu"
//               className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E4E7] text-[#18181B] transition-colors hover:border-[#F1192C] hover:text-[#F1192C]"
//             >
//               <Menu className="h-4 w-4" aria-hidden="true" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
//       <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
//     </header>
//   );
// }





// "use client";

// import { useEffect, useState } from "react";
// import { Search, Menu } from "lucide-react";
// import TopBar from "./TopBar";
// import DesktopNavigation from "./DesktopNavigation";
// import MobileNavigation from "./MobileNavigation";
// import SearchModal from "./SearchModal";

// function BrandMark() {
//   return (
//     <svg
//       viewBox="0 0 32 32"
//       className="h-8 w-8 shrink-0"
//       aria-hidden="true"
//     >
//       <path
//         d="M16 3 L29 12 V29 H19 V19 H13 V29 H3 V12 Z"
//         fill="#18181B"
//       />

//       <path
//         d="M16 3 L29 12 H23.5 L16 6.5 L8.5 12 H3 Z"
//         fill="#F1192C"
//       />
//     </svg>
//   );
// }

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       setScrolled(window.scrollY > 24);
//     }

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header className="sticky top-0 z-30 w-full">
//       {/* Top Bar */}
//       <TopBar collapsed={scrolled} />

//       {/* Main Navbar */}
//       <div
//         className={`transition-all duration-300 ease-out ${
//           scrolled
//             ? "border-b border-[#E4E4E7] bg-white/90 shadow-[0_8px_30px_-15px_rgba(24,24,27,0.15)] backdrop-blur-md"
//             : "border-b border-transparent bg-white"
//         }`}
//       >
//         <div
//           className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 ease-out sm:px-6 lg:px-8 ${
//             scrolled ? "py-3" : "py-5"
//           }`}
//         >
//           {/* Logo */}
//           <a
//             href="/"
//             className="flex items-center gap-3"
//           >
//             <BrandMark />

//             <span className="flex flex-col leading-none">
//               <span className="text-lg font-semibold tracking-tight text-[#18181B]">
//                 Atrium Estates
//               </span>

//               <span className="mt-1 text-[11px] text-[#71717A]">
//                 Real estate, considered
//               </span>
//             </span>
//           </a>

//           {/* Desktop Navigation - 1024px+ */}
//           <DesktopNavigation
//             onSearchClick={() => setSearchOpen(true)}
//           />

//           {/* Tablet Navigation - 768px to 1023px */}
//           <nav
//             aria-label="Primary"
//             className="hidden items-center gap-6 md:flex lg:hidden"
//           >
//             <a
//               href="/"
//               className="text-sm font-medium text-[#18181B] transition-colors hover:text-[#F1192C]"
//             >
//               Home
//             </a>

//             <a
//               href="/properties"
//               className="text-sm font-medium text-[#18181B] transition-colors hover:text-[#F1192C]"
//             >
//               Explore Properties
//             </a>

//             <a
//               href="/services"
//               className="text-sm font-medium text-[#18181B] transition-colors hover:text-[#F1192C]"
//             >
//               Our Services
//             </a>
//           </nav>

//           {/* Tablet + Mobile Actions */}
//           <div className="flex items-center gap-2 md:gap-3 lg:hidden">
//             {/* Search */}
//             <button
//               type="button"
//               onClick={() => setSearchOpen(true)}
//               aria-label="Search properties"
//               className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E4E7] text-[#18181B] transition-colors hover:border-[#F1192C] hover:text-[#F1192C]"
//             >
//               <Search
//                 className="h-4 w-4"
//                 aria-hidden="true"
//               />
//             </button>

//             {/* Menu */}
//             <button
//               type="button"
//               onClick={() => setMobileOpen(true)}
//               aria-label="Open menu"
//               className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E4E7] text-[#18181B] transition-colors hover:border-[#F1192C] hover:text-[#F1192C]"
//             >
//               <Menu
//                 className="h-4 w-4"
//                 aria-hidden="true"
//               />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Search Modal */}
//       <SearchModal
//         open={searchOpen}
//         onClose={() => setSearchOpen(false)}
//       />

//       {/* Mobile Navigation */}
//       <MobileNavigation
//         open={mobileOpen}
//         onClose={() => setMobileOpen(false)}
//       />
//     </header>
//   );
// }




import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[80] w-full bg-white">
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}