import { Dot, Home } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import CategoriesTagsCard from "@/components/cards/categoriesTags-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { baseUrl } from "@/constants";
import { getCategories } from "@/service/categorie.service";

export const metadata: Metadata = {
  title: "Categories | ABUcoders Blog",
  description:
    "Explore various categories of programming and technology blogs.",
  openGraph: {
    title: "Categories | ABUcoders Blog",
    description:
      "Explore various categories of programming and technology blogs.",
    url: `${baseUrl}/categories`,
  },
};

const Page = async () => {
  const categories = await getCategories();

  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative flex min-h-[30vh] flex-col items-center justify-center">
        <h2 className="section-title font-creteRound text-center text-4xl">
          <span>Kategoriyalar</span>
        </h2>

        <div className="mt-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="flex items-center gap-1">
                    <Home className="size-4" /> Bosh sahifa
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <Dot className="size-5" />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>Kategoriyalar</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 gap-3 max-md:p-2 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((categorie) => (
          <CategoriesTagsCard
            key={categorie.slug}
            {...categorie}
            type={"categories"}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
