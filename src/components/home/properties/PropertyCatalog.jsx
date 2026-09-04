

'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowUpDown, 
  Filter, 
  X, 
  SlidersHorizontal, 
  Home, 
  ArrowRight 
} from 'lucide-react';
import PropertyCardHorizontal from './PropertyCardHorizontal';
import PropertyFilterSidebar from './PropertyFilterSidebar';
import { INITIAL_PROPERTIES } from './propertiesData';

const HOMEPAGE_LIMIT = 4;

export default function PropertyCatalog() {
  const [sortBy, setSortBy] = useState('relevance');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    bhk: 'All',
    propertyType: 'All Types',
    possessionStatus: 'All Status',
    maxPrice: 20,
    verifiedOnly: false,
  });

  const handleResetFilters = () => {
    setFilters({
      bhk: 'All',
      propertyType: 'All Types',
      possessionStatus: 'All Status',
      maxPrice: 20,
      verifiedOnly: false,
    });
  };

  const filteredProperties = useMemo(() => {
    return INITIAL_PROPERTIES
      .filter((item) => {
        if (filters.bhk !== 'All') {
          if (filters.bhk === '5+ BHK') {
            if (parseInt(item.bhk, 10) < 5) return false;
          } else if (item.bhk !== filters.bhk) return false;
        }
        if (filters.propertyType !== 'All Types' && item.type !== filters.propertyType) return false;
        if (filters.possessionStatus !== 'All Status' && item.status !== filters.possessionStatus) return false;
        if (item.price > filters.maxPrice) return false;
        if (filters.verifiedOnly && !item.verified) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [filters, sortBy]);

  // Homepage par strictly fixed items show honge
  const displayedProperties = filteredProperties.slice(0, HOMEPAGE_LIMIT);

  return (
    <section className="w-full bg-[#f8f9fa] py-14 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-950 flex items-center gap-2">
              <Home className="w-6 h-6 text-[#e11924]" />
              <span>Verified Properties in Gurugram</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
              Showing top verified listings &middot; Explore complete collection below
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Sorting Dropdown */}
            <div className="flex items-center gap-1.5 bg-white border border-neutral-200/80 rounded-xl px-3 py-2 text-xs shadow-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
              <label htmlFor="sort-options" className="sr-only">Sort by</label>
              <select
                id="sort-options"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-semibold text-neutral-800 focus:outline-none cursor-pointer"
              >
                <option value="relevance">Sort: Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden inline-flex items-center gap-1.5 bg-[#e11924] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xs cursor-pointer"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Section Bounded Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Section Filter Sidebar (Fixed to content height) */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-xs">
              <PropertyFilterSidebar
                filters={filters}
                setFilters={setFilters}
                onReset={handleResetFilters}
                totalResults={filteredProperties.length}
              />
            </div>
          </div>

          {/* RIGHT: Limited Curated Feed + View All CTA */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-4">
            {displayedProperties.length > 0 ? (
              displayedProperties.map((property) => (
                <PropertyCardHorizontal key={property.id} property={property} />
              ))
            ) : (
              <div className="bg-white rounded-2xl border border-neutral-200 p-12 text-center">
                <SlidersHorizontal className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-neutral-800">No properties match your active filters</h3>
                <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
                  Try broadening your budget range or clearing BHK selections.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-4 px-5 py-2 rounded-xl bg-[#e11924] text-white text-xs font-semibold cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* View All Properties Bottom Banner */}
            {filteredProperties.length > 0 && (
              <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white rounded-2xl border border-neutral-200 shadow-xs">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    Want to see more options?
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Explore our complete directory of verified apartments, builder floors and luxury villas.
                  </p>
                </div>

                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#e11924] hover:bg-[#c9141f] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95 shrink-0"
                >
                  <span>View All Properties</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Mobile Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-xs lg:hidden">
          <div className="bg-white rounded-t-3xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#e11924]" />
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-tight">Filters</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <PropertyFilterSidebar
                filters={filters}
                setFilters={setFilters}
                onReset={handleResetFilters}
                totalResults={filteredProperties.length}
              />
            </div>

            <div className="p-4 bg-white border-t border-neutral-100 flex items-center gap-3">
              <button
                type="button"
                onClick={handleResetFilters}
                className="flex-1 py-3 text-xs font-bold text-neutral-600 rounded-xl border border-neutral-200 cursor-pointer"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-[2] py-3 text-xs font-bold text-white bg-[#e11924] rounded-xl cursor-pointer"
              >
                Apply ({filteredProperties.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}