import { NavLink} from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";
import img1 from '../assets/noah-black-u6tjZZOAFqY-unsplash.jpg'
import img2 from '../assets/ryan-moreno-zA9LXq7lGFU-unsplash.jpg'
import img3 from '../assets/pat-kwon-EJTjetc8tPs-unsplash.jpg'

export default function Products() {
     const [data,setData]=useState([
    {
      id:1,
      brand: 'Dlce & Gabbana',
      description: ' cropped leaf-print shirt',
      price: '$796',
      image:img1,
      productDescription:`1. Our high-quality shirts are made from 100% cotton, ensuring both comfort and durability. With a range of styles and colors to choose from, our shirts are suitable for any occasion, whether it's a casual day out or a formal event. The classic design and perfect fit make our shirts a timeless addition to any wardrobe.
        2. Crafted with attention to detail, our shirts feature reinforced seams and a tailored finish for a polished look. The breathable fabric allows for all-day wear, while the easy-care instructions make maintenance a breeze. Whether you're dressing up or keeping it casual, our shirts are the perfect choice for a stylish and versatile wardrobe essential.`,
    },
    {
      id:2,
      brand: `levi's`,
      description: ' Jeans leaf-print shirt',
      price: '$600',
      image:img2,
      productDescription:`Introducing our latest collection of shoes and pants, designed to elevate your style and comfort. Our shoes are crafted with high-quality materials and innovative designs to provide support and durability, while our pants are tailored for a perfect fit and effortless style. Whether you're looking for casual sneakers or formal dress shoes, or comfortable joggers or stylish trousers, our collection has something for every occasion. Elevate your wardrobe with our versatile and fashionable shoes and pants.`
    },
    {
      id:3,
      brand: 'Nike',
      description: ' Shoes and leaf-print shirt',
      price: '$499',
      image:img3,
      productDescription:`1. Stay cozy and stylish with our collection of hoodies, perfect for any casual occasion. Made from high-quality materials, our hoodies are designed to keep you warm and comfortable all day long. With a variety of colors and styles to choose from, you can easily find the perfect hoodie to match your personal taste.



      2. Whether you're lounging at home or heading out for a quick errand, our hoodies are versatile enough to suit any outfit. The classic design and relaxed fit make them a must-have in any wardrobe. Upgrade your casual look with our trendy hoodies that are both fashionable and functional.`
    }
  ])
  return (
    <div className="productCard-container">
      {
        data?.map((product)=>(
      <ProductCard key={product.id} state={product} links={`/ProductDetails/${product.id}`} image={product.image}
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
