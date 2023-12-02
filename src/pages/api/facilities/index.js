import dbconnect from "@/db";
import Hotel from "@/models/hotel-model";




export default async function handler(req,res){
    dbconnect();
    if(req.method === "GET"){
        const facilities = await Hotel.find().distinct('facilities.name')
        return res.status(200).json({msg:"facilities", facilities})
    }
    
}