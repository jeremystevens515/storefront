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

input UserInput {
    username: String
    email: String
    password: String
    interests: [ID]
    wishlist: [ID]
    cart: [ID]
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
    userByID(_id: ID!): User

    allItems(sort: String, name: String): [Item] 
    itemByID(_id: ID!): Item

    allCategories: [Category]
    categoryByID(_id: ID!): Category
}

type Mutation {
    createUser(content: UserInput!): User
    updateUser(_id: ID!, content: UserInput!): User
    deleteUser(_id: ID!) : User

    createItem(content: ItemInput!): Item
    updateItem(_id: ID!, content: ItemInput!): Item
    deleteItem(_id: ID!) : Item
}
`;

module.exports = typeDefs;