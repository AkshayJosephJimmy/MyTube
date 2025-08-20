import { use } from "react";
import {userModel} from "../models/users.model.js";
import bcrypt from 'bcryptjs';







 export async function registerUser(req,res){

    // Logic for registering a user
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const userExist=await userModel.findOne({ email })
    if(userExist){
        return res.status(400).json({ message: "User already exists" });
    }
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    userModel.create({ username, email, password: hashedPassword })
        .then(user => {
            res.status(201).json({ message: "User registered successfully", user });
        })
        .catch(error => {
            res.status(500).json({ message: "Error registering user", error });
        });
        console.log(req.body);
  



}
