// eslint-disable-next-line import/no-named-as-default
import request, { gql } from "graphql-request";

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
        updatedAt
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result;
};
