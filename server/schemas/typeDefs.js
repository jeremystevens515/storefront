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
    image: Image
}

type Category {
    _id: ID
    name: String
    items: [Item]
}

type Image {
    url: String
    alt: String
}

input ImageInput {
    url: String
    alt: String
}

input ItemInput {
    name: String
    description: String
    price: Int
    image: ImageInput
    category: [ID]
}

type Query {
    allUsers: [User]
    user(_id: ID!): User

    allItems(sort: String): [Item] 
    itemByID(_id: ID!): Item
    itemByName(name: String!): Item

    allCategories: [Category]
    categoryByID(_id: ID!): Category
}

type Mutation {
    createItem(content: ItemInput!): Item
    updateItem(_id: ID!, content: ItemInput!): Item
    deleteItem(_id: ID!) : Item
}
`;

module.exports = typeDefs;