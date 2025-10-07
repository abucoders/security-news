"use client";

import { motion } from "framer-motion";
import { MoveRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import NewsCard from "@/components/cards/news-card";
import PopularPostCard from "@/components/cards/popular-post-card";
import { Marquee } from "@/components/ui/marquee";
import { getBlogs } from "@/service/blog.service";
import { getCategories } from "@/service/categorie.service";
import { ICategorie, INews } from "@/types/service-type";

const TodaysTopNews = () => {
  const t = useTranslations();

  const [newsPosts, setNewsPosts] = useState<INews[]>([]);
  const [categories, setCategories] = useState<ICategorie[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setNewsPosts(data);

      const categoriesData = await getCategories();
      setCategories(categoriesData);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto max-w-7xl px-2 py-12">
      <h2 className="font-spaceGrotesk border-primary/70 inline-block border-b-2 pb-1 text-3xl font-bold">
        {t("todaysTopNews")}
      </h2>

      <div className="grid grid-cols-3 gap-6 pt-10">
        {/* LEFT SIDE */}
        <div className="col-span-2 grid gap-3 max-lg:col-span-3 md:grid-cols-2 lg:grid-cols-3">
          {newsPosts.slice(0, 8).map((post, index) => (
            <NewsCard key={post.id} index={index} post={post} />
          ))}

          {newsPosts.length >= 9 && (
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 8 * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center rounded-2xl border"
            >
              <div className="max-md:p-3">
                <p className="flex size-9 cursor-pointer items-center justify-center rounded-full border">
                  <MoveRightIcon className="transform animate-pulse" />
                </p>
              </div>
            </motion.article>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-1 space-y-8 max-lg:col-span-3">
          {/*  Categories */}
          <div className="rounded-xl border p-5 shadow-sm">
            <h3 className="border-primary/75 mb-4 border-b-2 pb-2 text-lg font-bold">
              {t("categories")}
            </h3>
            <ul className="text-foreground space-y-3 text-sm">
              {categories.map((topic) => (
                <li
                  key={topic.id}
                  className="hover:text-primary/85 flex justify-between transition"
                >
                  <span className="capitalize">{topic.title}</span>
                  <span className="text-muted-foreground">
                    ({topic.news.length})
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Post */}
          <div className="rounded-xl border p-5 shadow-sm">
            <h3 className="border-primary/70 mb-4 border-b-2 pb-2 text-lg font-bold">
              {t("popularPost")}
            </h3>


            <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
              <Marquee pauseOnHover vertical className="[--duration:20s]">
                {newsPosts.slice(0, 6).map((item) => (
                  <PopularPostCard key={item.id} item={item} />
                ))}
              </Marquee>

              {/* <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div> */}
              <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysTopNews;
