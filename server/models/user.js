import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email:{ type: String, required: true, unique: true,lowercase:true },
  password:{ type: String, required: true, unique: true }
},{timestamps:true});

// fire func after do saved db
userSchema.post('save',(doc,next)=>{
    console.log('new user created & save', doc)
    next()
})

// fire func bedore do savdb

userSchema.pre('save', async function(next){
    const salt=await bcrypt.genSalt();

    //hashing the password
    this.password = await bcrypt.hash(this.password,salt)
    next();
})

// login authentication for USer

userSchema.statics.login = async function(email,password){
    const user = await this.findOne({email});

    if(user){
        const auth = await bcrypt.compare(password,user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect Email');
}
const userModel = mongoose.model("userSchema", userSchema);
export { userModel };
