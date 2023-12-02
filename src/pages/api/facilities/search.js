import dbconnect from "@/db";
import Hotel from "@/models/hotel-model";



export default async function handler(req,res){
    dbconnect();
    if(req.method === "GET"){
        const key = req.query.val;
        // console.log(key)
        const searchHotel = await Hotel.find({'facilities.name':{$in:key}})
        res.status(200).json({mgs:"ALL good", searchHotel})
    }
}