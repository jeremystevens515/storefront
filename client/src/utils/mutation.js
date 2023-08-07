import { gql } from "@apollo/client";

export const UPDATE_ITEM = gql`
mutation Mutation($id: ID!, $content: ItemInput!) {
    updateItem(_id: $id, content: $content) {
      _id
      description
      image
      name
      price
      category {
        _id
        name
      }
    }
  }
  
`;