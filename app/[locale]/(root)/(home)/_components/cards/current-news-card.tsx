import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { CarouselItem } from "@/components/ui/carousel";
import { ILastNews } from "@/types/service-type";

interface Props {
  item: ILastNews;
}

const CurrentNewsCard = ({ item }: Props) => {
  return (
    <CarouselItem className="group my-2 flex cursor-pointer items-center justify-start gap-3 rounded-xl bg-white p-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:basis-1/1 md:basis-1/3 lg:basis-1/4 dark:bg-zinc-900">
      <div className="relative h-20 w-28 overflow-hidden rounded-md">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex-1">
        <p className="group-hover:text-primary line-clamp-2 text-sm font-semibold text-zinc-800 transition-colors duration-300 dark:text-zinc-100">
          {item.title}
        </p>
        <Badge
          className="dark:text-foreground border-primary border text-xs"
          variant={"secondary"}
        >
          {item.category}
        </Badge>
      </div>
    </CarouselItem>
  );
};

export default CurrentNewsCard;
