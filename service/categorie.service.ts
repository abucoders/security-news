// eslint-disable-next-line import/no-named-as-default
import request, { gql } from "graphql-request";
import { cache } from "react";

import { ICategorie, ICategorieNews } from "@/types/service-type";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getCategories = async () => {
  const query = gql`
    query Categories {
      categories {
        id
        slug
        title
        news {
          id
        }
      }
    }
  `;

  const result = await request<{ categories: ICategorie[] }>(graphqlAPI, query);
  return result.categories;
};

export const getCategorieNews = cache(async (slug: string) => {
  const query = gql`
    query CategorieNews($slug: String!) {
      categories(where: { slug: $slug }) {
        id
        title
        slug
        news {
          id
          titleKr
          titleUz
          slug
          descriptionKr {
            html
          }
          descriptionUz {
            html
          }
          image {
            url
          }
          createdAt
          categories {
            ... on Categorie {
              title
            }
          }
        }
      }
    }
  `;

  const result = await request<{ categories: ICategorieNews[] }>(
    graphqlAPI,
    query,
    {
      slug,
    },
  );
  return result.categories[0];
});
