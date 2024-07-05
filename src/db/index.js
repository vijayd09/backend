const mongoose = require('mongoose');
const { DB_NAME } = require('../contain.js');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.MONGO_URI}/${DB_NAME}`);
        console.log('MongoDB Connected...');
        console.log(`MongoDB Connected...|| DB Host: ${process.env.MONGO_URI}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;

