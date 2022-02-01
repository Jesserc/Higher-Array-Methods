let products = [
  {
    id: 1,
    name: "Xiaomi 11T",
    description: "Xiaomi phone",
    price: "500 usd",
    inStock: false,
    },
  {
    id: 2,
    name: "Jujutsu Kaisen 0",
    description: "Japanese Anime movie",
    price: "20 usd",
    inStock: false,
    },
  {
    id: 3,
    name: "Redmi 9a",
    description: "Xiaomi brand",
    price: '140 usd',
    inStock: true,
    },
  {
    id: 4,
    name: "Sweat Shirt",
    description: "Black Sweat Shirt",
    price: "89 usd",
    inStock: true,
    },
  {
    id: 5,
    name: "Tote Bag",
    description: "Green Tote Bag",
    price: "2,300 naira",
    inStock: false,
    },
  {
    id: 6,
    name: "Tesla Model Y",
    description: "Tesla Model Y Car",
    price: "20,000 usd",
    inStock: true,
    },
  {
    id: 7,
    name: "Apple Alexa",
    description: "Apple inc AI",
    price: " Comes by default on iOS devices",
    inStock: false,
    },
  {
    id: 8,
    name: "Redmi note 11",
    description: "Xiaomi brand phone",
    price: "900 usd",
    inStock: true,
    },
  {
    id: 9,
    name: "Macbook Pro",
    description: "Apple inc Macbook",
    price: "2,000 pounds",
    inStock: true,
    },
  {
    id: 10,
    name: "VR Glasses",
    description: "VR AR smart glassed",
    price: "7000 usd",
    inStock: true,
    },
  {
    id: 11,
    name: "Smart TV",
    description: "27 inched Xiaomi TV",
    price: "99 euro",
    inStock: true,
    },
  {
    id: 12,
    name: "Phone Case",
    description: "Phone case for Poco m3",
    price: "6 shekels",
    inStock: true,
    },
  {
    id: 13,
    name: "Oculus rift",
    description: "Meta inc oculus headset",
    price: "6000 pounds",
    inStock: true,
    },
  {
    id: 14,
    name: "TV stand",
    description: " Smart stand for TV",
    price: "190 franc",
    inStock: false,
    },
  {
    id: 15,
    name: "Neuralink Nano Tech",
    description: "Neuralink Tech for brain disorder correction",
    price: "980,000 usd",
    inStock: true,
    },
]


// mapping through the console to get the product names

const product = products.map(product => console.log(` Name of product:
 ${product.name}`));



//mapping through the console to get the product names and prices

const productNameAndPrice = products.map(product => console.log(`Name of product:
${product.name}
Price: ${product.price}`));



//using filter() to get products that are in stock

const productsInStock = products.filter((productsInStock) => productsInStock.inStock === true);
console.log(productsInStock);


//using filter() to get products that are not in stock

const productNotInStock = products.filter(
  (productNotInStock) => productNotInStock.inStock !== true
);
console.log(productNotInStock);
