"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { LanguageDropdown } from "@/components/shared/language-dropdown";
import Logo from "@/components/shared/logo";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";

import GlobalSearch from "./global-search";
import Mobile from "./mobile";

const Navbar = () => {
  const t = useTranslations("NavbarLink");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll paytida navbarni o'zgartirish
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-3 z-50 flex w-full justify-center transition-all duration-500 ease-in-out",
        isScrolled ? "top-0 left-0 w-full" : "",
      )}
    >
      <div
        className={cn(
          "bg-background/70 from-background/50 to-primary/20 container flex h-20 w-7xl items-center justify-between rounded-xl border-b bg-gradient-to-r px-4 shadow-md backdrop-blur-xl transition-all duration-500 ease-in-out",
          isScrolled
            ? "bg-background/80 from-background/50 to-primary/20 w-full border-none bg-gradient-to-bl shadow-lg backdrop-blur-md"
            : "mx-auto",
        )}
      >
        <div className="flex items-center gap-4">
          <Logo />

          <div className="hidden items-center gap-3 border-l pl-2 lg:flex">
            {navLinks.map((nav) => (
              <Link
                key={nav.route}
                href={`/${nav.route}`}
                className={cn(
                  "hover:text-primary font-medium transition-all hover:underline",
                )}
              >
                {t(nav.name)}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="hidden lg:flex">
              <GlobalSearch />
              <LanguageDropdown />
            </div>
            {/* <ModeToggle /> */}
            <AnimatedThemeToggler duration={500} />
            <Mobile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
