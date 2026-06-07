"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Calendar } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Barber Shop", href: "/barber-shop" },
    { name: "Academy", href: "/academy" },
    // { name: "Gallery", href: "/gallery" },
    { name: "Liên hệ", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-[400ms] ease-out ${isScrolled
        ? "py-3"
        : "py-5"
        }`}
      style={{
        background: isScrolled ? "rgba(5, 5, 5, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--dark-700)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/graphics/logoson.png"
              alt="Sơn Barber Logo"
              width={50}
              height={50}
              className="drop-shadow-2xl"
              priority
            // style={{
            //   filter: isScrolled ? "invert(1) sepia(1) saturate(1500%) hue-rotate(25deg) brightness(100%) contrast(90%)" : "none",
            // }}
            />
            <span
              className="text-gradient-gold font-bold text-2xl"
              style={{
                fontFamily: 'Playfair Display',

              }}
            >
              Sơn Barber
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium uppercase tracking-[0.05em] transition-colors duration-[250ms] ease group hover:text-[var(--gold-400)]"
                style={{ color: "var(--dark-200)" }}
              >
                {link.name}
                {/* Gold underline on hover */}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gold-500 transition-all duration-[250ms] ease group-hover:w-full"></span>
              </Link>
            ))}
            <a
              href="https://booking.easysalon.vn/son-barbershop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-[250ms] ease hover:-translate-y-[2px]"
              style={{
                background: "linear-gradient(135deg, var(--gold-500), var(--gold-600))",
                color: "var(--dark-950)",
                padding: "10px 24px",
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-gold)",
              }}
            >
              Đặt lịch ngay
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="transition-colors duration-[150ms]"
              style={{ color: isMobileMenuOpen ? "var(--gold-400)" : "var(--dark-200)" }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-[400ms] ease-out ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        style={{
          background: "rgba(5, 5, 5, 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: isMobileMenuOpen ? "1px solid var(--dark-700)" : "none",
        }}
      >
        <div className="px-4 pt-2 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium uppercase tracking-[0.05em] transition-colors duration-[150ms] border-l-2 border-transparent hover:text-[var(--gold-400)] hover:border-l-[var(--gold-500)]"
              style={{ color: "var(--dark-200)" }}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://booking.easysalon.vn/son-barbershop"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 block text-center font-bold text-xl"
            style={{
              background: "linear-gradient(135deg, var(--gold-500), var(--gold-600))",
              color: "var(--dark-950)",
              padding: "12px",
              borderRadius: "var(--radius-md)",
            }}
          >
            <Calendar size={20} />
            Đặt lịh ngay?
          </a>
        </div>
      </div>
    </nav>
  );
}
