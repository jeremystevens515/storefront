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
    price: Number
    category: [Category]
    image: String
}

type Category {
    _id: ID
    name: String
    items: [Item]
`;

module.exports = typeDefs;