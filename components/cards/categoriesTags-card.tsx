import { Layers, Tag } from "lucide-react";
import Link from "next/link";

import { CategorieTag } from "@/types/service-type";

interface Props extends CategorieTag {
  type: "categories" | "tags";
}

const CategoriesTagsCard = ({ slug, title, type }: Props) => {
  return (
    <Link
      href={`/${type}/${slug}`}
      className="bg-secondary flex items-center justify-center gap-4 rounded-md p-4 shadow-xl md:p-8"
    >
      {type === "categories" ? <Layers /> : <Tag />}
      <h1 className="font-creteRound text-2xl">{title}</h1>
    </Link>
  );
};

export default CategoriesTagsCard;
