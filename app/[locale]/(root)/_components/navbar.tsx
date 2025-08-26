import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { LanguageDropdown } from "@/components/shared/language-dropdown";
import Logo from "@/components/shared/logo";
import ModeToggle from "@/components/shared/mode-toggle";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";

import GlobalSearch from "./global-search";
import Mobile from "./mobile";

const Navbar = async () => {
  const t = await getTranslations("NavbarLink");

  return (
    <nav className="bg-background/70 fixed inset-0 z-50 h-20 px-2.5 backdrop-blur-xl">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between border-b">
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
              {/* Global Search */}
              <GlobalSearch />

              {/* Language Dropdown */}
              <LanguageDropdown />
            </div>

            {/* Mode Toggle */}
            <ModeToggle />

            {/* Mobile */}
            <Mobile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
