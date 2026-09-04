'use client';

import { useState } from 'react';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription API integration
    setEmail('');
  };

  return (
    <div className="py-10 border-y border-[#27272A]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="max-w-md">
          <h3 className="text-lg font-medium text-white tracking-tight">
            Get property updates in your inbox
          </h3>
          <p className="mt-1 text-sm text-[#A1A1AA]">
            Receive new property listings, market insights and useful real-estate updates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full lg:max-w-md">
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-[#09090b] text-sm text-white placeholder-[#71717A] border border-[#27272A] rounded-full focus:outline-none focus:border-[#F1192C] focus:ring-1 focus:ring-[#F1192C] transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full text-sm font-medium text-white bg-[#F1192C] hover:bg-[#d81425] shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#F1192C]"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}