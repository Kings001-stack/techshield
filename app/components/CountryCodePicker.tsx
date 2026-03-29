"use client";

import { useState, useRef, useEffect } from "react";
import { countries } from "@/lib/countries";

interface CountryCodePickerProps {
  value: string; // ISO Code (e.g. 'NG')
  onChange: (country: any) => void;
}

export default function CountryCodePicker({
  value,
  onChange,
}: CountryCodePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedCountry =
    countries.find((c) => c.code === value) ||
    countries.find((c) => c.code === "NG")!;

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dial_code.includes(searchQuery),
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Focus search input when dropdown opens
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (country: any) => {
    onChange(country);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="relative h-full flex items-stretch" ref={dropdownRef}>
      {/* Selected Country Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-32 flex items-center justify-between gap-1 cursor-pointer hover:border-outline transition-all h-full px-3 border-1.5 border-outline-variant border-r-0 rounded-l-md bg-surface-container-low hover:bg-white group"
      >
        <div className="flex items-center gap-2">
          <img 
            src={`https://flagsapi.com/${selectedCountry.code}/flat/32.png`} 
            alt={selectedCountry.code}
            className="w-5 h-auto shrink-0"
          />
          <span className="text-[13px] font-bold text-primary shrink-0">
            {selectedCountry.dial_code}
          </span>
        </div>
        <span
          className={`material-symbols-outlined text-base transition-transform duration-300 text-on-surface-variant flex items-center justify-center h-full ${isOpen ? "rotate-180" : ""}`}
        >
          expand_more
        </span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-surface rounded-lg shadow-2xl border border-outline-variant/20 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Search Input */}
          <div className="p-3 border-b border-outline-variant/10 bg-surface-container-low">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                search
              </span>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country or code..."
                className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant/20 rounded-lg text-sm focus:outline-none focus:border-tertiary transition-colors"
              />
            </div>
          </div>

          {/* Country List */}
          <div className="max-h-64 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleSelect(country)}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-container-high transition-colors text-left ${
                    country.code === value ? "bg-primary/10" : ""
                  }`}
                >
                  <img 
                    src={`https://flagsapi.com/${country.code}/flat/32.png`} 
                    alt={country.code}
                    className="w-6 h-auto"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-on-surface truncate">
                      {country.name}
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      {country.dial_code}
                    </div>
                  </div>
                  {country.dial_code === value && (
                    <span className="material-symbols-outlined text-primary text-lg">
                      check_circle
                    </span>
                  )}
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-on-surface-variant text-sm">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
