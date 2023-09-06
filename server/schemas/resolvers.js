const { User, Item, Category } = require('../models');

const resolvers = {
    Query: {
        // User queries
        // get all users
        allUsers: async () => {
            return await User.find();
        },
        // get user by id
        userByID: async (parent, args, contextValue, info) => {
            return await User.findById(args._id).populate('interests');
        },

        // Item queries
        // get all items with option to sort
        allItems: async (parent, args, contextValue, info) => {
            let sort = args.sort ? JSON.parse(args.sort) : {};
            let name = args.name ? args.name : "";

            return await Item.find(
                {
                    name: { $regex: name, $options: 'i' }
                }
            ).sort(sort).populate('category');
        },

        // get item by id
        itemByID: async (parent, args, contextValue, info) => {
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
        // User mutations
        // create new user
        createUser: async (parent, args, contextValue, info) => {
            return await User.create(args.content);
        },

        // update user by id
        updateUser: async (parent, args, contextValue, info) => {
            return await User.findByIdAndUpdate(
                args._id,
                {
                    $set: {
                        name: args.content.name,
                        email: args.content.email,
                        password: args.content.password,
                        interests: args.content.interests,
                        wishlist: args.content.wishlist,
                        cart: args.content.cart
                    }
                },
                { new: true }
            ).populate('interests').populate('wishlist').populate('cart');
        },

        // delete user by id
        deleteUser: async (parent, args, contextValue, info) => {
            await User.findByIdAndDelete(args._id);
        },

        //Item mutations
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