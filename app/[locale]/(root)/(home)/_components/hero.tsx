"use client";

import Autoplay from "embla-carousel-autoplay";
import { Newspaper } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { newsPosts } from "@/constants";

import CurrentNewsCard from "./cards/current-news-card";
import LastNewsCard from "./cards/last-news-card";

const Hero = () => {
  const t = useTranslations("HeroPage");

  const [latestPosts, setLatestPosts] = useState(() => newsPosts.slice(-3));

  useEffect(() => {
    const interval = setInterval(() => {
      setLatestPosts(() => {
        const lastThree = [...newsPosts.slice(-3)];
        for (let i = lastThree.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [lastThree[i], lastThree[j]] = [lastThree[j], lastThree[i]];
        }
        return lastThree;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container mx-auto grid min-h-[85vh] max-w-7xl gap-8 px-3 max-md:grid-cols-1 max-md:pt-32">
        <div className="flex flex-col space-y-4 self-center">
          <div className="grid auto-rows-[200px] gap-6 md:auto-rows-[300px] md:grid-cols-3">
            {latestPosts.slice(0, 1).map((item) => (
              <LastNewsCard key={item.id} {...item} large />
            ))}

            {latestPosts.slice(1, 3).map((item) => (
              <LastNewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-secondary w-full px-4 max-md:mt-16">
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
            {newsPosts.slice(-8).map((item) => (
              <CurrentNewsCard key={item.id} item={item} />
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
