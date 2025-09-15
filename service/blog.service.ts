// eslint-disable-next-line import/no-named-as-default
import request, { gql } from "graphql-request";

import { INews } from "@/types/service-type";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogs = async () => {
  const query = gql`
    query Blogs {
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
        categories {
          ... on Categorie {
            title
          }
        }
        createdAt
      }
    }
  `;

  const result = await request<{ news: INews[] }>(graphqlAPI, query);
  return result.news.reverse();
};

export const getBlog = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      new(where: { slug: $slug }) {
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
  `;

  const result = await request<{ new: INews }>(graphqlAPI, query, { slug });
  return result.new;
};
