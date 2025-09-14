import { format } from "date-fns";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getLocalizedValue } from "@/lib/utils";
import { INews } from "@/types/service-type";

interface Props {
  item: INews;
}

const PopularPostCard = ({ item }: Props) => {
  const locale = useLocale();

  return (
    <div key={item.id} className="flex items-start gap-3">
      <Image
        src={item.image.url}
        alt={getLocalizedValue(item, "title", locale)}
        width={80}
        height={60}
        className="rounded-md object-cover"
      />
      <div>
        <p className="text-foreground hover:text-primary line-clamp-1 text-sm font-semibold transition">
          {getLocalizedValue(item, "title", locale)}
        </p>
        <span className="text-muted-foreground text-xs">
          {format(item.createdAt, "dd/MM/yyyy")}
        </span>
      </div>
    </div>
  );
};

export default PopularPostCard;
