// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   ChevronDown,
//   Menu,
//   X,
//   Search,
//   MapPin,
// } from "lucide-react";
// import { mainNavigation } from "./navData";

// export default function MobileNavbar() {
//   const [open, setOpen] = useState(false);
//   const [expanded, setExpanded] = useState(null);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   return (
//     <>
//       {/* ================= MOBILE HEADER ================= */}
//       <header className="block border-b border-[#E5E5E5] bg-white lg:hidden">
//         {/* Red Top */}
//         <div className="h-[60px] bg-[#F1192C]">
//           <div className="mx-auto flex h-full items-center justify-between px-4 sm:px-6">
            
//             <Link
//               href="/"
//               className="text-[25px] font-bold tracking-tight text-white"
//             >
//               Atrium
//               <span className="font-normal">Homes</span>
//             </Link>

//             <div className="flex items-center gap-2">
//               <button
//                 type="button"
//                 className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
//               >
//                 <Search className="h-5 w-5" />
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setOpen(true)}
//                 className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
//                 aria-label="Open menu"
//               >
//                 <Menu className="h-6 w-6" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Location Row */}
//         <div className="flex h-11 items-center justify-between border-b border-[#E5E5E5] px-4 sm:px-6">
//           <button className="flex items-center gap-1.5 text-sm text-[#333]">
//             <MapPin className="h-4 w-4 text-[#F1192C]" />
//             Mumbai
//             <ChevronDown className="h-4 w-4" />
//           </button>

//           <Link
//             href="/list-property"
//             className="text-sm font-medium text-[#F1192C]"
//           >
//             Post Property
//           </Link>
//         </div>
//       </header>

//       {/* ================= MOBILE DRAWER ================= */}
//       <div
//         className={`fixed inset-0 z-[100] lg:hidden ${
//           open ? "pointer-events-auto" : "pointer-events-none"
//         }`}
//       >
//         {/* Backdrop */}
//         <button
//           type="button"
//           aria-label="Close menu"
//           onClick={() => setOpen(false)}
//           className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
//             open ? "opacity-100" : "opacity-0"
//           }`}
//         />

//         {/* Drawer */}
//         <aside
//           className={`absolute right-0 top-0 h-full w-[88%] max-w-[420px] bg-white shadow-2xl transition-transform duration-300 ${
//             open ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           {/* Drawer Header */}
//           <div className="flex h-[70px] items-center justify-between border-b border-[#E5E5E5] px-5">
//             <Link
//               href="/"
//               onClick={() => setOpen(false)}
//               className="text-xl font-bold text-[#222]"
//             >
//               Atrium
//               <span className="font-normal">Homes</span>
//             </Link>

//             <button
//               type="button"
//               onClick={() => setOpen(false)}
//               className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5]"
//               aria-label="Close menu"
//             >
//               <X className="h-5 w-5" />
//             </button>
//           </div>

//           {/* Menu */}
//           <div className="h-[calc(100%-70px)] overflow-y-auto px-5 py-4">
//             {mainNavigation.map((item) => {
//               const isExpanded = expanded === item.label;

