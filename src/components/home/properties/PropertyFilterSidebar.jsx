

'use client';

import { Check, RotateCcw, SlidersHorizontal } from 'lucide-react';

const BHK_OPTIONS = ['All', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'];
const PROPERTY_TYPES = ['All Types', 'Apartment', 'Independent Villa', 'Penthouse', 'Builder Floor'];
const STATUS_OPTIONS = ['All Status', 'Ready to Move', 'Under Construction'];

export default function PropertyFilterSidebar({
  filters,
  setFilters,
  onReset,
  totalResults
}) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-xs space-y-6">
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-[#e11924]" />
          <h3 className="text-sm font-bold tracking-tight text-neutral-900 uppercase">Filters</h3>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-500 hover:text-[#e11924] transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset All</span>
        </button>
      </div>

      {/* Verified Switch */}
      <div className="flex items-center justify-between py-1">
        <div>
          <span className="text-xs font-bold text-neutral-900 block">Verified Only</span>
          <span className="text-[11px] text-neutral-500">RERA & legally audited</span>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={filters.verifiedOnly}
          onClick={() => setFilters(prev => ({ ...prev, verifiedOnly: !prev.verifiedOnly }))}
          className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
            filters.verifiedOnly ? 'bg-[#e11924]' : 'bg-neutral-200'
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition duration-200 ${
              filters.verifiedOnly ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {/* Max Budget Slider */}
      <div className="space-y-2.5 pt-2 border-t border-neutral-100">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-neutral-800">Max Budget</span>
          <span className="font-bold text-[#e11924]">Up to ₹ {filters.maxPrice} Cr</span>
        </div>
        <input
          type="range"
          min="1"
          max="20"
          step="0.5"
          value={filters.maxPrice}
          onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: parseFloat(e.target.value) }))}
          className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#e11924]"
        />
        <div className="flex justify-between text-[10px] text-neutral-400 font-medium">
          <span>₹ 1 Cr</span>
          <span>₹ 10 Cr</span>
          <span>₹ 20 Cr+</span>
        </div>
      </div>

      {/* BHK Configs */}
      <div className="space-y-2.5 pt-2 border-t border-neutral-100">
        <label className="text-xs font-bold text-neutral-900 block">BHK Configuration</label>
        <div className="flex flex-wrap gap-1.5">
          {BHK_OPTIONS.map((bhk) => {
            const isSelected = filters.bhk === bhk;
            return (
              <button
                key={bhk}
                type="button"
                onClick={() => setFilters(prev => ({ ...prev, bhk }))}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#e11924] text-white shadow-xs'
                    : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border border-neutral-200/60'
                }`}
              >
                {bhk}
              </button>
            );
          })}
        </div>
      </div>

      {/* Property Type */}
      <div className="space-y-2 pt-2 border-t border-neutral-100">
        <label className="text-xs font-bold text-neutral-900 block">Property Type</label>
        <div className="space-y-1.5">
          {PROPERTY_TYPES.map((type) => {
            const isChecked = filters.propertyType === type;
            return (
              <label
                key={type}
                className="flex items-center gap-2.5 text-xs text-neutral-700 cursor-pointer select-none py-1 hover:text-neutral-900"
              >
                <input
                  type="radio"
                  name="propertyType"
                  checked={isChecked}
                  onChange={() => setFilters(prev => ({ ...prev, propertyType: type }))}
                  className="hidden"
                />
                <span className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                  isChecked ? 'bg-[#e11924] border-[#e11924] text-white' : 'border-neutral-300 bg-white'
                }`}>
                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                </span>
                <span>{type}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Possession Status */}
      <div className="space-y-2 pt-2 border-t border-neutral-100">
        <label className="text-xs font-bold text-neutral-900 block">Possession Status</label>
        <div className="space-y-1.5">
          {STATUS_OPTIONS.map((status) => {
            const isChecked = filters.possessionStatus === status;
            return (
              <label
                key={status}
                className="flex items-center gap-2.5 text-xs text-neutral-700 cursor-pointer select-none py-1 hover:text-neutral-900"
              >
                <input
                  type="radio"
                  name="possessionStatus"
                  checked={isChecked}
                  onChange={() => setFilters(prev => ({ ...prev, possessionStatus: status }))}
                  className="hidden"
                />
                <span className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                  isChecked ? 'bg-[#e11924] border-[#e11924] text-white' : 'border-neutral-300 bg-white'
                }`}>
                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                </span>
                <span>{status}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Filter Stats Badge */}
      <div className="p-3 bg-neutral-50 rounded-xl text-center border border-neutral-200/50">
        <span className="text-xs text-neutral-500">Showing</span>
        <span className="text-xs font-bold text-neutral-900 ml-1">{totalResults} Properties</span>
      </div>

    </div>
  );
}