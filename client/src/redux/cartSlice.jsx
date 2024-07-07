import { createSlice } from "@reduxjs/toolkit";
export const  cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items:[],
        carTotalQuantity:0,
        carTotalAmount:0
    },
    reducers:{
         addToCard(state,action){
            const {productId,quantity,product}=action.payload;
            const indexProductId=(state.items).findIndex(item=> item.productId === productId);
            if(indexProductId>=0){
                state.items[indexProductId].quantity += quantity
            }else{
                state.items.push({productId ,quantity,product});
            }
         },
         removeToCart(state, action){
            const productId= action.payload;
         const nextcartItems = state.items.filter(item=> item.productId !== productId)
          state.items= nextcartItems;
         }
    }
})
export const {addToCard,removeToCart} =cartSlice.actions;
export default cartSlice.reducer