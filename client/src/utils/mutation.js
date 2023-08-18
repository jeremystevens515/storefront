import { gql } from "@apollo/client";

export const CREATE_ITEM = gql`
mutation Mutation($content: ItemInput!) {
  createItem(content: $content) {
    _id
    name
    description
    price
    category {
      _id
      name
    }
    image {
      alt
      url
    }
  }
}

`;

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