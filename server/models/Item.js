const { Schema, model } = require('mongoose');

const ImageSchema = new Schema({
    url: {
        type: String,
        required: false,
        trim: true,
    },
    alt: {
        type: String,
        required: true,
        trim: true,
    }
});

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        }
    ],
    image: ImageSchema,
});

// hook to add item to category when item is given a category
ItemSchema.post('findOneAndUpdate', async function (doc) {
    const current = doc.category; // doc is BEFORE update
    const incomming = this._update.$set.category; // this._update is AFTER update
    const difference = current.filter(cat => !incomming.includes(cat)); // variable to hold the category ID(s) that are not included in both arrays

    // iterate through each category and add item to category
    await doc.category.forEach(async (category) => {
        await model('Category').findByIdAndUpdate(category._id, { $addToSet: { items: doc._id } });
    });

    // if there are any IDs in the difference array, remove item from category
    if (difference.length > 0) {
        await difference.forEach(async (categoryID) => {
            await model('Category').findByIdAndUpdate(categoryID, { $pull: { items: doc._id } });
        });
    }
});

const Item = model('Item', ItemSchema);

module.exports = Item;