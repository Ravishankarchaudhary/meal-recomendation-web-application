const mongoose = require("mongoose")

//MongoDB connection 
const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/mealDB")
        console.log(" MongoDB Connected...")
     } catch(err) {
        console.error("MongoDB connection failed:", err)
        process.exit(1) 
    }
}

module.exports = connectDB