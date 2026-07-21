"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "About Us", 
    children: [
      { label: " Direct Impact Empowerment", href: "/about" },
    ]
  },
  {
    label: "Our Programs",
    children: [
      { label: "Vocational Training", href: "/vocational-training" },
      { label: "Digital Training", href: "/training" },
    ],
  },
  { label: "GlobalGiving", href: "/globalgiving" }, // Added GlobalGiving here
  { label: "Founder Visit", href: "/founder-visit" },
  { label: "Partners", href: "/partners" },
];

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-24">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center transition-transform hover:scale-105">
            <Image
              src="/dimpact-logo.jpeg"
              alt="Direct Impact"
              width={100}
              height={100}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) =>
              item.children ? (
                <div 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={() => setDesktopDropdown(item.label)}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  <button className="text-gray-600 hover:text-[#7B1E1E] flex items-center gap-1 text-[15px] font-medium transition-colors py-2">
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${desktopDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>

                  {desktopDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-2 w-56 animate-in fade-in slide-in-from-top-2">
                      <div className="bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-600 hover:bg-[#7B1E1E]/5 hover:text-[#7B1E1E] rounded-lg transition-colors"
                            onClick={() => setDesktopDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-[#7B1E1E] text-[15px] font-medium transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/donate"
              className="bg-[#7B1E1E] text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-[#5a1616] transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              DONATE
            </Link>

            <Link 
              href="/volunteer"
              className="bg-[#59B7E7] text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-[#4895bc] transition-all shadow-md active:scale-95"
            >
              VOLUNTEER
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <div className="p-6 space-y-6">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50 pb-4 last:border-0">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
                    >
                      {item.label}
                      <svg className={`w-5 h-5 transition-transform ${mobileDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {mobileDropdown === item.label && (
                      <div className="mt-4 ml-4 flex flex-col gap-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-500 hover:text-[#7B1E1E]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-medium text-gray-800"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-4 pt-4">
              <Link 
                href="/donate"
                className="w-full bg-[#7B1E1E] text-white text-center py-4 rounded-xl font-bold tracking-widest shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                DONATE NOW
              </Link>
              <Link 
                href="/volunteer"
                className="w-full bg-[#59B7E7] text-white text-center py-4 rounded-xl font-bold tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BECOME A VOLUNTEER
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}