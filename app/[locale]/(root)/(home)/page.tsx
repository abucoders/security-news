import Hero from "./_components/hero";
import TodaysTopNews from "./_components/todays-top-news";

const Page = async () => {
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
