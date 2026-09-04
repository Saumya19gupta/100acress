import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { footerData } from './footerData';

export default function FooterStats() {
  return (
    <div className="py-12 border-b border-[#27272A] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
      {footerData.stats.map((item) => (
        <div key={item.label} className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {item.value}
          </span>
          <span className="mt-1 text-xs text-[#A1A1AA] uppercase tracking-wider">
            {item.label}
          </span>
        </div>
      ))}

      <div className="col-span-2 md:col-span-4 lg:col-span-1 border border-[#27272A] bg-[#0a0a0c] rounded-2xl p-4 flex flex-col justify-between">
        <div>
          <span className="text-sm font-semibold text-white block">
            Get Instant Callback
          </span>
          <div className="flex items-center gap-1.5 mt-1 text-xs text-[#A1A1AA]">
            <Clock className="w-3.5 h-3.5 text-[#F1192C]" />
            <span>Response within 30 minutes</span>
          </div>
        </div>
        <Link
          href="/contact"
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#F1192C] hover:text-white transition-colors"
        >
          <span>Contact Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}