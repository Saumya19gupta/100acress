import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, Building } from 'lucide-react';
import { footerData } from './footerData';
import Image from "next/image";

export default function FooterMainGrid() {
  return (
    <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-[#27272A]">
      {/* Brand Column */}
      <div className="sm:col-span-2 lg:col-span-3 flex flex-col justify-between">
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            {/* <span className="w-7 h-7 rounded bg-[#F1192C] flex items-center justify-center text-white">
              <Building className="w-4 h-4" />
            </span>
            <span className="text-2xl font-bold tracking-tight text-white">
              100<span className="text-[#F1192C]">acress</span>
            </span> */}

            <Image
  src="/images/logos/100acressredbg.png"
  alt="100acress"
  width={180}
  height={50}
  className="h-auto w-[150px] object-contain"
/>
          </Link>

          <p className="mt-4 text-sm text-[#A1A1AA] leading-relaxed">
            {footerData.brand.tagline}
          </p>

          <div className="mt-6 space-y-3 text-sm text-[#A1A1AA]">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#F1192C] shrink-0" />
              <a href={`tel:${footerData.brand.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                {footerData.brand.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#F1192C] shrink-0" />
              <a href={`mailto:${footerData.brand.email}`} className="hover:text-white transition-colors">
                {footerData.brand.email}
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#F1192C] shrink-0 mt-0.5" />
              <span>{footerData.brand.locations.join(' \u00A0·\u00A0 ')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="lg:col-span-2">
        <h3 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
          Quick Links
        </h3>
        <ul className="space-y-2">
          {footerData.quickLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Cities */}
      <div className="lg:col-span-2">
        <h3 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
          Popular Cities
        </h3>
        <ul className="space-y-2">
          {footerData.popularCities.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Developers */}
      <div className="lg:col-span-3">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs uppercase tracking-widest text-white font-semibold">
            Top Developers
          </h3>
          <span className="text-[11px] text-[#71717A] font-mono">(24)</span>
        </div>
        <ul className="space-y-2">
          {footerData.topDevelopers.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/developers"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F1192C] hover:text-white mt-4 transition-colors"
        >
          <span>Explore All Developers</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Prime Locations + Tools */}
      <div className="lg:col-span-2 space-y-8">
        <div>
          <h3 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
            Prime Locations
          </h3>
          <ul className="space-y-2">
            {footerData.primeLocations.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
            Tools & Services
          </h3>
          <ul className="space-y-2">
            {footerData.toolsAndServices.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}