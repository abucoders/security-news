"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import Logo from "@/components/shared/logo";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { categories, navLinks } from "@/constants";

function Footer() {
  const t = useTranslations();

  return (
    <div className="bg-secondary mt-12 border-t px-2 pt-12 max-md:px-4">
      <div className="container mx-auto max-w-7xl pb-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col space-y-3 md:col-span-2">
            <Logo />
            <p>{t("Footer.description")}</p>
          </div>

          <div className="flex flex-col">
            <h1 className="font-spaceGrotesk text-3xl">{t("Footer.pages")}</h1>
            <div className="flex flex-col gap-1 pt-6">
              {navLinks.map((item) => (
                <Link
                  key={item.route}
                  href={`/${item.route}`}
                  className="hover:text-primary text-muted-foreground font-medium transition-all hover:underline"
                >
                  {t(`NavbarLink.${item.name}`)}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-spaceGrotesk text-3xl">{t("categories")}</h1>
            <div className="flex flex-wrap gap-1 pt-6">
              {categories.slice(-5).map((item) => (
                <Badge
                  key={item.name}
                  className="cursor-pointer px-3 py-1 text-white"
                >
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12">
          <Separator className="bg-muted-foreground mb-3 dark:bg-gray-500" />
          <p className="text-muted-foreground flex items-center justify-center">
            © {new Date().getFullYear()} - {t("Footer.copyright")}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
