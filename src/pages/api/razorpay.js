import dbconnect from "@/db";
import Razorpay from "razorpay";
import shortid from "shortid";
import Hotel from "@/models/hotel-model";

export default async function (req, res) {
  if (req.method === "POST") {
    dbconnect();

    const razorpay = new Razorpay({
      key_id: process.env.RAZOREPAY_KEY,
      key_secret: process.env.RAZOREPAY_SECRET,
    });

    const hotel = await Hotel.findById(req.body.id);
    if (hotel) {
      const amount = hotel.price;
      const options = {
        amount: (amount * 100).toString(),
        currency: "INR",
        receipt: shortid.generate(),
        payment_capture: 1,
      };

      try {
        const result = await razorpay.orders.create(options);
        console.log(result);
        res.status(200).json({
          msg: "Payment Successful",
          id: result.id,
          currency: result.currency,
          amount: result.amount,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Payment Failed" }); // Send an error response
      }
    }
  }
}
