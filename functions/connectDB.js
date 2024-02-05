const mongoose = require('mongoose');


// function to connect to Oolkar database
const connectDB = async (database) => {
    try {
        console.log("Connecting to database...");
        await mongoose.connect(database)
        console.log("Connected to database")
    } catch (error) {
        console.log("Connection failed to database")
        process.exit(0);
    }
}


module.exports = connectDB;