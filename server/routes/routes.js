import express from "express";
import { get_allData, get_logout, getById_data, UserCreateData, UserDeleteDate, userLogin, UserUpdateData } from "../controller/controller.js";

export const route = express.Router();

// get all adat
route.get('/user',get_allData)


// get by Id
route.get('/user/:id',getById_data)


// create user data
route.post('/user',UserCreateData)

// user login
route.post('/user/login',userLogin)

// update user data
route.patch('/user/:id',UserUpdateData)


// delete user data
route.delete('/user/:id',UserDeleteDate)



// logout 

route.get('/user/logout',get_logout);

