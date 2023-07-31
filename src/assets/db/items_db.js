class item {
    constructor(id, name, description, price, category, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.image = image;
    }
}

const items = [
    new item(1, "T-Shirt", "Comfortable cotton t-shirt", 20.99, "Apparel", "tshirt.jpg"),
    new item(2, "Backpack", "Durable and spacious backpack", 34.50, "Accessories", "backpack.jpg"),
    new item(3, "Coffee Mug", "Stylish ceramic coffee mug", 8.99, "Kitchen", "mug.jpg"),
    new item(4, "Running Shoes", "High-performance running shoes", 89.95, "Footwear", "runningshoes.jpg"),
    new item(5, "Smartphone", "Feature-packed smartphone", 599.00, "Electronics", "smartphone.jpg"),
    new item(6, "Watch", "Elegant wristwatch", 120.75, "Accessories", "watch.jpg"),
    new item(7, "Laptop", "Powerful and lightweight laptop", 999.99, "Electronics", "laptop.jpg"),
    new item(8, "Sunglasses", "Stylish UV protection sunglasses", 45.50, "Accessories", "sunglasses.jpg"),
    new item(9, "Dress", "Fashionable evening dress", 65.00, "Apparel", "dress.jpg"),
    new item(10, "Headphones", "High-fidelity over-ear headphones", 129.95, "Electronics", "headphones.jpg"),
    // ... continue with more items ...
    new item(91, "Sneakers", "Casual sneakers", 55.00, "Footwear", "sneakers.jpg"),
    new item(92, "Handbag", "Stylish handbag with adjustable strap", 39.99, "Accessories", "handbag.jpg"),
    new item(93, "Swimsuit", "Comfortable swimsuit for the beach", 25.49, "Apparel", "swimsuit.jpg"),
    new item(94, "Water Bottle", "Leak-proof stainless steel water bottle", 15.00, "Kitchen", "waterbottle.jpg"),
    new item(95, "Running Shorts", "Lightweight running shorts", 29.95, "Apparel", "runningshorts.jpg"),
    new item(96, "Wireless Earbuds", "True wireless earbuds with charging case", 79.99, "Electronics", "earbuds.jpg"),
    new item(97, "Back Massager", "Portable electric back massager", 49.75, "Health", "backmassager.jpg"),
    new item(98, "Sweater", "Cozy knit sweater", 42.50, "Apparel", "sweater.jpg"),
    new item(99, "Gaming Mouse", "High-precision gaming mouse", 69.95, "Electronics", "gamingmouse.jpg"),
    new item(100, "Umbrella", "Wind-resistant compact umbrella", 19.99, "Accessories", "umbrella.jpg"),
];

module.exports = { items };