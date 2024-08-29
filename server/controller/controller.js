import { userModel } from "../models/user.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();



//expire date jwt
const Max_age= 3*24*60*60


// create token

const createToken = (id)=>{
    const payload={
        id:user._id,
        email:user.email
    }
    return jwt.sign(payload,process.env.JWT_SIGNATURE,{
        expiresIn:Max_age
    });
}

// get all data
export const get_allData = async (req,res)=>{
    const user_data = await userModel.find()
    try {
         res.status(200).json(user_data); 
         console.log(user_data)   
    } catch (error) {
        res.status(400).json({error:error})
    }
}


// get by id data
export const getById_data =async (req,res)=>{
    const {id} = req.params;
    const User_data = await userModel.findById({_id:id})

    try {
        res.status(200).json(User_data);
        console.log(User_data)
    } catch (error) {
        res.status(400).json({error:error})
    }
}

// create usere data
export const UserCreateData=async (req,res)=>{
    const {name,email,password} = req.body;

    const User_create=new userModel({
        name:name,
        email:email,
        password:password
    })

    const saved = await User_create.save();
    try {
        const token =createToken(User_create._id);
        res.cookie('jwt',token,{httpOnly:true,Max_age:Max_age*1000})
        res.status(200).json({User:User_create._id});
        console.log(saved)
    } catch (error) {
           res.status(400).json({error:error})        
    }
}

// UserLogin

export const userLogin=async(req,res)=>{
    const {email,password} = req.body;

    try {
        const User_login=await userModel.findOne({email});
        const token= createToken(User_login);
        if(!User_login){
            throw new Error('User not found');
        }
        res.status(200).json({User_login:User_login,token:token});
        res.cookie('jwt',token,{httpOnly:true,Max_age:Max_age});
    } catch (error) {
        res.status(400).json({error:error})
    }
}

// update user data
export const UserUpdateData=async (req,res)=>{
    const _id = req.params.id;
    const update_date= await userModel.findOneAndUpdate(_id,req.body);
    try {
        res.status(200).json(update_date)
        console.log(update_date);
    } catch (error) {
        res.status(400).json({error:error})
    }
}

// delete user data
export const UserDeleteDate=async (req,res)=>{
    const {id} = req.params;

    const delete_data=await userModel.findOneAndDelete({_id:id})
    try {
        res.status(200).json(delete_data);
        console.log(delete_data)
    } catch (error) {
        res.status(400).json({error:error})
    }
}


//logout
export const get_logout=async(req,res)=>{
    res.cookie('jwt','',{Max_age:1});
    res.redirect('/login');
}