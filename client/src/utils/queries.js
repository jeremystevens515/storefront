import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query getUser($id: ID!) {
        userByID(_id: $id) {
        _id
        cart {
            _id
            name
        }
        email
        interests {
            _id
            name
        }
        username
        wishlist {
            _id
            name
            image {
            alt
            url
            }
        }
        }
    }
  
`;

export const QUERY_ALL_ITEMS = gql`
    query Query($sort: String, $name: String) {
        allItems(sort: $sort, name: $name) {
        _id
        name
        description
        price
        category {
            _id
            name
        }
        image {
            url
            alt
        }
        }
    }
  `;

export const QUERY_ITEM = gql`
    query getItem($id: ID!) {
        item(_id: $id) {
            _id
            name
            description
            price
            category {
                _id
                name
            }
            image {
                url
                alt
            }
        }
    }
`;


export const QUERY_ALL_CATEGORIES = gql`
    query AllCategories {
        allCategories {
        _id
        name
        }
    }
`;

export const QUERY_CATEGORY_BY_ID = gql`
    query CategoryByID($id: ID!) {
        categoryByID(_id: $id) {
        _id
        name
        items {
            _id
            category {
            _id
            name
            }
            description
            image {
            alt
            url
            }
            name
            price
        }
        }
    }
`;