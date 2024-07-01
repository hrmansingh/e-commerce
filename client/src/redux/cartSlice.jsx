import { createSlice } from "@reduxjs/toolkit";

export const  cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items:[]
    },
    reducers:{
         addToCard(state,action){
            const {productId,quantity}=action.payload;
            const indexProductId=(state.items).findIndex(item=> item.productId === productId);
            if(indexProductId>=0){
                state.items[indexProductId].quantity += quantity
            }else{
                state.items.push({productId,quantity});
            }
         }
    }
})
export const {addToCard} =cartSlice.actions;
export default cartSlice.reducer