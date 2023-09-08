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
            // const set = {};
            // const keys = Object.keys(args.content)

            // keys.forEach((key) => args.content[key] ? set[key] = args.content[key] : null);

            // find item by id and update content based on user input
            const doc = await Item.findByIdAndUpdate(
                args._id,
                {
                    $set: {
                        name: args.content.name,
                        description: args.content.description,
                        price: args.content.price,
                        category: args.content.category,
                        image: args.content.image
                    }
                }
            );

            // if the item's category array is different than the new incoming array
            // new array is longer, new array is shorter, new array is same length but different values, new array is unchanged
            const added = args.content.category ? args.content.category.filter(cat => !doc.category.includes(cat)) : null;
            // const removed = doc.category ? doc.category.filter(cat => !args.content.category.includes(cat)) : null;
            const removed = args.content.category ? !args.content.category.filter(cat => !doc.category.includes(cat)) : null;

            console.log("added:", added);
            console.log("removed", removed);

            // if there are any IDs in the difference array, remove item from category
            // if (difference) {
            //     await difference.forEach(async (categoryID) => {
            //         await model('Category').findByIdAndUpdate(categoryID, { $pull: { items: doc._id } });
            //     });
            // }
        },

        // delete item by id
        deleteItem: async (parent, args, contextValue, info) => {
            await Item.findByIdAndDelete(args._id);
        },
    }
};

module.exports = resolvers;