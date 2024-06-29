import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";


export default function Products() {
 
     const [data,setData]=useState([
    {
      id:1,
      brand: 'Dlce & Gabbana',
      description: ' cropped leaf-print shirt',
      price: '$796',
      image:"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"
    },
    {
      id:2,
      brand: 'Dlce & Gabbana',
      description: ' cropped leaf-print shirt',
      price: '$600',
      image:"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"
    },
    {
      id:3,
      brand: 'Dlce & Gabbana',
      description: ' cropped leaf-print shirt',
      price: '$499',
      image:"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"
    }
  ])
  return (
    <div className="productCard-container">
      {data?.map((product)=>(
      <ProductCard  key={product.id} links={`/ProductDetails/${product.id}`} image={product.image}
      brand={product.brand}
      description={product.description}
      formattedPrice={product.price}
      >

        <NavLink to={`/addcart/${product.id}`} title="Sign In" type="submit" className="addcart-in_btn">
      <span>Add cart</span>
      <i className="fa-solid fa-cart-shopping"></i>
      </NavLink>
    </ProductCard>
      ))}
    </div>
  )
}
