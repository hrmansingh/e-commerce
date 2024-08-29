import jwt from 'jsonwebtoken';
import { userModel } from '../models/user.js';
import dotenv from 'dotenv'
dotenv.config();

export const currUser= (req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token,process.env.JWT_SIGNATURE, async (err,decodedToken)=>{
            if(err){
                console.log(err.message);
                res.locals.user=null;
            }else{
                console.log(decodedToken);
                let user = await userModel.findById(decodedToken.id);
                res.locals.user=user;
                next();
            }
        })
    }else{
        res.locals.user=null;
        next();
    }

}





