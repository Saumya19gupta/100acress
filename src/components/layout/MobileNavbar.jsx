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