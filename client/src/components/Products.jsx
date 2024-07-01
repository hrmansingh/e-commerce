import ProductCard from "./ProductCard";
import { useState } from "react";
import { productData } from "../data/productData";
import { useSelector,useDispatch } from "react-redux";
import { addToCard } from "../redux/cartSlice";
import { useParams } from "react-router-dom";
export default function Products() {
  const params =useParams();
  const [data,setData]=useState(productData)
  const carts = useSelector(store => store.cart.items)
  console.log(carts)
  const dispatch = useDispatch();
  
  return (
    <div className="productCard-container">
      {
        data?.map((product)=>(
          <ProductCard key={product.id} state={product} links={`/ProductDetails/${product.id}`} image={product.image}
          brand={product.brand}
          description={product.description}
          formattedPrice={'$'+product.price}
      >
       
      <button onClick={()=> dispatch(addToCard({productId:product.id,quantity:1}))} title="Sign In" className="addcart-in_btn">
      <span>Add cart</span>
      <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </ProductCard>
      ))}
    </div>
  )
}
