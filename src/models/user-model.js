import mongoose from "mongoose"
mongoose.connect('mongodb://127.0.0.1:27017/oyoapp')


const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        trim:true,
    }
},{timestamps:true});



export default mongoose.models?.User || mongoose.model("User", userSchema)