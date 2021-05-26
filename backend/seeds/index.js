const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const {places,descriptors} = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open",()=>{
    console.log("Database Connected");
});

const sample = array =>array[Math.floor(Math.random()*array.length)];

const seedDB = async () =>{
    await Campground.deleteMany({});    
    for (let i = 0; i < 50; i++) {
        const price = Math.floor(Math.random() * 20) + 10;
        const random1000 = Math.floor(Math.random()*1000);
        const camp = new Campground({
            author:'609831a5923642455c40908a',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [                
                {
                  _id: '60985a55fbd8c21ed42695bc',
                  url: 'https://res.cloudinary.com/asqarrsl/image/upload/v1620597388/YelpCamp/xeqpcxpmxmor7xdggdbp.jpg',
                  filename: 'YelpCamp/xeqpcxpmxmor7xdggdbp'
                },
                {
                  _id: '60985a55fbd8c21ed42695bd',
                  url: 'https://res.cloudinary.com/asqarrsl/image/upload/v1620597389/YelpCamp/p6zpm4qoq1bqrziskpfo.jpg',
                  filename: 'YelpCamp/p6zpm4qoq1bqrziskpfo'
                },
                {
                  _id: '60985a55fbd8c21ed42695be',
                  url: 'https://res.cloudinary.com/asqarrsl/image/upload/v1620597389/YelpCamp/muolafxjoe3mtxtuaiej.jpg',
                  filename: 'YelpCamp/muolafxjoe3mtxtuaiej'
                }
              ],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price
        })
        await camp.save();
        
    }
}

seedDB().then(()=>{
    mongoose.connection.close();
});