import Link from 'next/link';
import { PhoneCall, MessageSquare, CalendarClock } from 'lucide-react';

export default function FooterTopCTA() {
  return (
    <div className="pb-12 border-b border-[#27272A]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-[#A1A1AA] tracking-wide uppercase">
              Experts online now &nbsp;·&nbsp; Response within 5 minutes
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
            Looking for Your Dream Property?
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="tel:+918500900100"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#F1192C] hover:bg-[#d81425] transition-colors focus-visible:outline-2 focus-visible:outline-[#F1192C]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          <a
            href="https://wa.me/918500900100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white border border-[#27272A] bg-[#09090b] hover:border-white/40 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/schedule-visit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white border border-white/20 hover:border-white hover:bg-white/5 transition-colors"
          >
            <CalendarClock className="w-4 h-4" />
            <span>Schedule Visit</span>
          </Link>
        </div>
      </div>
    </div>
  );
}