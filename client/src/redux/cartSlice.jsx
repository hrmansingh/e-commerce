import { createSlice } from "@reduxjs/toolkit";

export const  cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cart:[]
    },
    reducers:{
         addtoCart : (state,action)=>{
            state.cart.push(action.payload)
         }
    }
})

export const {addtoCart} = cartSlice.actions