"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Program",
    children: [
      { label: "Vocational Training", href: "/vocational-training" },
      { label: "Digital Training", href: "/training" },
    ],
  },
  { label: "Founder Visit", href: "/founder-visit" },
  { label: "Partners", href: "/partners" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  
  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/oldlogo.jpeg"
              alt="HopeHarbor"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </Link>

          {/* ✅ DESKTOP NAV (HOVER BASED) */}
		  <div className="hidden md:flex items-center gap-8">
		  {navItems.map((item) =>
			item.children ? (
			  <div key={item.label} className="relative">
				<button
				  onClick={() =>
					setDesktopDropdown(
					  desktopDropdown === item.label ? null : item.label
					)
				  }
				  className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
				>
				  {item.label} ▾
				</button>

				{desktopDropdown === item.label && (
				  <div className="absolute left-0 top-full mt-2 w-max min-w-[200px] bg-white border rounded-lg shadow-lg z-50 whitespace-nowrap p-2">
					{item.children.map((child) => (
					  <Link
						key={child.label}
						href={child.href}
						className="block px-4 py-3 text-gray-600 hover:bg-gray-100"
						onClick={() => setDesktopDropdown(null)}
					  >
						{child.label}
					  </Link>
					))}
				  </div>
				)}
			  </div>
			) : (
			  <Link
				key={item.label}
				href={item.href}
				className="text-gray-600 hover:text-gray-900"
			  >
				{item.label}
			  </Link>
			)
		  )}
		</div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-[#B5D858]">
              <Link href="/donate">DONATE</Link>
            </Button>

            <Button asChild className="bg-[#59B7E7] text-white">
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </nav>
      </div>

      {/* ✅ MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4">

          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => toggleMobileDropdown(item.label)}
                  className="w-full text-left text-lg font-medium"
                >
                  {item.label} ▾
                </button>

                {mobileDropdown === item.label && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-gray-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg"
              >
                {item.label}
              </Link>
            )
          )}

          {/* Mobile Buttons */}
          <div className="pt-4 space-y-3">
            <Button asChild className="w-full bg-[#B5D858]">
              <Link href="/donate">DONATE</Link>
            </Button>

            <Button asChild className="w-full bg-[#59B7E7] text-white">
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}