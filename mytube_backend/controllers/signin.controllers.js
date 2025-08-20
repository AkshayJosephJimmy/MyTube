import {userModel} from "../models/users.model.js";
import { use } from "react";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



export async function signin(req,res){

    const { email, password } = req.body;
     const userExist=await userModel.findOne({ email})

    if(!userExist){
        return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
        

    }
    const token= jwt.sign({ id: userExist._id }, "secretkey", { expiresIn: '1h' });
    

    res.status(200).json({ message: "Signin successful",token:token, user:userExist});
    console.log(req.body);
  
}