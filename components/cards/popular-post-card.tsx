import { format } from "date-fns";
import Image from "next/image";
import { useLocale } from "next-intl";

import { cn, getLocalizedValue } from "@/lib/utils";
import { INews } from "@/types/service-type";

interface Props {
  item: INews;
}

const PopularPostCard = ({ item }: Props) => {
  const onNavigate = () => {
    window.location.href = `/news/${item.slug}`;
  };

  const locale = useLocale();
  return (
    <div
      key={item.id}
      className={cn(
        "group relative flex h-full cursor-pointer items-start gap-3 overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
      onClick={onNavigate}
    >
      <Image
        src={item.image.url}
        alt={getLocalizedValue(item, "title", locale)}
        width={80}
        height={60}
        className="rounded-md object-cover"
      />
      <div>
        <p className="text-foreground group-hover:text-primary line-clamp-1 text-sm font-semibold transition">
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
