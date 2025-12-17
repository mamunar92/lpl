"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="/logo.png" alt="LPL" />
            </div>
            <span className="font-display text-xl font-bold text-primary">
              Lawyer's Premier League BD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/vision-mission"
              className="text-foreground hover:text-primary transition-colors"
            >
              Vision & Mission
            </Link>

            {/* Teams Dropdown */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Management
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/teams/management"
                  className="block px-4 py-2 hover:bg-muted text-foreground"
                >
                  Management Committee
                </Link>
                <Link
                  href="/teams/advisory"
                  className="block px-4 py-2 hover:bg-muted text-foreground"
                >
                  Our Advisory Panel
                </Link>
              </div>
            </div>

            <Link
              href="/tournaments"
              className="text-foreground hover:text-primary transition-colors"
            >
              Tournaments
            </Link>

            <Link
              href="/sponsor"
              className="text-foreground hover:text-primary transition-colors"
            >
              Sponsors
            </Link>

            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link
              href="/"
              className="block px-4 py-2 text-foreground hover:bg-muted"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-foreground hover:bg-muted"
            >
              About Us
            </Link>
            <Link
              href="/vision-mission"
              className="block px-4 py-2 text-foreground hover:bg-muted"
            >
              Vision & Mission
            </Link>

            {/* Mobile Teams Dropdown */}
            <button
              onClick={() => toggleDropdown("teams")}
              className="w-full text-left px-4 py-2 text-foreground hover:bg-muted flex justify-between items-center"
            >
              Management
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openDropdown === "teams" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "teams" && (
              <>
                <Link
                  href="/teams/management"
                  className="block px-8 py-2 text-foreground hover:bg-muted text-sm"
                >
                  Management Committee
                </Link>
                <Link
                  href="/teams/advisory"
                  className="block px-8 py-2 text-foreground hover:bg-muted text-sm"
                >
                  Advisory Panel
                </Link>
              </>
            )}

            <Link
              href="/tournaments"
              className="block px-4 py-2 text-foreground hover:bg-muted"
            >
              Tournaments
            </Link>

            <Link
              href="/sponsor"
              className="block px-4 py-2 text-foreground hover:bg-muted"
            >
              Sponsor
            </Link>

            <Link
              href="/contact"
              className="block px-4 py-2 text-foreground hover:bg-muted"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
