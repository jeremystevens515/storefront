const { Schema, model } = require('mongoose');

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Item'
            }
        ]
    }
);

const Category = model('Category', CategorySchema);

module.exports = Category;