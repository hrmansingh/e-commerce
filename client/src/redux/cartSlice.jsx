import { createSlice } from "@reduxjs/toolkit";
export const  cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items:[],
        cartTotalQuantity:0,
        cartTotalAmount:0
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
            const {productId}= action.payload;
         const nextcartItems = state.items.filter(item=> item.productId !== productId)
          state.items= nextcartItems;
         },
         updateQuantityItems(state,action){
            const productId = action.payload
         const itemIndex = state.items.findIndex(cartItem=> cartItem.productId === productId)
         if(itemIndex >= 0){
             state.items[itemIndex].quantity++;
         }
         
         },
         subtractQuantityItems(state,action){
            const productId = action.payload
           const itemIndex = state.items.findIndex(cartItem=> cartItem.productId === productId)
           if(itemIndex >=0 && state.items[itemIndex].quantity > 1){
            state.items[itemIndex].quantity--;
           }
         }

    }
})
export const {addToCard,removeToCart,updateQuantityItems,subtractQuantityItems} =cartSlice.actions;
export default cartSlice.reducer