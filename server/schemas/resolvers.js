const { User, Item, Category } = require('../models');

const resolvers = {
    Query: {
        // get all users
        users: async () => {
            return await User.find();
        },
        // get all items
        items: async () => {
            return await Item.find();
        },
        // get all categories
        categories: async () => {
            return await Category.find();
        },
    }
};

module.exports = resolvers;