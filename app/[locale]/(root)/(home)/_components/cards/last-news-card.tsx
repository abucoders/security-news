"use client";

import { format } from "date-fns";
import { LucideChartBarDecreasing } from "lucide-react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useState } from "react";
import striptags from "striptags";

import { Badge } from "@/components/ui/badge";
import { getLocalizedValue } from "@/lib/utils";
import { INews } from "@/types/service-type";

interface Props {
  item: INews;
  large?: boolean;
}

const LastNewsCard = ({ item, large = false }: Props) => {
  const [loaded, setLoaded] = useState(false);
  const locale = useLocale();

  return (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg ${
        large && "col-span-2 row-span-2"
      }`}
    >
      <div className="group relative h-full w-full overflow-hidden">
        {!loaded && (
          <div className="bg-muted-foreground absolute inset-0 z-10 animate-pulse" />
        )}

        <Image
          src={item.image.url}
          alt={getLocalizedValue(item, "title", locale)}
          fill
          className={`object-cover transition duration-700 ease-out group-hover:scale-105 ${loaded ? "blur-0 opacity-100" : "opacity-0 blur-lg"}`}
          onLoadingComplete={() => setLoaded(true)}
        />
      </div>
      <div className="absolute inset-0 z-10 bg-black/30"></div>

      <div className="absolute right-4 bottom-4 left-4 z-10 text-white">
        <Badge className="text-white md:text-sm" variant={"destructive"}>
          <LucideChartBarDecreasing /> {item.categories[0]?.title}
        </Badge>
        <h2
          className={`mt-2 text-base font-bold ${
            large
              ? "line-clamp-2 md:text-2xl lg:text-3xl"
              : "line-clamp-1 md:text-lg"
          }`}
        >
          {getLocalizedValue(item, "title", locale)}
        </h2>
        {large && item.descriptionUz.html && (
          <p className="mt-2 line-clamp-2 text-sm opacity-90 md:text-base">
            {striptags(getLocalizedValue(item, "description", locale).html)}
          </p>
        )}
        <div className="mt-3 flex items-center gap-2 text-sm">
          <span>{format(item.createdAt, "dd/MM/yyyy")}</span>
        </div>
      </div>
    </div>
  );
};

export default LastNewsCard;
