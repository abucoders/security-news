"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { getLocalizedValue, cn } from "@/lib/utils";
import { INews } from "@/types/service-type";

interface Props {
  item: INews;
}

const CurrentNewsCard = ({ item }: Props) => {
  const locale = useLocale();

  return (
    // <CarouselItem className="sm:basis-1/1 md:basis-1/3 lg:basis-1/4">
    <Link
      href={`/news/${item.slug}`}
      className={cn(
        "group relative flex h-full cursor-pointer items-center justify-start gap-3 rounded-xl border p-3 transition-all duration-300",
        "bg-white hover:bg-gray-50 dark:bg-zinc-900 dark:hover:bg-zinc-800",
        "border-zinc-200 hover:shadow-lg dark:border-zinc-800",
      )}
    >
      {/* Image */}
      <div className="relative h-20 w-28 overflow-hidden rounded-md">
        <Image
          src={item.image.url}
          alt={getLocalizedValue(item, "title", locale)}
          fill
          sizes="(max-width: 768px) 100vw, 200px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />
      </div>

      {/* Text & Category */}
      <div className="flex flex-1 flex-col justify-between">
        <p
          className={cn(
            "line-clamp-2 text-sm leading-snug font-semibold transition-colors duration-300",
            "group-hover:text-primary text-zinc-800 dark:text-zinc-100",
          )}
        >
          {getLocalizedValue(item, "title", locale)}
        </p>

        {item.categories?.[0]?.title && (
          <Badge
            variant="secondary"
            className="dark:text-foreground mt-2 w-fit px-2 py-0.5 text-[11px] font-medium"
          >
            {item.categories[0].title}
          </Badge>
        )}
      </div>
    </Link>
    // </CarouselItem>
  );
};

export default CurrentNewsCard;