//               return (
//                 <div
//                   key={item.label}
//                   className="border-b border-[#EEEEEE]"
//                 >
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setExpanded(
//                         isExpanded ? null : item.label
//                       )
//                     }
//                     className="flex w-full items-center justify-between py-5 text-left"
//                   >
//                     <span className="flex items-center gap-2 text-[17px] font-medium text-[#222]">
//                       {item.label}

//                       {item.badge && (
//                         <span className="rounded-full bg-[#FDBD19] px-2 py-0.5 text-[9px] font-bold">
//                           {item.badge}
//                         </span>
//                       )}
//                     </span>

//                     <ChevronDown
//                       className={`h-5 w-5 text-[#555] transition-transform ${
//                         isExpanded ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   <div
//                     className={`overflow-hidden transition-all duration-300 ${
//                       isExpanded
//                         ? "max-h-[700px] pb-4"
//                         : "max-h-0"
//                     }`}
//                   >
//                     <div className="space-y-5">
//                       {item.menu?.columns.map((column) => (
//                         <div key={column.title}>
//                           <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#999]">
//                             {column.title}
//                           </p>

//                           <div className="space-y-2">
//                             {column.items.map((name) => (
//                               <Link
//                                 key={name}
//                                 href="#"
//                                 onClick={() => setOpen(false)}
//                                 className="block py-1 text-sm text-[#444] hover:text-[#F1192C]"
//                               >
//                                 {name}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}

//             {/* Bottom CTA */}
//             <div className="mt-6 space-y-3">
//               <Link
//                 href="/login"
//                 onClick={() => setOpen(false)}
//                 className="flex w-full items-center justify-center rounded-lg border border-[#DDDDDD] py-3 text-sm font-medium"
//               >
//                 Login
//               </Link>

//               <Link
//                 href="/list-property"
//                 onClick={() => setOpen(false)}
//                 className="flex w-full items-center justify-center rounded-lg bg-[#F1192C] py-3.5 text-sm font-medium text-white"
//               >
//                 Post Property
//               </Link>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </>
//   );
// }



// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X, ChevronDown, User } from "lucide-react";
// import { NAV_LINKS, LOGIN_MENU } from "./navData";

// export default function MobileNavbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [expandedNav, setExpandedNav] = useState(null);
//   const [showLoginSection, setShowLoginSection] = useState(false);

//   const toggleSubmenu = (id) => {
//     setExpandedNav((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="lg:hidden w-full bg-[#e4252b] text-white sticky top-0 z-50">
//       <div className="px-4 h-14 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="p-1 hover:bg-red-700 rounded-md transition-colors"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//           <Link href="/" className="text-xl font-bold tracking-tight">
//             magic<span className="font-light">bricks</span>
//           </Link>
//         </div>

//         <div className="flex items-center gap-2">
//           <button className="flex items-center gap-1 bg-white text-slate-800 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-xs">
//             <span>Post</span>
//             <span className="bg-amber-400 text-[8px] px-1 py-0.2 rounded-xs">FREE</span>
//           </button>
//           <button
//             onClick={() => setShowLoginSection(!showLoginSection)}
//             className="p-1.5 hover:bg-red-700 rounded-full"
//           >
//             <User className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Drawer Overlay */}
//       {isOpen && (
//         <div className="fixed inset-x-0 top-14 bottom-0 bg-white text-slate-800 z-40 overflow-y-auto pb-12 shadow-2xl animate-in fade-in slide-in-from-top-2">
//           {/* City / Locality Quick Select */}
//           <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center text-sm font-semibold">
//             <span>Location: <span className="text-red-600">Mumbai</span></span>
//             <button className="text-xs text-slate-500 underline">Change</button>
//           </div>

//           <div className="divide-y divide-slate-100">
//             {NAV_LINKS.map((link) => (
//               <div key={link.id} className="p-4">
//                 <button
//                   onClick={() => link.hasMegaMenu && toggleSubmenu(link.id)}
//                   className="w-full flex items-center justify-between text-sm font-semibold text-slate-800"
//                 >
//                   <div className="flex items-center gap-2">
//                     <span>{link.label}</span>
//                     {link.badge && (
//                       <span className="bg-amber-400 text-slate-900 text-[9px] font-bold px-1.5 py-0.2 rounded-xs">
//                         {link.badge}
//                       </span>
//                     )}
//                   </div>
//                   {link.hasMegaMenu && (
//                     <ChevronDown
//                       className={`w-4 h-4 transition-transform ${
//                         expandedNav === link.id ? "rotate-180 text-red-600" : "text-slate-400"
//                       }`}
//                     />
//                   )}
//                 </button>

//                 {/* Subcategory accordions */}
//                 {link.hasMegaMenu && expandedNav === link.id && (
//                   <div className="mt-3 pl-2 space-y-4 pt-2 border-t border-slate-100">
//                     {link.categories?.map((cat, idx) => (
//                       <div key={idx} className="space-y-2">
//                         <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
//                           {cat.title}
//                         </div>
//                         <div className="grid grid-cols-1 gap-2 pl-2">
//                           {cat.items.map((item, itemIdx) => (
//                             <Link
//                               key={itemIdx}
//                               href={item.href}
//                               className="text-xs font-medium text-slate-700 hover:text-red-600 flex items-center gap-2"
//                               onClick={() => setIsOpen(false)}
//                             >
//                               <span>{item.name}</span>
//                               {item.badge && (
//                                 <span className="text-[9px] font-bold text-red-600 bg-red-50 border border-red-200 px-1 py-0.2 rounded-xs">
//                                   {item.badge}
//                                 </span>
//                               )}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Profile/Login Drawer */}
//       {showLoginSection && (
//         <div className="fixed inset-x-0 top-14 bottom-0 bg-white text-slate-800 z-40 p-4 overflow-y-auto">
//           <div className="flex justify-between items-center pb-3 border-b border-slate-200">
//             <h3 className="font-bold text-sm">Account & Activity</h3>
//             <button onClick={() => setShowLoginSection(false)} className="p-1">
//               <X className="w-5 h-5 text-slate-500" />
//             </button>
//           </div>

//           <div className="pt-4">
//             <button className="w-full bg-[#d8232a] text-white py-2.5 rounded-full font-semibold text-xs tracking-wide shadow-md">
//               Login / Sign Up
//             </button>
//           </div>

//           <div className="mt-6 space-y-3">
//             <div className="text-[11px] font-bold text-slate-400 uppercase">My Activity</div>
//             {LOGIN_MENU.activity.map((item, idx) => (
//               <Link
//                 key={idx}
//                 href={item.href}
//                 className="flex items-center justify-between text-xs font-medium text-slate-700 py-1"
//                 onClick={() => setShowLoginSection(false)}
//               >
//                 <span>{item.label}</span>
//                 {item.badge && (
//                   <span className="bg-amber-400 text-slate-900 text-[9px] font-bold px-1.5 py-0.5 rounded-xs">
//                     {item.badge}
//                   </span>
//                 )}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X, ChevronDown, User, MapPin } from "lucide-react";
// import { NAV_LINKS, LOGIN_MENU_DATA, CITIES } from "./navData";

// export default function MobileNavbar() {
//   const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
//   const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [currentCity, setCurrentCity] = useState("Mumbai");

//   const toggleSection = (id) => {
//     setExpandedSection((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="lg:hidden w-full sticky top-0 z-50 select-none font-sans">
//       {/* Red Top Bar */}
//       <div className="bg-[#d8232a] text-white px-4 h-13 flex items-center justify-between shadow-md">
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => {
//               setIsNavDrawerOpen(!isNavDrawerOpen);
//               setIsLoginDrawerOpen(false);
//             }}
//             className="p-1 rounded hover:bg-red-700 active:scale-95 transition-transform"
//             aria-label="Toggle navigation menu"
//           >
//             {isNavDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
          
//           <Link href="/" className="text-xl font-bold tracking-tight text-white">
//             magic<span className="font-light">bricks</span>
//           </Link>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-2.5">
//           <Link
//             href="/post-property"
//             className="flex items-center gap-1 bg-white text-slate-800 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-xs"
//           >
//             <span>Post</span>
//             <span className="bg-[#fdb913] text-[8px] px-1 py-[0.5px] rounded-[2px]">FREE</span>
//           </Link>

//           <button
//             onClick={() => {
//               setIsLoginDrawerOpen(!isLoginDrawerOpen);
//               setIsNavDrawerOpen(false);
//             }}
//             className="p-1.5 rounded-full bg-red-700/60 hover:bg-red-700 text-white"
//             aria-label="User Account"
//           >
//             <User className="w-4 h-4" />
//           </button>
//         </div>
//       </div>

//       {/* Navigation Menu Drawer */}
//       {isNavDrawerOpen && (
//         <div className="fixed inset-x-0 top-13 bottom-0 bg-white text-slate-800 z-40 overflow-y-auto pb-16 animate-in slide-in-from-top-1 duration-150">
//           {/* City Selection header */}
//           <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between text-xs font-medium">
//             <div className="flex items-center gap-1.5 text-slate-600">
//               <MapPin className="w-4 h-4 text-[#d8232a]" />
//               <span>Location:</span>
//               <span className="font-bold text-slate-900">{currentCity}</span>
//             </div>
//             <select
//               value={currentCity}
//               onChange={(e) => setCurrentCity(e.target.value)}
//               className="text-[11px] font-semibold text-[#d8232a] bg-transparent border-0 outline-none cursor-pointer"
//             >
//               {CITIES.map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Accordion Nav Items */}
//           <div className="divide-y divide-slate-100">
//             {NAV_LINKS.map((nav) => {
//               const isExpanded = expandedSection === nav.id;

//               return (
//                 <div key={nav.id} className="p-3.5">
//                   <button
//                     onClick={() => toggleSection(nav.id)}
//                     className="w-full flex items-center justify-between text-sm font-semibold text-slate-800"
//                   >
//                     <div className="flex items-center gap-2">
//                       <span className={isExpanded ? "text-[#d8232a]" : "text-slate-800"}>
//                         {nav.label}
//                       </span>
//                       {nav.badge && (
//                         <span className="bg-[#fdb913] text-[#303030] text-[9px] font-black px-1 py-[0.5px] rounded-[2px]">
//                           {nav.badge}
//                         </span>
//                       )}
//                     </div>
//                     <ChevronDown
//                       className={`w-4 h-4 transition-transform ${
//                         isExpanded ? "rotate-180 text-[#d8232a]" : "text-slate-400"
//                       }`}
//                     />
//                   </button>

//                   {/* Expanded Categories */}
//                   {isExpanded && (
//                     <div className="mt-3 pl-2 space-y-4 pt-2 border-t border-slate-100">
//                       {nav.columns?.map((col, cIdx) => (
//                         <div key={cIdx} className="space-y-1.5">
//                           <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
//                             {col.title}
//                           </div>
//                           <ul className="space-y-1.5 pl-2">
//                             {col.items.map((item, iIdx) => (
//                               <li key={iIdx}>
//                                 <Link
//                                   href={item.href}
//                                   onClick={() => setIsNavDrawerOpen(false)}
//                                   className="text-xs text-slate-700 hover:text-[#d8232a] flex items-center gap-1.5 py-1"
//                                 >
//                                   <span>{item.name}</span>
//                                   {item.badge && (
//                                     <span className="text-[9px] text-[#d8232a] font-bold bg-red-50 border border-red-200 px-1 rounded-[2px]">
//                                       {item.badge}
//                                     </span>
//                                   )}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* Login / Profile Drawer */}
//       {isLoginDrawerOpen && (
//         <div className="fixed inset-x-0 top-13 bottom-0 bg-white text-slate-800 z-40 p-4 overflow-y-auto animate-in slide-in-from-top-1 duration-150">
//           <div className="flex items-center justify-between pb-3 border-b border-slate-200">
//             <h3 className="font-bold text-sm text-slate-900">Account & Activity</h3>
//             <button onClick={() => setIsLoginDrawerOpen(false)}>
//               <X className="w-5 h-5 text-slate-500" />
//             </button>
//           </div>

//           <div className="pt-4">
//             <button className="w-full bg-[#d8232a] text-white py-2.5 rounded-full font-bold text-xs tracking-wide shadow-md">
//               Login / Sign Up
//             </button>
//           </div>

//           <div className="mt-6">
//             <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
//               My Activity
//             </div>
//             <div className="space-y-2 border-b border-slate-100 pb-3">
//               {LOGIN_MENU_DATA.activity.map((item, idx) => (
//                 <Link
//                   key={idx}
//                   href={item.href}
//                   onClick={() => setIsLoginDrawerOpen(false)}
//                   className="flex items-center justify-between text-xs font-medium text-slate-700 py-1.5"
//                 >
//                   <span>{item.label}</span>
//                   {item.badge && (
//                     <span className="bg-[#fdb913] text-[#303030] text-[9px] font-bold px-1.5 py-0.5 rounded-[2px]">
//                       {item.badge}
//                     </span>
//                   )}
//                 </Link>
//               ))}
//             </div>

//             <div className="space-y-2 pt-3">
//               {LOGIN_MENU_DATA.account.map((item, idx) => (
//                 <Link
//                   key={idx}
//                   href={item.href}
//                   onClick={() => setIsLoginDrawerOpen(false)}
//                   className="block text-xs font-medium text-slate-700 py-1.5"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X, ChevronDown, User, MapPin } from "lucide-react";
// import { NAV_LINKS, LOGIN_MENU_DATA, CITIES } from "./navData";

// export default function MobileNavbar() {
//   const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
//   const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [currentCity, setCurrentCity] = useState("Mumbai");

//   const toggleSection = (id) => {
//     setExpandedSection((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="lg:hidden w-full sticky top-0 z-50 select-none font-sans">
//       {/* Top Red Header */}
//       <div className="bg-[#d8232a] text-white px-4 h-13 flex items-center justify-between shadow-md">
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => {
//               setIsNavDrawerOpen(!isNavDrawerOpen);
//               setIsLoginDrawerOpen(false);
//             }}
//             className="p-1 rounded hover:bg-red-700 active:scale-95 transition-transform"
//             aria-label="Toggle navigation menu"
//           >
//             {isNavDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
          
//           <Link href="/" className="text-xl font-bold tracking-tight text-white">
//             magic<span className="font-light">bricks</span>
//           </Link>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-2.5">
//           <Link
//             href="/post-property"
//             className="flex items-center gap-1 bg-white text-slate-800 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-xs"
//           >
//             <span>Post</span>
//             <span className="bg-[#fdb913] text-[8px] px-1 py-[0.5px] rounded-[2px]">FREE</span>
//           </Link>

//           <button
//             onClick={() => {
//               setIsLoginDrawerOpen(!isLoginDrawerOpen);
//               setIsNavDrawerOpen(false);
//             }}
//             className="p-1.5 rounded-full bg-red-700 hover:bg-red-800 text-white"
//             aria-label="User Account"
//           >
//             <User className="w-4 h-4" />
//           </button>
//         </div>
//       </div>

//       {/* Navigation Drawer */}
//       {isNavDrawerOpen && (
//         <div className="fixed inset-x-0 top-13 bottom-0 bg-white text-slate-800 z-40 overflow-y-auto pb-16 animate-in slide-in-from-top-1 duration-150">
//           <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between text-xs font-medium">
//             <div className="flex items-center gap-1.5 text-slate-600">
//               <MapPin className="w-4 h-4 text-[#d8232a]" />
//               <span>Location:</span>
//               <span className="font-bold text-slate-900">{currentCity}</span>
//             </div>
//             <select
//               value={currentCity}
//               onChange={(e) => setCurrentCity(e.target.value)}
//               className="text-[11px] font-semibold text-[#d8232a] bg-transparent border-0 outline-none cursor-pointer"
//             >
//               {CITIES.map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="divide-y divide-slate-100">
//             {NAV_LINKS.map((nav) => {
//               const isExpanded = expandedSection === nav.id;

//               return (
//                 <div key={nav.id} className="p-3.5">
//                   <button
//                     onClick={() => toggleSection(nav.id)}
//                     className="w-full flex items-center justify-between text-sm font-semibold text-slate-800"
//                   >
//                     <div className="flex items-center gap-2">
//                       <span className={isExpanded ? "text-[#d8232a]" : "text-slate-800"}>
//                         {nav.label}
//                       </span>
//                       {nav.badge && (
//                         <span className="bg-[#fdb913] text-[#303030] text-[9px] font-black px-1 py-[0.5px] rounded-[2px]">
//                           {nav.badge}
//                         </span>
//                       )}
//                     </div>
//                     <ChevronDown
//                       className={`w-4 h-4 transition-transform ${
//                         isExpanded ? "rotate-180 text-[#d8232a]" : "text-slate-400"
//                       }`}
//                     />
//                   </button>

//                   {isExpanded && (
//                     <div className="mt-3 pl-2 space-y-4 pt-2 border-t border-slate-100">
//                       {nav.columns?.map((col, cIdx) => (
//                         <div key={cIdx} className="space-y-1.5">
//                           <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
//                             {col.title}
//                           </div>
//                           <ul className="space-y-1.5 pl-2">
//                             {col.items.map((item, iIdx) => (
//                               <li key={iIdx}>
//                                 <Link
//                                   href={item.href}
//                                   onClick={() => setIsNavDrawerOpen(false)}
//                                   className="text-xs text-slate-700 hover:text-[#d8232a] flex items-center gap-1.5 py-1"
//                                 >
//                                   <span>{item.name}</span>
//                                   {item.badge && (
//                                     <span className="text-[9px] text-[#d8232a] font-bold bg-red-50 border border-red-200 px-1 rounded-[2px]">
//                                       {item.badge}
//                                     </span>
//                                   )}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* Login Drawer */}
//       {isLoginDrawerOpen && (
//         <div className="fixed inset-x-0 top-13 bottom-0 bg-white text-slate-800 z-40 p-4 overflow-y-auto animate-in slide-in-from-top-1 duration-150">
//           <div className="flex items-center justify-between pb-3 border-b border-slate-200">
//             <h3 className="font-bold text-sm text-slate-900">Account & Activity</h3>
//             <button onClick={() => setIsLoginDrawerOpen(false)}>
//               <X className="w-5 h-5 text-slate-500" />
//             </button>
//           </div>

//           <div className="pt-4">
//             <button className="w-full bg-[#d8232a] text-white py-2.5 rounded-full font-bold text-xs tracking-wide shadow-md">
//               Login / Sign Up
//             </button>
//           </div>

//           <div className="mt-6">
//             <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
//               My Activity
//             </div>
//             <div className="space-y-2 border-b border-slate-100 pb-3">
//               {LOGIN_MENU_DATA.activity.map((item, idx) => (
//                 <Link
//                   key={idx}
//                   href={item.href}
//                   onClick={() => setIsLoginDrawerOpen(false)}
//                   className="flex items-center justify-between text-xs font-medium text-slate-700 py-1.5"
//                 >
//                   <span>{item.label}</span>
//                   {item.badge && (
//                     <span className="bg-[#fdb913] text-[#303030] text-[9px] font-bold px-1.5 py-0.5 rounded-[2px]">
//                       {item.badge}
//                     </span>
//                   )}
//                 </Link>
//               ))}
//             </div>

//             <div className="space-y-2 pt-3">
//               {LOGIN_MENU_DATA.account.map((item, idx) => (
//                 <Link
//                   key={idx}
//                   href={item.href}
//                   onClick={() => setIsLoginDrawerOpen(false)}
//                   className="block text-xs font-medium text-slate-700 py-1.5"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, User, MapPin } from "lucide-react";
import { NAV_LINKS, LOGIN_MENU_DATA, CITIES } from "./navData";
import Image from "next/image";

export default function MobileNavbar() {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [currentCity, setCurrentCity] = useState("Mumbai");

  const toggleSection = (id) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="lg:hidden w-full sticky top-0 z-50 select-none font-sans">
      {/* Top Header: White Background with #d8232a Text/Icons */}
      <div className="bg-white border-b border-slate-200 px-4 h-13 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setIsNavDrawerOpen(!isNavDrawerOpen);
              setIsLoginDrawerOpen(false);
            }}
            className="p-1 rounded text-[#d8232a] hover:bg-red-50 active:scale-95 transition-all"
            aria-label="Toggle navigation menu"
          >
            {isNavDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* <Link href="/" className="text-xl font-bold tracking-tight text-[#d8232a]">
            magic<span className="font-light">bricks</span>
          </Link> */}

          <Link href="/" className="flex items-center">
  <Image
    src="/images/logos/100acressred.webp"
    alt="MagicBricks"
    width={180}
    height={50}
    priority
    className="h-auto w-[130px] object-contain"
  />
</Link>


        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/post-property"
            className="flex items-center gap-1 border border-[#d8232a] text-[#d8232a] px-2.5 py-1 rounded-full text-[11px] font-bold shadow-xs hover:bg-red-50 transition-colors"
          >
            <span>Post</span>
            <span className="bg-[#fdb913] text-[#303030] text-[8px] px-1 py-[0.5px] rounded-[2px]">FREE</span>
          </Link>

          <button
            onClick={() => {
              setIsLoginDrawerOpen(!isLoginDrawerOpen);
              setIsNavDrawerOpen(false);
            }}
            className="p-1.5 rounded-full border border-red-200 bg-red-50 hover:bg-red-100 text-[#d8232a] transition-colors"
            aria-label="User Account"
          >
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Navigation Drawer */}
      {isNavDrawerOpen && (
        <div className="fixed inset-x-0 top-13 bottom-0 bg-white text-slate-800 z-40 overflow-y-auto pb-16 animate-in slide-in-from-top-1 duration-150">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between text-xs font-medium">
            <div className="flex items-center gap-1.5 text-slate-600">
              <MapPin className="w-4 h-4 text-[#d8232a]" />
              <span>Location:</span>
              <span className="font-bold text-slate-900">{currentCity}</span>
            </div>
            <select
              value={currentCity}
              onChange={(e) => setCurrentCity(e.target.value)}
              className="text-[11px] font-semibold text-[#d8232a] bg-transparent border-0 outline-none cursor-pointer"
            >
              {CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="divide-y divide-slate-100">
            {NAV_LINKS.map((nav) => {
              const isExpanded = expandedSection === nav.id;

              return (
                <div key={nav.id} className="p-3.5">
                  <button
                    onClick={() => toggleSection(nav.id)}
                    className="w-full flex items-center justify-between text-sm font-semibold text-slate-800"
                  >
                    <div className="flex items-center gap-2">
                      <span className={isExpanded ? "text-[#d8232a]" : "text-slate-800"}>
                        {nav.label}
                      </span>
                      {nav.badge && (
                        <span className="bg-[#fdb913] text-[#303030] text-[9px] font-black px-1 py-[0.5px] rounded-[2px]">
                          {nav.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isExpanded ? "rotate-180 text-[#d8232a]" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="mt-3 pl-2 space-y-4 pt-2 border-t border-slate-100">
                      {nav.columns?.map((col, cIdx) => (
                        <div key={cIdx} className="space-y-1.5">
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            {col.title}
                          </div>
                          <ul className="space-y-1.5 pl-2">
                            {col.items.map((item, iIdx) => (
                              <li key={iIdx}>
                                <Link
                                  href={item.href}
                                  onClick={() => setIsNavDrawerOpen(false)}
                                  className="text-xs text-slate-700 hover:text-[#d8232a] flex items-center gap-1.5 py-1"
                                >
                                  <span>{item.name}</span>
                                  {item.badge && (
                                    <span className="text-[9px] text-[#d8232a] font-bold bg-red-50 border border-red-200 px-1 rounded-[2px]">
                                      {item.badge}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Login Drawer */}
      {isLoginDrawerOpen && (
        <div className="fixed inset-x-0 top-13 bottom-0 bg-white text-slate-800 z-40 p-4 overflow-y-auto animate-in slide-in-from-top-1 duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <h3 className="font-bold text-sm text-slate-900">Account & Activity</h3>
            <button onClick={() => setIsLoginDrawerOpen(false)}>
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          <div className="pt-4">
            <button className="w-full bg-[#d8232a] text-white py-2.5 rounded-full font-bold text-xs tracking-wide shadow-md">
              Login / Sign Up
            </button>
          </div>

          <div className="mt-6">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              My Activity
            </div>
            <div className="space-y-2 border-b border-slate-100 pb-3">
              {LOGIN_MENU_DATA.activity.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setIsLoginDrawerOpen(false)}
                  className="flex items-center justify-between text-xs font-medium text-slate-700 py-1.5"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="bg-[#fdb913] text-[#303030] text-[9px] font-bold px-1.5 py-0.5 rounded-[2px]">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <div className="space-y-2 pt-3">
              {LOGIN_MENU_DATA.account.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setIsLoginDrawerOpen(false)}
                  className="block text-xs font-medium text-slate-700 py-1.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}