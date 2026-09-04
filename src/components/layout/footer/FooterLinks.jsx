import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube,
  Building2
} from 'lucide-react';


import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const navigation = {
  explore: [
    { name: 'Buy Property', href: '/properties/buy' },
    { name: 'Rent Property', href: '/properties/rent' },
    { name: 'Sell Property', href: '/properties/sell' },
    { name: 'New Projects', href: '/projects/new' },
    { name: 'Residential Properties', href: '/properties/residential' },
    { name: 'Commercial Properties', href: '/properties/commercial' },
    { name: 'Plots & Land', href: '/properties/plots' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Why Choose Us', href: '/why-us' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Partner With Us', href: '/partner' },
  ],
  resources: [
    { name: 'Property Guide', href: '/guides/property' },
    { name: 'Home Buying Guide', href: '/guides/buying' },
    { name: 'Home Selling Guide', href: '/guides/selling' },
    { name: 'Investment Guide', href: '/guides/investment' },
    { name: 'Property Trends', href: '/trends' },
    { name: 'FAQs', href: '/faqs' },
  ],
  // social: [
  //   { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  //   { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  //   { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  //   { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
  // ],
  social: [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
  },
],
};

export default function FooterLinks() {
  return (
    <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
      {/* Brand Profile */}
      <div className="lg:col-span-4 flex flex-col justify-between">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="Atrium Homes Home">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-[#F1192C] text-white">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
              ATRIUM<span className="text-[#F1192C]">.</span>
            </span>
          </Link>
          
          <p className="mt-4 text-sm text-[#A1A1AA] leading-relaxed max-w-sm">
            Helping people find spaces worth calling home. Curating prime residential and commercial opportunities across India.
          </p>
        </div>

        <div className="mt-8">
          <p className="text-xs uppercase tracking-wider text-[#71717A] font-semibold mb-3">Connect With Us</p>
          <div className="flex items-center gap-3">
            {navigation.social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                  aria-label={item.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Explore Links */}
      <div className="lg:col-span-2">
        <p className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Explore</p>
        <ul className="space-y-2.5">
          {navigation.explore.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-150">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Company Links */}
      <div className="lg:col-span-2">
        <p className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Company</p>
        <ul className="space-y-2.5">
          {navigation.company.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-150">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Resources Links */}
      <div className="lg:col-span-2">
        <p className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Resources</p>
        <ul className="space-y-2.5">
          {navigation.resources.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-150">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Details */}
      <div className="lg:col-span-2">
        <p className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Office</p>
        <div className="space-y-3.5 text-sm text-[#A1A1AA]">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#F1192C] shrink-0 mt-0.5" />
            <span>Worli, Mumbai, Maharashtra 400018</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#F1192C] shrink-0" />
            <a href="tel:+919876543210" className="hover:text-white transition-colors">
              +91 98765 43210
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#F1192C] shrink-0" />
            <a href="mailto:hello@atriumhomes.com" className="hover:text-white transition-colors truncate">
              hello@atriumhomes.com
            </a>
          </div>
          <div className="flex items-start gap-2.5 pt-1">
            <Clock className="w-4 h-4 text-[#71717A] shrink-0 mt-0.5" />
            <div className="text-xs text-[#71717A] leading-relaxed">
              <span>Mon – Sat</span><br />
              <span>9:00 AM – 7:00 PM IST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}