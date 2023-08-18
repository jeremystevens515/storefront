const { User, Item, Category } = require('../models');

const resolvers = {
    Query: {
        // get all users
        allUsers: async () => {
            return await User.find();
        },
        // get user by id
        user: async (parent, args, contextValue, info) => {
            return await User.findById(args._id);
        },

        // get all items
        allItems: async () => {
            return await Item.find().populate('category');
        },
        // get item by id
        item: async (parent, args, contextValue, info) => {
            return await Item.findById(args._id).populate('category');
        },

        // get all categories
        allCategories: async () => {
            return await Category.find();
        },
        // get category by id
        category: async (parent, args, contextValue, info) => {
            return await Category.findById(args._id);
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
                { new: true })
        }
    }
};

module.exports = resolvers;