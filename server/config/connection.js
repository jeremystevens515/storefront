const mongoose = require('mongoose');

const atlasURL = "mongodb+srv://admin:Qaddyd-4dypsa-mivcuh@storefront.3kpboon.mongodb.net/storefront?retryWrites=true&w=majority"

mongoose.connect(
    atlasURL || 'mongodb://127.0.0.1:27017/storefront',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;