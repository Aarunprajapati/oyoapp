import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

const dbconnect = async () => {
  let cachedDB = null;

  if (cachedDB) {
    return cachedDB;
  }else{
     const newDB = await mongoose.connect(URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });
     cachedDB = newDB;
     return newDB;
  }
 
};

export default dbconnect;