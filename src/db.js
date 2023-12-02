import mongoose from "mongoose";


const URI = process.env.MONGO_URI ;

const dbconnect = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected......");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
};

export default dbconnect;