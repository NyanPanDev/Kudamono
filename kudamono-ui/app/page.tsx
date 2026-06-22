"use client";

import { useState } from "react";
import Link from "next/link";

export default function LandingPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { name: "Explore", href: "/content/explore" },
  ];

  return (
    <div className="min-h-screen bg-green-100 text-slate-900 font-sans">
      
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold tracking-tight text-indigo-600">
                Kudamono
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                  className="inline-flex justify-center items-center w-full rounded-md border border-slate-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Browse Catalog
                  <svg className="-mr-1 ml-2 h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-slate-100 focus:outline-none animate-fadeIn">
                    <div className="py-1">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors shadow-sm">
                Sign In
              </button>
            </div>

          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Kudamono
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-10 leading-relaxed">
          est 2026
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => setIsDropdownOpen(true)}
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 shadow-md transition-colors"
          >
            Explore Items
          </button>
          <button className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 shadow-sm transition-colors">
            About
          </button>
        </div>
      </main>

    </div>
  );
}