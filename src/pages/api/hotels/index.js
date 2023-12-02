import dbconnect from "@/db";

import hotel from "@/models/hotel-model";






export default async function handler(req,res){
    dbconnect();
    //* this api work only insert data for hotels
    // if(req.method === "POST"){
    //     await dbconnect();
    //     const newhotels = await new hotel(req.body);
    //     const result = await newhotels.save();
    //     res.status(201).json({msg:"Hotel Added !", result})
    // }



    //* this api work for get data of hotels

    if(req.method === "GET"){
        const hotels = await hotel.find({location:req.query.city});
        if(hotels.length > 0){
            return res.status(200).json({msg:"hotel", hotels})
        }
    }
    const allhotels =  await hotel.find({});
    return res.status(200).json({msg:"all hotels", allhotels})
}