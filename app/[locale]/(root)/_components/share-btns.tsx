"use client";

import { Link2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

const ShareBtns = () => {
  const pathname = usePathname();
  const t = useTranslations();

  const onCopy = () => {
    const link = process.env.NEXT_PUBLIC_BASE_URL + pathname;
    navigator.clipboard.writeText(link).then(() => {
      toast.success(t("cope"));
    });
  };
  return (
    <div className="mt-4 flex flex-col max-md:flex-row max-md:space-x-3 md:space-y-3">
      <p className="text-muted-foreground text-lg uppercase">{t("share")}</p>
      <Button size={"icon"} variant={"outline"} onClick={onCopy}>
        <Link2 />
      </Button>
    </div>
  );
};

export default ShareBtns;
