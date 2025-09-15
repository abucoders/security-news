"use client";

import { Languages } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { lngs } from "@/constants";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface Props {
  isMobile?: boolean;
}

export const LanguageDropdown = ({ isMobile }: Props) => {
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={isMobile ? "default" : "ghost"}
          size="icon"
          className={`${isMobile && "w-full text-white"} gap-2`}
        >
          <Languages />

          {isMobile && (
            <span className="font-spaceGrotesk text-sm font-medium">
              {t("cyrrentLng")}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {lngs.map((language) => (
            <Link
              key={language.route}
              href={`/${language.route}/${pathname.slice(4)}`}
            >
              <DropdownMenuItem
                className={cn(
                  "font-spaceGrotesk my-0.5 flex w-full font-medium",
                  locale === language.route && "bg-secondary",
                )}
              >
                <span>{language.label}</span>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
