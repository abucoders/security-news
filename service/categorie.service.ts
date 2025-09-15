// eslint-disable-next-line import/no-named-as-default
import request, { gql } from "graphql-request";

import { ICategorie } from "@/types/service-type";

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
