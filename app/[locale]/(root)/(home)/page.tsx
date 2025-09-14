import { getCategories } from "@/service/categorie.service";

import Hero from "./_components/hero";
import TodaysTopNews from "./_components/todays-top-news";

const Page = async () => {
  const categories = await getCategories();
  console.log(categories);
  return (
    <>
      <Hero />
      <div className="mt-2">
        <TodaysTopNews />
      </div>
    </>
  );
};

export default Page;
