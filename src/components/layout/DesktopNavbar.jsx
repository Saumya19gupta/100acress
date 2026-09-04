
"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Sparkles, 
  User, 
  PlusCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Search,
  Crosshair,
  Mic,
  Check
} from "lucide-react";
import MegaMenu from "./MegaMenu";
import { NAV_LINKS, LOGIN_MENU_DATA, CITIES } from "./navData";

const PROPERTY_TYPE_CHECKBOXES = [
  "Flat/Apartment",
  "Builder Floor",
  "Independent House/Villa",
  "Residential Land",
  "1 RK/ Studio Apartment",
  "Farm House",
  "Serviced Apartments",
  "Other"
];

export default function DesktopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  // Scroll Search Bar & Popup State
  const [searchIntent, setSearchIntent] = useState("Buy");
  const [isIntentOpen, setIsIntentOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState(PROPERTY_TYPE_CHECKBOXES);

  const menuTimeoutRef = useRef(null);
  const loginTimeoutRef = useRef(null);
  const cityTimeoutRef = useRef(null);
  const popupRef = useRef(null);

  // Zero-Jitter Scroll Observer
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 110) {
        setIsScrolled(true);
      } else if (scrollY < 80) {
        setIsScrolled(false);
        setIsSearchPopupOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search filter popup on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsSearchPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTypeCheckbox = (item) => {
    setSelectedTypes(prev =>
      prev.includes(item) ? prev.filter(t => t !== item) : [...prev, item]
    );
  };

  const openMenu = (id) => {
    clearTimeout(menuTimeoutRef.current);
    setActiveMenuId(id);
  };
  const closeMenu = () => {
    menuTimeoutRef.current = setTimeout(() => setActiveMenuId(null), 150);
  };

  const openLogin = () => {
    clearTimeout(loginTimeoutRef.current);
    setIsLoginOpen(true);
  };
  const closeLogin = () => {
    loginTimeoutRef.current = setTimeout(() => setIsLoginOpen(false), 150);
  };

  const openCity = () => {
    clearTimeout(cityTimeoutRef.current);
    setIsCityOpen(true);
  };
  const closeCity = () => {
    cityTimeoutRef.current = setTimeout(() => setIsCityOpen(false), 150);
  };

  return (
    <header className="hidden lg:block w-full select-none font-sans sticky top-0 z-50 bg-white">
      
      {/* 
        MAIN STABLE CONTAINER:
        Is container ki wajah se DOM layout shift/jolt 0% ho gaya hai
      */}
      <div className="relative w-full">
        
        {/* =========================================================================
            LAYER 1: SCROLLED 99ACRES STYLE NAVBAR (FADES IN SMOOTHLY ON SCROLL)
        ========================================================================== */}
        <div 
          className={`absolute inset-x-0 top-0 h-[58px] bg-gradient-to-r from-[#e11924] via-[#d61520] to-[#b50d16] text-white shadow-md z-40 transition-all duration-200 ease-out ${
            isScrolled 
              ? "opacity-100 translate-y-0 pointer-events-auto" 
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          <div className="max-w-[1260px] mx-auto px-4 h-full flex items-center justify-between gap-4">
            
            {/* 1. Left: Logo & City Dropdown (Matches Default Size Exactly) */}
            <div className="flex items-center gap-5 shrink-0">
              <Link href="/" className="px-2.5 py-1 rounded-md flex items-center shadow-xs transition-colors">
                <div className="relative h-7 w-36">
                  <Image
                    src="/images/logos/100acresswhite.webp"
                    alt="100acress.com"
                    fill
                    priority
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              {/* City selector */}
              <div className="relative" onMouseEnter={openCity} onMouseLeave={closeCity}>
                <button className="flex items-center gap-1.5 bg-black/15 hover:bg-black/25 border border-white/20 px-3 py-1 rounded-full text-xs font-medium text-white transition-all cursor-pointer backdrop-blur-xs">
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  <span>{selectedCity}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-white/80" />
                </button>

                {isCityOpen && (
                  <div className="absolute left-0 top-full mt-1.5 z-50 w-44 bg-white text-slate-800 rounded-lg shadow-2xl border border-slate-200 py-1.5 animate-in fade-in duration-100">
                    <div className="text-[10px] font-bold text-slate-400 px-3 py-1 uppercase tracking-wider">
                      Select City
                    </div>
                    {CITIES.map((c) => (
                      <button
                        key={c}
                        onClick={() => { setSelectedCity(c); setIsCityOpen(false); }}
                        className={`w-full text-left px-3 py-1.5 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                          selectedCity === c
                            ? "font-bold text-[#e11924] bg-red-50"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <span>{c}</span>
                        {selectedCity === c && <span className="w-1.5 h-1.5 rounded-full bg-[#e11924]" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 2. Middle: Exact 99acres Search Bar + Dropdown Filter (Image 1 & 2) */}
            <div ref={popupRef} className="flex-1 max-w-xl relative">
              <div 
                onClick={() => setIsSearchPopupOpen(true)}
                className="bg-white rounded-md h-[40px] px-2 flex items-center shadow-xs cursor-text border border-white"
              >
                {/* Intent Selector (Buy / Rent) */}
                <div className="relative shrink-0 pr-2 border-r border-slate-200">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsIntentOpen(!isIntentOpen);
                    }}
                    className="flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-[#e11924] cursor-pointer"
                  >
                    <span>{searchIntent}</span>
                    <ChevronDown className="w-3 h-3 text-slate-500" />
                  </button>

                  {isIntentOpen && (
                    <div className="absolute top-9 left-0 w-28 bg-white rounded-md shadow-xl border border-slate-200 py-1 z-50 text-slate-800">
                      {["Buy", "Rent", "Commercial", "PG"].map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSearchIntent(mode);
                            setIsIntentOpen(false);
                          }}
                          className="w-full text-left px-3 py-1.5 text-xs font-semibold hover:bg-red-50 hover:text-[#e11924]"
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search input field */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter Locality / Project / Society / Landmark"
                  className="w-full pl-3 pr-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none"
                />

                {/* GPS + Mic + Search Action */}
                <div className="flex items-center gap-2 pl-1 text-slate-400 shrink-0">
                  <button 
                    type="button" 
                    title="Use Current Location"
                    className="p-1 rounded-full hover:bg-slate-100 hover:text-[#e11924] transition-colors"
                  >
                    <Crosshair className="w-3.5 h-3.5 text-sky-600" />
                  </button>
                  <button 
                    type="button" 
                    title="Voice Search"
                    className="p-1 rounded-full hover:bg-slate-100 hover:text-[#e11924] transition-colors"
                  >
                    <Mic className="w-3.5 h-3.5 text-sky-600" />
                  </button>
                  <div className="h-4 w-px bg-slate-200 mx-0.5" />
                  <button 
                    type="button"
                    className="p-1 text-slate-600 hover:text-[#e11924] transition-colors"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* ================= IMAGE 2 POPUP MODAL ================= */}
              {isSearchPopupOpen && (
                <div className="absolute top-[48px] left-0 w-full bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 p-5 z-50 animate-in fade-in zoom-in-98 duration-150">
                  
                  {/* Top Filters Row */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Filters</span>
                    <button
                      type="button"
                      onClick={() => setSelectedTypes([])}
                      className="text-xs font-semibold text-[#e11924] hover:underline cursor-pointer"
                    >
                      Clear all filters
                    </button>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <button 
                      type="button"
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-[#e11924] text-[#e11924] bg-red-50/50"
                    >
                      <span>Property Types ({selectedTypes.length})</span>
                      <ChevronUp className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>

                    {["Budget", "Bedroom", "Construction Status", "Posted By"].map((pill) => (
                      <button
                        key={pill}
                        type="button"
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200 text-slate-700 hover:border-slate-400 bg-white"
                      >
                        <span>{pill}</span>
                        <ChevronDown className="w-3 h-3 text-slate-400" />
                      </button>
                    ))}
                  </div>

                  {/* Property Types Checkboxes */}
                  <div className="grid grid-cols-3 gap-y-3 gap-x-4 py-2 border-t border-slate-100">
                    {PROPERTY_TYPE_CHECKBOXES.map((type) => {
                      const isChecked = selectedTypes.includes(type);
                      return (
                        <label
                          key={type}
                          onClick={() => toggleTypeCheckbox(type)}
                          className="flex items-center gap-2 text-xs text-slate-700 hover:text-slate-900 cursor-pointer select-none"
                        >
                          <span className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                            isChecked ? 'bg-[#e11924] border-[#e11924] text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </span>
                          <span className="truncate">{type}</span>
                        </label>
                      );
                    })}
                  </div>

                  {/* Commercial link note */}
                  <p className="text-[11px] text-slate-500 mt-4">
                    Looking for commercial properties?{" "}
                    <Link href="/commercial" className="text-[#e11924] font-semibold hover:underline">
                      Click here
                    </Link>
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 mt-4 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setIsSearchPopupOpen(false)}
                      className="px-6 py-2 rounded-lg bg-[#e11924] hover:bg-[#c4141e] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                    >
                      Search
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSearchPopupOpen(false)}
                      className="px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>

                </div>
              )}
            </div>

            {/* 3. Right: Post Property + User + Hamburger Drawer */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/post-property"
                className="flex items-center gap-1.5 bg-white text-slate-900 px-3.5 py-1.5 rounded-full font-bold text-xs shadow-xs hover:bg-slate-100 transition-all"
              >
                <span>Post property</span>
                <span className="bg-[#fdb913] text-slate-950 text-[9px] font-black px-1.5 py-[1px] rounded-[3px] leading-none">
                  FREE
                </span>
              </Link>

              {/* User Account */}
              <button
                type="button"
                onClick={openLogin}
                className="relative p-1.5 rounded-full hover:bg-black/10 text-white transition-colors cursor-pointer"
                aria-label="User Account"
              >
                <User className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-white ring-2 ring-[#e11924]" />
              </button>

              {/* Side Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsSideDrawerOpen(true)}
                className="p-1.5 rounded hover:bg-black/10 text-white transition-colors cursor-pointer"
                aria-label="Open Menu Drawer"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>

        {/* =========================================================================
            LAYER 2: DEFAULT 2-TIER NAVBAR (NORMAL TOP VIEW)
            - Smoothly fades out on scroll without DOM disruption
        ========================================================================== */}
        <div 
          className={`w-full transition-all duration-200 ease-out ${
            isScrolled 
              ? "opacity-0 -translate-y-1 pointer-events-none" 
              : "opacity-100 translate-y-0 pointer-events-auto"
          }`}
        >
          {/* TIER 1: BRAND RED HEADER */}
          <div className="bg-gradient-to-r from-[#e11924] via-[#d61520] to-[#b50d16] text-white shadow-xs relative z-30">
            <div className="max-w-[1260px] mx-auto px-4 h-[50px] flex items-center justify-between">
              
              {/* Logo & City Pill */}
              <div className="flex items-center gap-5">
                <Link href="/" className="px-2.5 py-1 rounded-md flex items-center shadow-xs transition-colors">
                  <div className="relative h-7 w-36">
                    <Image
                      src="/images/logos/100acresswhite.webp"
                      alt="100acress.com"
                      fill
                      priority
                      className="object-contain object-left"
                    />
                  </div>
                </Link>

                <div className="relative" onMouseEnter={openCity} onMouseLeave={closeCity}>
                  <button className="flex items-center gap-1.5 bg-black/15 hover:bg-black/25 border border-white/20 px-3 py-1 rounded-full text-xs font-medium text-white transition-all cursor-pointer backdrop-blur-xs">
                    <MapPin className="w-3.5 h-3.5 text-amber-300" />
                    <span>{selectedCity}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-white/80 transition-transform ${isCityOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isCityOpen && (
                    <div className="absolute left-0 top-[34px] z-50 w-44 bg-white text-slate-800 rounded-lg shadow-2xl border border-slate-200 py-1.5 animate-in fade-in duration-100">
                      <div className="text-[10px] font-bold text-slate-400 px-3 py-1 uppercase tracking-wider">
                        Select City
                      </div>
                      {CITIES.map((city) => (
                        <button
                          key={city}
                          onClick={() => { setSelectedCity(city); setIsCityOpen(false); }}
                          className={`w-full text-left px-3 py-1.5 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                            selectedCity === city
                              ? "font-bold text-[#e11924] bg-red-50"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <span>{city}</span>
                          {selectedCity === city && <span className="w-1.5 h-1.5 rounded-full bg-[#e11924]" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Action Items */}
              <div className="flex items-center gap-4 text-[13px]">
                <button className="flex items-center gap-1 text-white/95 hover:text-white text-xs font-semibold tracking-tight transition-colors cursor-pointer">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>100 Prime</span>
                </button>

                {/* Seamless Login Tab */}
                <div className="relative" onMouseEnter={openLogin} onMouseLeave={closeLogin}>
                  <button
                    className={`flex items-center gap-1 px-3.5 h-[36px] text-xs font-semibold transition-all cursor-pointer rounded-t-md border ${
                      isLoginOpen
                        ? "bg-white text-slate-900 border-[#e0e0e0] border-b-white z-50 relative"
                        : "text-white border-transparent hover:text-white/90"
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Login</span>
                    {isLoginOpen ? (
                      <ChevronUp className="w-3 h-3 text-slate-900 stroke-[2.5]" />
                    ) : (
                      <ChevronDown className="w-3 h-3 text-white/80" />
                    )}
                  </button>

                  {isLoginOpen && (
                    <div className="absolute right-0 top-[35px] z-40 w-64 bg-white text-slate-800 rounded-b-lg shadow-2xl border border-[#e0e0e0] p-4 animate-in fade-in duration-100">
                      <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">
                        My Activity
                      </div>
                      <div className="space-y-1.5 border-b border-slate-100 pb-3">
                        {LOGIN_MENU_DATA.activity.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="flex items-center justify-between text-xs text-slate-700 hover:text-[#e11924] font-medium py-1 px-1 rounded transition-colors"
                          >
                            <span>{item.label}</span>
                            {item.badge && (
                              <span className="bg-[#fdb913] text-slate-950 text-[9px] font-black px-1.5 py-[0.5px] rounded-[2px] leading-tight">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>

                      <div className="space-y-1 py-2 border-b border-slate-100">
                        {LOGIN_MENU_DATA.account.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="block text-xs text-slate-700 hover:text-[#e11924] font-medium py-1 px-1 rounded transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>

                      <div className="pt-3">
                        <button className="w-full bg-[#e11924] hover:bg-[#c4141e] text-white py-2 rounded-full font-bold text-xs tracking-wide shadow-xs transition-colors cursor-pointer">
                          Login / Sign Up
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Post Property Button */}
                <Link
                  href="/post-property"
                  className="flex items-center gap-1.5 bg-white text-slate-900 px-3.5 py-1.5 rounded-full font-bold text-xs shadow-sm hover:bg-slate-100 transition-all transform active:scale-95"
                >
                  <PlusCircle className="w-3.5 h-3.5 text-[#e11924]" />
                  <span>Post Property</span>
                  <span className="bg-[#fdb913] text-slate-950 text-[9px] font-black px-1.5 py-[1px] rounded-[3px] leading-none">
                    FREE
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* TIER 2: SUB-NAVIGATION */}
          <nav className="bg-white border-b border-[#e5e5e5] h-[40px] relative z-20 shadow-xs">
            <div className="max-w-[1260px] mx-auto px-4 flex items-center h-full gap-1">
              <button
                type="button"
                onClick={() => setIsSideDrawerOpen(true)}
                className="h-[32px] px-2.5 mr-1 flex items-center justify-center rounded text-slate-700 hover:text-[#e11924] hover:bg-slate-50 transition-colors cursor-pointer"
                aria-label="Open Side Navigation"
              >
                <Menu className="w-5 h-5" />
              </button>

              {NAV_LINKS.map((link) => {
                const isActive = activeMenuId === link.id;
                return (
                  <div
                    key={link.id}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => openMenu(link.id)}
                    onMouseLeave={closeMenu}
                  >
                    <button
                      className={`h-[36px] px-3.5 flex items-center gap-1.5 text-[13px] cursor-pointer transition-colors duration-75 relative rounded-t-[6px] border ${
                        isActive
                          ? "bg-white text-[#e11924] font-semibold border-[#e0e0e0] border-b-white z-50"
                          : "bg-transparent text-[#303030] font-normal border-transparent hover:text-[#e11924]"
                      }`}
                      style={{ marginBottom: isActive ? "-1px" : "0px" }}
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="bg-[#fdb913] text-slate-950 text-[9px] font-black px-1 py-[0.5px] rounded-[2px] leading-none">
                          {link.badge}
                        </span>
                      )}
                      {isActive ? (
                        <ChevronUp className="w-3.5 h-3.5 text-[#e11924] stroke-[2.5]" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-500 stroke-[2]" />
                      )}
                    </button>

                    {isActive && (
                      <MegaMenu
                        columns={link.columns}
                        menuWidth={link.menuWidth}
                        onClose={() => setActiveMenuId(null)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
        </div>

      </div>

      {/* =========================================================================
          SHARED LEFT NAVIGATION DRAWER (Unchanged & Isolated)
      ========================================================================== */}
      {isSideDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setIsSideDrawerOpen(false)}
          />

          <div 
            className="relative w-80 max-w-[85vw] bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto overscroll-contain animate-in slide-in-from-left duration-200 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header */}
              <div className="bg-red-50/40 px-4 py-3.5 border-b border-red-100 flex items-center justify-between">
                <Link
                  href="/login"
                  onClick={() => setIsSideDrawerOpen(false)}
                  className="flex items-center gap-2 text-xs font-bold text-[#e11924] hover:underline"
                >
                  <User className="w-5 h-5 text-[#e11924]" />
                  <span>LOGIN / REGISTER</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsSideDrawerOpen(false)}
                  className="p-1 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
                  aria-label="Close Drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Promotional Banner Box */}
              <div className="p-3.5">
                <div className="bg-red-50/50 rounded-xl p-3.5 relative overflow-hidden flex items-center justify-between border border-red-100">
                  <div className="max-w-[55%] z-10">
                    <h4 className="text-[13px] font-bold text-slate-900 leading-snug">
                      Sell or rent faster at the right price!
                    </h4>
                    <Link
                      href="/post-property"
                      onClick={() => setIsSideDrawerOpen(false)}
                      className="mt-2.5 inline-block bg-[#e11924] hover:bg-[#c4141e] text-white text-[11px] font-bold px-3.5 py-1.5 rounded shadow-xs transition-colors"
                    >
                      Post Property
                    </Link>
                  </div>
                  <div className="relative w-24 h-24 shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                      alt="Real Estate Agent"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="px-4 py-2">
                <p className="text-xs font-bold text-slate-900 mb-3">Explore our Services</p>
                <ul className="space-y-3.5 text-xs text-slate-700 font-medium">
                  {["For Buyers", "For Tenants", "For Owners", "For Dealers / Builders"].map((item) => (
                    <li key={item}>
                      <Link 
                        href={`/${item.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                        onClick={() => setIsSideDrawerOpen(false)}
                        className="flex items-center gap-2 hover:text-[#e11924] transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 fill-slate-400" />
                        <span>{item}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <hr className="my-4 border-slate-100" />

                <ul className="space-y-3.5 text-xs text-slate-700 font-medium">
                  <li>
                    <Link href="/home-loans" onClick={() => setIsSideDrawerOpen(false)} className="hover:text-[#e11924] transition-colors pl-5.5 block">
                      Home Loans
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights" onClick={() => setIsSideDrawerOpen(false)} className="flex items-center gap-2 hover:text-[#e11924] transition-colors">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 fill-slate-400" />
                      <span>Insights</span>
                      <span className="bg-[#e11924] text-white text-[9px] font-bold px-1 rounded">NEW</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles-news" onClick={() => setIsSideDrawerOpen(false)} className="flex items-center gap-2 hover:text-[#e11924] transition-colors">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 fill-slate-400" />
                      <span>Articles & News</span>
                    </Link>
                  </li>
                </ul>

                <hr className="my-4 border-slate-100" />

                <div>
                  <Link href="/about-us" onClick={() => setIsSideDrawerOpen(false)} className="text-xs text-slate-800 font-medium hover:text-[#e11924] transition-colors pl-5.5 block">
                    About Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Support & Search Code */}
            <div className="p-4 bg-slate-50/70 border-t border-slate-100">
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search by Property Code"
                  className="w-full bg-slate-100 border border-slate-200 rounded-lg py-2 pl-3 pr-8 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-red-300"
                />
                <Search className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
              </div>

              <div className="text-[11px] text-slate-500 leading-relaxed">
                <p>Toll Free Number: <span className="font-semibold text-slate-700">1800 41 99099</span>.</p>
                <p>
                  For international numbers{" "}
                  <Link href="/contact-international" className="font-bold text-[#e11924] underline">
                    click here
                  </Link>
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}