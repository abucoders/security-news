import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";

const Page = async () => {
  const t = await getTranslations("HomePage");
  return (
    <div className="p-3">
      <h1 className="font-spaceGrotesk m-1 p-2 text-xl">{t("title")}</h1>
      <Button>Home</Button>
    </div>
  );
};

export default Page;
