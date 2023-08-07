const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    interests: [Category]
    wishlist: [Item]
    cart: [Item]
}

type Item {
    _id: ID
    name: String
    description: String
    price: Int
    category: [Category]
    image: String
}

type Category {
    _id: ID
    name: String
    items: [Item]
}

input ItemInput {
    name: String
    description: String
    price: Int
    image: String
    category: [ID]
}

type Query {
    allUsers: [User]
    user(_id: ID!): User
    allItems: [Item]
    item(_id: ID!): Item
    allCategories: [Category]
    category(_id: ID!): Category
}

type Mutation {
    updateItem(_id: ID!, content: ItemInput!): Item
}
`;

module.exports = typeDefs;