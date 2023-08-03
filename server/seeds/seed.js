const db = require('../config/connection');
const { User, Category, Item } = require('../models/index');

const userData = require('./userData.json');
const itemData = require('./itemData.json');
const categoryData = require('./categoryData.json');

db.once('open', async () => {

    await User.deleteMany();
    await Item.deleteMany();
    await Category.deleteMany();

    await User.insertMany(userData);
    await Item.insertMany(itemData);
    await Category.insertMany(categoryData);

    console.log('all done!');
    process.exit(0);

});