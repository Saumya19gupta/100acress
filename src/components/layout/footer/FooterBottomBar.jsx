import Link from 'next/link';
import { Heart } from 'lucide-react';
import { footerData } from './footerData';

export default function FooterBottomBar() {
  return (
    <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#71717A]">
      <div className="text-center md:text-left leading-relaxed">
        <p>&copy; 2019–26 &nbsp;·&nbsp; All Rights Reserved &nbsp;·&nbsp; A Venture of Kaushraj Global LLP</p>
      </div>

      <nav aria-label="Footer Legal Links" className="flex flex-wrap items-center justify-center gap-6">
        {footerData.legal.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="hover:text-[#A1A1AA] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="inline-flex items-center gap-1.5">
        <span>Made with</span>
        <Heart className="w-3.5 h-3.5 text-[#F1192C] fill-[#F1192C]" aria-hidden="true" />
        <span>in India</span>
      </div>
    </div>
  );
}