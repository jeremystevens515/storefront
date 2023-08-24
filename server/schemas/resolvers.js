const { User, Item, Category } = require('../models');

const resolvers = {
    Query: {
        // User queries
        // get all users
        allUsers: async () => {
            return await User.find();
        },
        // get user by id
        user: async (parent, args, contextValue, info) => {
            return await User.findById(args._id);
        },

        // Item queries
        // get all items with option to sort
        allItems: async (parent, args, contextValue, info) => {
            let sort = args.sort ? JSON.parse(args.sort) : {};

            return await Item.find().sort(sort).populate('category');
        },

        // get item by id
        item: async (parent, args, contextValue, info) => {
            return await Item.findById(args._id).populate('category');
        },

        // Category queries
        // get all categories
        allCategories: async () => {
            return await Category.find().populate('items');
        },
        // get category by id
        categoryByID: async (parent, args, contextValue, info) => {
            return await Category.findById(args._id).populate('items');
        },
    },
    Mutation: {
        // create new item
        createItem: async (parent, args, contextValue, info) => {
            return await Item.create(args.content);
        },

        // update item by id
        updateItem: async (parent, args, contextValue, info) => {
            await Item.findByIdAndUpdate(
                args._id,
                {
                    $set: {
                        name: args.content.name,
                        description: args.content.description,
                        price: args.content.price,
                        category: args.content.category,
                        image: args.content.image
                    }
                },
                // { new: true }
            )
        },

        // delete item by id
        deleteItem: async (parent, args, contextValue, info) => {
            await Item.findByIdAndDelete(args._id);
        },
    }
};

module.exports = resolvers;