import dbconnect from "@/db";
import Hotel from "@/models/hotel-model";



export default async function handler(req, res){
    dbconnect();
    if(req.method === "GET"){
        if(req.query.id){
            const hotel = await Hotel.findById(req.query.id)
            return res.status(200).json({msg:"Good", hotel})

        }
    }
}