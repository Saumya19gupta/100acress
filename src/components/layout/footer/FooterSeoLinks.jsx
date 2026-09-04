import Link from 'next/link';
import { footerData } from './footerData';

export default function FooterSeoLinks() {
  return (
    <div className="py-12 border-b border-[#27272A]">
      <p className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
        Popular Property Searches in Gurgaon
      </p>
      <div className="flex flex-wrap gap-2">
        {footerData.gurgaonPills.map((label) => (
          <Link
            key={label}
            href={`/search?q=${encodeURIComponent(label)}`}
            className="text-xs text-[#A1A1AA] bg-[#121215] border border-[#27272A] hover:border-white/30 hover:text-white px-3 py-1.5 rounded-full transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}