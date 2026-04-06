"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MoveRight, Landmark } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

const NavDropdown = ({ item, isOpen, onToggle, onClose, scrolled, pathname }: DropdownProps & { pathname: string }) => {
  const isActive = pathname === item.href || item.items?.some(sub => pathname === sub.href);
  
  return (
    <div className="relative group" onMouseEnter={onToggle} onMouseLeave={onClose}>
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1.5 text-sm font-medium transition-all py-2 outline-none focus-visible:text-primary",
          scrolled 
            ? "text-primary-foreground/75 hover:text-primary-foreground h-full" 
            : isActive 
              ? "text-primary font-bold" 
              : "text-foreground/80 hover:text-primary"
        )}
      >
        {item.title}
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isOpen && "rotate-180")} />
      </Link>
      
      <AnimatePresence>
        {isOpen && item.items && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl p-3 shadow-2xl z-50 ring-1 ring-black/5"
          >
            <div className="grid gap-1">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={cn(
                    "block px-4 py-2.5 text-sm rounded-lg transition-all",
                    pathname === subItem.href 
                      ? "bg-primary/10 text-primary font-semibold" 
                      : "text-foreground/70 hover:text-primary hover:bg-muted"
                  )}
                  onClick={onClose}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
    <>
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
            alt="Adiveer Aviation" 
            width={40} 
            height={40} 
            className="h-10 w-10 rounded-md object-cover" 
          />
          <span className="font-heading font-bold text-lg tracking-tight">
            <span className={scrolled ? "text-primary-foreground" : "text-foreground"}>Adiveer</span>
            <span className={scrolled ? "text-primary-foreground/80" : "text-primary"}> Aviation</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {siteConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return item.items ? (
              <NavDropdown
                key={item.title}
                item={item}
                isOpen={openDropdown === item.title}
                onToggle={() => setOpenDropdown(item.title)}
                onClose={() => setOpenDropdown(null)}
                scrolled={scrolled}
                pathname={pathname}
              />
            ) : (
              <Link 
                key={item.title}
                href={item.href} 
                className={cn(
                  "text-sm font-medium transition-colors py-2 relative",
                  scrolled 
                    ? "text-primary-foreground/80 hover:text-primary-foreground font-semibold" 
                    : isActive 
                      ? "text-primary font-bold" 
                      : "text-foreground/80 hover:text-primary"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.title}
                {!scrolled && isActive && (
                  <motion.div 
                    layoutId="activeNav" 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" 
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link 
            href="/investors" 
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 font-heading font-black text-[10px] uppercase tracking-widest rounded-lg transition-all",
              scrolled 
                ? "text-primary-foreground/90 hover:text-white border border-primary-foreground/30" 
                : "text-primary hover:text-primary/80 border border-primary/20"
            )}
          >
            <Landmark className="w-3.5 h-3.5" />
            Investor Enquiry
          </Link>
          <Link 
            href="/contact" 
            className={cn(
              "px-5 py-2.5 font-heading font-black text-[10px] uppercase tracking-widest rounded-lg transition-all",
              scrolled 
                ? "bg-primary-foreground text-primary hover:bg-white" 
                : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20"
            )}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            className={cn(
              "p-2 rounded-lg transition-colors",
              scrolled ? "text-primary-foreground" : "text-foreground"
            )} 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

    </nav>

    <AnimatePresence>
      {mobileOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] cursor-pointer"
          />

          {/* Right-side Drawer */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed top-0 right-0 bottom-0 w-[85vw] md:w-[60vw] bg-background z-[100] border-l border-border shadow-2xl overflow-y-auto flex flex-col p-8"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <Image 
                  src={logo} 
                  alt="Adiveer Aviation" 
                  width={32} 
                  height={32} 
                  className="rounded-md object-cover" 
                />
                <span className="font-heading font-black text-xl tracking-tight text-primary">Adiveer</span>
              </div>
              <button 
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 space-y-6">
              {siteConfig.mainNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <div key={item.title} className="border-b border-border/40 last:border-0 pb-1">
                    {item.items ? (
                      <>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                          className={cn(
                            "flex items-center justify-between w-full text-xl font-heading font-black py-4 transition-colors tracking-tight text-left",
                            openDropdown === item.title ? "text-primary" : "text-foreground"
                          )}
                        >
                          {item.title}
                          <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", openDropdown === item.title && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.title && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-muted/30 rounded-2xl mb-4"
                            >
                              <div className="px-5 py-4 space-y-4">
                                {item.items.map((subItem) => (
                                  <Link 
                                    key={subItem.href} 
                                    href={subItem.href} 
                                    className={cn(
                                      "block text-lg font-medium transition-colors",
                                      pathname === subItem.href ? "text-primary font-extrabold" : "text-muted-foreground hover:text-foreground"
                                    )}
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {subItem.title}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link 
                        href={item.href} 
                        className={cn(
                          "block text-xl font-heading font-black py-4 transition-colors tracking-tight",
                          isActive ? "text-primary font-bold" : "text-foreground"
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-auto pt-10 grid gap-4">
              <Link 
                href="/investors" 
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-primary text-primary font-heading font-black uppercase tracking-widest text-xs rounded-2xl"
              >
                <Landmark className="w-5 h-5" /> Investor Enquiry
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-3 px-6 py-5 bg-primary text-primary-foreground font-heading font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl shadow-primary/30"
              >
                Get Started <MoveRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
