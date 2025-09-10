import parse from "html-react-parser";
import { CalendarDays, Clock, Minus } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { getReadingTime } from "@/lib/utils";

import ShareBtns from "../../_components/share-btns";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  console.log(slug);
  const t = await getTranslations();

  const blog = {
    id: "120938",
    category: "Fashion",
    title: "What's In Tren In Women's Fashion Summer?",
    description:
      "<p></p><table><tbody><tr><td><h5><em><strong>Segment</strong></em></h5></td><td><h5><strong>Long-fruited</strong></h5></td></tr><tr><td><h5><em><strong>Purpose</strong></em></h5></td><td><h5><strong>For fresh consumption and processing</strong></h5></td></tr><tr><td><h5><em><strong>Precocity</strong></em></h5></td><td><h5><strong>Early ripening, 60-63 days after planting seedlings</strong></h5></td></tr><tr><td><h5><em><strong>Plant</strong></em></h5></td><td><h5><strong>Vigorous, open</strong></h5></td></tr><tr><td><h5><em><strong>Fruit</strong></em></h5></td><td><h5><strong>Elongated teardrop-shaped, with dense pulp</strong></h5></td></tr><tr><td><h5><em><strong>Color</strong></em></h5></td><td><h5><strong>Dark purple to black</strong></h5></td></tr><tr><td><h5><em><strong>Weight</strong></em></h5></td><td><h5><strong>200-250 g</strong></h5></td></tr><tr><td><h5><em><strong>Taste</strong></em></h5></td><td><h5><strong>Good</strong></h5></td></tr></tbody></table><p></p><blockquote><strong>ADVANTAGES</strong></blockquote><ul><li><div><strong>Early ripeness</strong></div></li><li><div><strong>Very high yield potential</strong></div></li><li><div><strong>Attractive fruits</strong></div></li><li><div><strong>Great for slicing</strong></div></li></ul><blockquote><strong>RECOMMENDATIONS FOR GROWING</strong></blockquote><ul><li><div><strong>Designed for cultivation in open ground,</strong></div><div><strong>as well as in plastic greenhouses</strong></div></li></ul><p></p>",
    date: "20 Avg 2025",
    image: "/images/fashion.avif",
  };

  return (
    <div className="mx-auto max-w-6xl pt-[15vh] max-md:px-2">
      <h1 className="font-creteRound text-4xl md:text-5xl lg:text-6xl">
        {blog.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 max-md:justify-center">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <p>{getReadingTime(blog.description, t("minRead")).text}</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5" />
          {/* <p>{format(blog.createdAt, "yyyy/MM/dd")}</p> */}
          <p>{blog.date}</p>
        </div>
      </div>

      <Image
        src={blog.image}
        alt={blog.title}
        width={"1120"}
        height={"595"}
        className="mt-4 rounded-md"
      />

      <div className="relative mt-12 flex max-md:flex-col-reverse md:gap-12">
        <div className="flex flex-col space-y-3">
          <div className="sticky top-[100px]">
            <ShareBtns />
          </div>
        </div>
        <div className="prose dark:prose-invert flex-1">
          {parse(blog.description)}
        </div>
      </div>
    </div>
  );
};

export default Page;
