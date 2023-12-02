import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/oyoapp')

const hotelSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    banner: {
        type: String,
        required: true
    },
    gallery:[
        {
            type:String
        }
    ],
    price:{
        type:Number
    },
    facilities:[
        {
            img:String,
            name:String
        }
    ],
    location:{
        type:String
    }
    
},{timestamps:true});



export default mongoose.models?.hotel || mongoose.model('hotel', hotelSchema)