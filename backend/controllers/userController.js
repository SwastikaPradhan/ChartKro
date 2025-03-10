import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register  = async (req,res)=>{
    try{
        const {fullName, username,password,confirmPassword,gender}=req.body;
        if (!fullName || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message:"All fields are required"});
        }
        if(password !== confirmPassword){
            return res.status(400).json({message:"Password do not match"});

        }

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message:"Username already exit"});
        };
        const hashedPassword = await bcrypt.hash(password,10);
        const maleProfilePhoto = "https://avatar.iran.liara.run/public/boy?username=${username}";
        const femaleProfilePhoto = "https://avatar.iran.liara.run/public/girl?username=${username}";


        await User.create({
            fullName,
            username,
            password:hashedPassword,
            profilePhoto:gender ==="male"? maleProfilePhoto: femaleProfilePhoto,
            gender
        })
        return res.status(201).json({
            message:"Account created successfully",
            success:true
        })
    }catch(error){
        console.log(error);
    }
}

//LOGIN
export const login = async(req,res)=>{
    try{
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({message:"All fields are required"});
        };
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({
                message:"Incorrect username or password",
                success:false
            })
        };
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Incorrect username or password",
                success:false
            })
        };
        const tokenData={
            userId:user._id
        };
        const token = await jwt.sign(tokenData,process.env.JWT_SECRECT_KEY , {expiresIn:'1d'});
        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:'strict'}).json({
            _id:user._id,
            username:user.username,
            fullName:user.fullName,
            profilePhoto:user.profilePhoto
        });



    }catch(error){
        console.log(error);
    
    }
}

export const logout = (req,res)=>{
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"User logged out successfully"
        })

    }catch(error){
        console.log(error);
    }
}

export const getOtherUsers = async(req,res)=>{
    try{
        const loggedinuserid= req.id;
        const otherusers = await User.find({_id:{$ne:loggedinuserid}}).select("-password");
        return res.status(200).json(otherusers);

    }
    catch(error){
        console.log(error);
    }
}