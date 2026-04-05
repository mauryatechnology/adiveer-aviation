"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.jpeg";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface DropdownProps {
  item: {
    title: string;
    href: string;
    items?: { title: string; href: string }[];
  };
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  scrolled: boolean;
}

const NavDropdown = ({ item, isOpen, onToggle, onClose, scrolled }: DropdownProps) => (
  <div className="relative group" onMouseEnter={onToggle} onMouseLeave={onClose}>
    <button 
      className={cn(
        "flex items-center gap-1 text-sm font-medium transition-colors py-2",
        scrolled 
          ? "text-primary-foreground/80 hover:text-primary-foreground" 
          : "text-foreground/80 hover:text-primary"
      )}
    >
      {item.title}
      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", isOpen && "rotate-180")} />
    </button>
    {isOpen && item.items && (
      <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-lg p-2 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
        {item.items.map((subItem) => (
          <Link
            key={subItem.href}
            href={subItem.href}
            className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-muted rounded-md transition-colors"
            onClick={onClose}
          >
            {subItem.title}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 lg:h-20 flex items-center",
        scrolled 
          ? "bg-primary shadow-lg border-b border-primary/20" 
          : "bg-card/95 backdrop-blur-md border-b border-border"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src={logo} 
            alt="AdiVeer Aviations" 
            width={40} 
            height={40} 
            className="h-10 w-10 rounded-md object-cover" 
          />
          <span className="font-heading font-bold text-lg tracking-tight">
            <span className={scrolled ? "text-primary-foreground" : "text-foreground"}>AdiVeer</span>
            <span className={scrolled ? "text-primary-foreground/80" : "text-primary"}> Aviations</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {siteConfig.mainNav.map((item) => (
            item.items ? (
              <NavDropdown
                key={item.title}
                item={item}
                isOpen={openDropdown === item.title}
                onToggle={() => setOpenDropdown(item.title)}
                onClose={() => setOpenDropdown(null)}
                scrolled={scrolled}
              />
            ) : (
              <Link 
                key={item.title}
                href={item.href} 
                className={cn(
                  "text-sm font-medium transition-colors py-2",
                  scrolled 
                    ? "text-primary-foreground/80 hover:text-primary-foreground" 
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.title}
              </Link>
            )
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link 
            href="/contact" 
            className={cn(
              "px-5 py-2.5 font-heading font-semibold text-sm rounded-lg transition-all",
              scrolled 
                ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" 
                : "bg-primary text-primary-foreground hover:bg-primary/85 shadow-md"
            )}
          >
            Contact Us →
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            className={scrolled ? "text-primary-foreground" : "text-foreground"} 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl z-40 overflow-y-auto">
          <div className="container mx-auto px-6 py-8 space-y-4">
            {siteConfig.mainNav.map((item) => (
              <div key={item.title} className="border-b border-border">
                {item.items ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                      className="flex items-center justify-between w-full text-lg font-heading font-semibold text-foreground py-3"
                    >
                      {item.title}
                      <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === item.title && "rotate-180")} />
                    </button>
                    {openDropdown === item.title && (
                      <div className="pb-3 pl-4 space-y-2">
                        {item.items.map((subItem) => (
                          <Link 
                            key={subItem.href} 
                            href={subItem.href} 
                            className="block text-sm text-muted-foreground hover:text-primary py-1.5"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    href={item.href} 
                    className="block text-lg font-heading font-semibold text-foreground py-3"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              href="/contact" 
              className="block mt-6 text-center px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-lg shadow-lg"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
