import dbconnect from "@/db";
import Hotel from "@/models/hotel-model";



export default async function handler(req,res){
    dbconnect();
    if(req.method === "GET"){
        const hotelsprice = (await Hotel.find({price:{$lte : req.query.price}}))
        res.status(200).json({mgs:"ALL good", hotelsprice})
    }
}