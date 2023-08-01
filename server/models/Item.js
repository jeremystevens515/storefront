const { Schema, model } = require('mongoose');

const ItemSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        }
    ],
    image: {
        type: String,
    }
});

const Item = model('Item', ItemSchema);

module.exports = Item;