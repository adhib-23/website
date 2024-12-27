require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,  // For MongoDB 4.x
            useFindAndModify: false // To avoid deprecation warnings
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        console.error(error.stack);
        process.exit(1);
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected. Attempting to reconnect...');
    connectDB();
});

module.exports = connectDB;
