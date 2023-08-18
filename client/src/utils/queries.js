import { gql } from '@apollo/client';

export const QUERY_ALL_ITEMS = gql`
    query Query {
        allItems {
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

export const QUERY_CATEGORY = gql`
    query getCategory($id: ID!) {
        category(_id: $id) {
            _id
            name
            items {
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
    }
`;

export const QUERY_USER = gql`
    query getUser($id: ID!) {
        user(_id: $id) {
            _id
            username
            email
            interests {
                _id
                name
            }
            wishlist {
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
            cart {
                _id
                name
                price
                image {
                    url
                    alt
                }
            }
        }
    }
`;