"use client";

import { LucideChartBarDecreasing } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { ILastNews } from "@/types/service-type";

interface Props extends ILastNews {
  large?: boolean;
}

const LastNewsCard = ({
  category,
  date,
  description,
  image,
  title,
  large = false,
}: Props) => {
  const [loaded, setLoaded] = useState(false);

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
          src={image}
          alt={title}
          fill
          className={`object-cover transition duration-700 ease-out group-hover:scale-105 ${loaded ? "blur-0 opacity-100" : "opacity-0 blur-lg"}`}
          onLoadingComplete={() => setLoaded(true)}
        />
      </div>
      <div className="absolute inset-0 z-10 bg-black/30"></div>

      <div className="absolute right-4 bottom-4 left-4 z-10 text-white">
        <Badge className="text-white md:text-sm" variant={"destructive"}>
          <LucideChartBarDecreasing /> {category}
        </Badge>
        <h2
          className={`mt-2 text-base font-bold ${
            large
              ? "line-clamp-2 md:text-2xl lg:text-3xl"
              : "line-clamp-1 md:text-lg"
          }`}
        >
          {title}
        </h2>
        {large && description && (
          <p className="mt-2 line-clamp-2 text-sm opacity-90 md:text-base">
            {description}
          </p>
        )}
        <div className="mt-3 flex items-center gap-2 text-sm">
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default LastNewsCard;
