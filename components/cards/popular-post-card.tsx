import Image from "next/image";

import { ILastNews } from "@/types/service-type";

interface Props {
  item: ILastNews;
}

const PopularPostCard = ({ item }: Props) => {
  return (
    <div key={item.id} className="flex items-start gap-3">
      <Image
        src={item.image}
        alt={item.title}
        width={80}
        height={60}
        className="rounded-md object-cover"
      />
      <div>
        <p className="text-foreground hover:text-primary line-clamp-1 text-sm font-semibold transition">
          {item.title}
        </p>
        <span className="text-muted-foreground text-xs">{item.date}</span>
      </div>
    </div>
  );
};

export default PopularPostCard;
