import ProductCard from "./ProductCard";
import { useState } from "react";
import { productData } from "../data/productData";
import { useDispatch } from "react-redux";
import { addToCard } from "../redux/cartSlice";

export default function Products() {
  const [data,setData]=useState(productData)
  const dispatch = useDispatch();
  
  return (
    <div className="productCard-container">
      {
        data?.map((product)=>(
          <ProductCard key={product.id} state={product} links={`/ProductDetails/${product.id}`} image={product.image}
          brand={product.brand}
          description={product.description}
          formattedPrice={'₹ '+ product.price}
      >
       
      <button onClick={()=> dispatch(addToCard({productId:product.id,quantity:1,product:product}))} title="Sign In" className="addcart-in_btn">
      <span>Add cart</span>
      <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </ProductCard>
      ))}
    </div>
  )
}
