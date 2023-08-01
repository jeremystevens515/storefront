const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: 'Email is required',
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },
    password: {
        type: String,
        required: 'Password is required',
        trim: true,
    },
    interests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
    ],
    wishlist: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item',
        },
    ],
    cart: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item',
        }
    ]
});

const User = model('User', UserSchema);

module.exports = User;