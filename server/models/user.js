import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import validator from 'validator'


const userSchema = mongoose.Schema({
  name: { type: String, required: true},
  email:{ type: String, required: true, unique: true,lowercase:true },
  password:{ type: String, required: true }
},{timestamps:true});


// static signup for User
userSchema.statics.signup= async function(name,email,password){
    if(!email || !password || !name){
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)){
        throw Error('Email not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }
    const exist = await this.findOne({email})
    if(exist){
        throw Error('Email already in use')
    }
    const salt=await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    const user = await this.create({name,email,password:hash})
    return user;
}
// login authentication for USer

userSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error('All Fields must be filled')
    }
    const user= await this.findOne({email})
    if(!user){
        throw Error('Incorrect email')
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error("Invalid Password")
    }
    return user;
}
const userModel = mongoose.model("userSchema", userSchema);
export { userModel };
