import dbconnect from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if (req.method === "POST") {
        dbconnect();
        const { name, email, password } = req.body;

        try {
            // Check if all required fields are provided
            if (!name || !email || !password) {
                return res.status(400).json({ msg: "All fields are mandatory" });
            }

            // Check if the email is already registered
            const emailExist = await User.findOne({ email });
            if (emailExist) {
                return res.status(400).json({ msg: "User already registered" });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user instance
            const newUser = new User({
                name,
                email,
                password: hashedPassword,
            });

            // Save the new user to the database
            const result = await newUser.save();

            // Generate JWT token
            const token = jwt.sign({ token: result._id }, process.env.JWT_SECRET, {
                expiresIn: "30d",
            });

            // Return success response with token and user details
            return res
                .status(201)
                .json({ msg: "Registered successfully", token, user: result });
        } catch (error) {
            // Handle any errors that occurred during the process
            console.error("Error during registration:", error.message);
            return res.status(500).json({ msg: "Internal Server Error" });
        }
    } else {
        // Handle unsupported HTTP methods
        return res.status(405).json({ msg: "Method Not Allowed" });
    }
}
