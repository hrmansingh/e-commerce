import { useState } from "react";
import {useSelector} from 'react-redux'
export default function Addcart() {
  const cart = useSelector((state)=> state.cart);
  const [count,setCount] = useState(1)
    function quantityAdd(){
      setCount((prev)=> prev + 1);
    }
    function quantityRemove(){
      if(count > 1){
        setCount((prev)=> prev - 1);
      }
    }
  // const product = location.state.product;
  return (
    <>
    <div className="title">
      <h1 className="title-heading">Shopping Bags <i className="fa-solid fa-tag"></i></h1>
    </div>
    <section className="shopping-cart">
    { cart.items.length === 0 ? (<div className="cart-empty"><p>Your cart is currently empty</p></div>) :(cart.items?.map((element)=>(

      <div key={element.product.id} className="shopping-item">
        <div className="image-container-shopping">
          <img className="shopping-cart-image" src={element.product.image} alt="shoping" />
        </div>
        <div className="shopping-cart-description">
          <h1 className="shopping-cart-heading">{element.product.brand}</h1>
          <h4 className="shopping-cart-content">{element.product.description}</h4>
        </div>
        <div className="quantity-items-btn">
          <button onClick={quantityRemove} className="items-plus"><i className="fa-solid fa-minus"></i></button>
          <span className="count-items">{count}</span>
          <button onClick={quantityAdd} className="items-minus"><i className="fa-solid fa-plus"></i></button>
          <div className="quantity">
            <p className='quantity-items'>Quantity<span><i className="fa-solid fa-box"></i></span></p>
          </div>
        </div>
        <div className="shopping-cart-price">
          <p className="shopping-pricing">${parseInt(element.product.price) * count}</p>
        </div>
        <div className="shopping-cart-buy-btn">
          <button className="place-your-order">Place Your Order</button>
        </div>
      </div>
  )))}
    </section>
    </>
  )
}
