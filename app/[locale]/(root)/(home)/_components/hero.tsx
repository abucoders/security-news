"use client";

import { Newspaper } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Marquee } from "@/components/ui/marquee";
import { getBlogs } from "@/service/blog.service";
import { INews } from "@/types/service-type";

import CurrentNewsCard from "./cards/current-news-card";
import LastNewsCard from "./cards/last-news-card";

const Hero = () => {
  const t = useTranslations("HeroPage");
  const [newsPosts, setNewsPosts] = useState<INews[]>([]);

  const [latestPosts, setLatestPosts] = useState(() => newsPosts.slice(0, 3));

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setNewsPosts(data);
      setLatestPosts(data.slice(0, 3));
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatestPosts(() => {
        const lastThree = [...newsPosts.slice(0, 3)];
        for (let i = lastThree.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [lastThree[i], lastThree[j]] = [lastThree[j], lastThree[i]];
        }
        return lastThree;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, [newsPosts]);

  return (
    <>
      <div className="container mx-auto grid min-h-[85vh] max-w-7xl gap-8 px-3 max-md:grid-cols-1 max-md:pt-32">
        <div className="flex flex-col space-y-4 self-center">
          <div className="grid auto-rows-[200px] gap-6 md:auto-rows-[300px] md:grid-cols-3">
            {latestPosts.slice(0, 1).map((item) => (
              <LastNewsCard key={item.id} item={item} large />
            ))}

            {latestPosts.slice(1, 3).map((item) => (
              <LastNewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-7 flex w-full flex-col items-center justify-center overflow-hidden py-7">
        <Marquee pauseOnHover className="[--duration:20s]">
          {newsPosts.map((review) => (
            <CurrentNewsCard key={review.id} item={review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {newsPosts.map((review) => (
            <CurrentNewsCard key={review.id} item={review} />
          ))}
        </Marquee>

        <div className="bg-primary absolute top-0 left-33 rounded-tl-md rounded-tr-md">
          <h3 className="flex items-center justify-center gap-2 px-4 text-base font-semibold text-white">
            <Newspaper className="size-4" /> <span>{t("currentNews")}</span>
          </h3>
        </div>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>

      {/* <div className="bg-secondary w-full px-4 max-md:mt-16 md:mt-10">
        <Carousel
          className="container mx-auto max-w-7xl"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[Autoplay({ delay: 5000 })]}
        >
          <div className="bg-primary absolute -top-6 left-0 rounded-tl-md rounded-tr-md">
            <h3 className="flex items-center justify-center gap-2 px-4 text-base font-semibold text-white">
              <Newspaper className="size-4" /> <span>{t("currentNews")}</span>
            </h3>
          </div>

          <CarouselContent className="relative gap-1">
            {newsPosts.slice(0, 8).map((item) => (
              <CurrentNewsCard key={item.id} item={item} />
            ))}
          </CarouselContent>
        </Carousel>
      </div> */}
    </>
  );
};

export default Hero;
