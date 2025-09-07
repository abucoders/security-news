import { motion } from "framer-motion";
import Image from "next/image";

import { ILastNews } from "@/types/service-type";

import { Badge } from "../ui/badge";

interface Props {
  post: ILastNews;
  index: number;
}

const NewsCard = ({ post, index }: Props) => {
  const onNavigate = () => {
    window.location.href = `/news/${post.id}`;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="cursor-pointer overflow-hidden rounded-xl border shadow-sm transition hover:shadow-lg"
      onClick={onNavigate}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge
          className="absolute bottom-3 left-3 text-xs text-white"
          variant="destructive"
        >
          {post.category}
        </Badge>
      </div>

      <div className="p-4">
        <h3 className="hover:text-primary text-foreground font-spaceGrotesk line-clamp-2 text-base font-bold transition">
          {post.title}
        </h3>

        <div className="text-muted-foreground mt-2 text-xs">
          <span>{post.date}</span>
        </div>

        <p className="text-foreground/75 mt-3 line-clamp-2 text-sm">
          {post.description}
        </p>
      </div>
    </motion.article>
  );
};

export default NewsCard;
