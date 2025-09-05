"use client";

import { useTranslations } from "next-intl";

import NewsCard from "@/components/cards/news-card";
import PopularPostCard from "@/components/cards/popular-post-card";
import { categories, newsPosts } from "@/constants";

const TodaysTopNews = () => {
  const t = useTranslations();

  return (
    <div className="container mx-auto max-w-7xl px-2 py-12">
      <h2 className="font-spaceGrotesk border-primary/70 inline-block border-b-2 pb-1 text-3xl font-bold">
        {t("todaysTopNews")}
      </h2>

      <div className="grid grid-cols-3 gap-6 pt-10">
        {/* LEFT SIDE */}
        <div className="col-span-2 grid gap-3 max-lg:col-span-3 md:grid-cols-2 lg:grid-cols-3">
          {newsPosts.slice(0, 6).map((post, index) => (
            <NewsCard key={post.id} index={index} post={post} />
          ))}
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
                  key={topic.name}
                  className="hover:text-primary/85 flex justify-between transition"
                >
                  <span>{topic.name}</span>
                  <span className="text-muted-foreground">({topic.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Post */}
          <div className="rounded-xl border p-5 shadow-sm">
            <h3 className="border-primary/70 mb-4 border-b-2 pb-2 text-lg font-bold">
              {t("popularPost")}
            </h3>
            <div className="flex flex-col gap-3">
              {newsPosts.slice(0, 4).map((item) => (
                <PopularPostCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysTopNews;
