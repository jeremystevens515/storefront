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

const Item = model('Item', ItemSchema);

module.exports = Item;