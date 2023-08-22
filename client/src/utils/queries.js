import { gql } from '@apollo/client';

export const QUERY_ALL_ITEMS = gql`
    query Query($sort: String) {
        allItems(sort: $sort) {
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

export const QUERY_ITEMS_A_TO_Z = gql`
    query ItemsAtoZ {
        ItemsAtoZ {
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

export const QUERY_ITEMS_Z_TO_A = gql`
    query ItemsZtoA {
        ItemsZtoA {
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

export const QUERY_ITEMS_PRICE_LOW_HIGH = gql`
    query ItemsPriceLowHigh {
        ItemsPriceLowHigh {
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

export const QUERY_ITEMS_PRICE_HIGH_LOW = gql`
    query ItemsPriceHighLow {
        ItemsPriceHighLow {
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