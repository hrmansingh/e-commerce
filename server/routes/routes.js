import express from "express";
import { get_allData, getById_data, UserCreateData, UserDeleteDate, userLogin, UserUpdateData } from "../controller/controller.js";

export const route = express.Router();

// get all user data
route.get('/user',get_allData)


// get user data by Id 
route.get('/user/:id',getById_data)



// update user data
route.patch('/user/:id',UserUpdateData)


// delete user data
route.delete('/user/:id',UserDeleteDate)


// create user data register
route.post('/signup',UserCreateData)

// user login
route.post('/login',userLogin)
