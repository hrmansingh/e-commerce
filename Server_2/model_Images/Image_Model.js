import mongoose from "mongoose";

const Product_Image = mongoose.Schema({
    path:{type:String,required:true},
    filename:{type:String,required:true}
},{timestamps:true})




const ProductImage = mongoose.model('productImages',Product_Image);

export {ProductImage};