import express from "express";
import { createProductData, createProductImage, DeleteProductData, getAllImgsProductData, getAllProductData, getProductDataById, UpdateProductData } from "../controller/Product_Controller.js";
import upload from "../Image_multer/image_multer.js";


export const route = express.Router()


// product routes
route.get('/productData',getAllProductData)


route.get('/productData/:id',getProductDataById)

route.post('/productData',createProductData)
route.patch('/productData/:id',UpdateProductData)
route.delete('/productData/:id',DeleteProductData)



// image routes
route.get('/productData/images/:id',getAllImgsProductData)
route.post('/productData/images',upload.single('image'),createProductImage)
