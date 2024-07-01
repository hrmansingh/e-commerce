import { useEffect, useState } from "react";
import { productData } from "../data/productData";
import img from '../assets/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg'

export default function CartItems(props) {
    const [count,setCount] = useState(0)
    function quantityAdd(){
      setCount((prev)=> prev + 1);
    }
    function quantityRemove(){
      if(count > 0){
        setCount((prev)=> prev - 1);
      }
    }
    const {productId,quantity} = props.data;
    const [detail,setDetail]=useState([]);
    useEffect(()=>{
        const findDetail = productData.filter(product=> product.id === productId)[0]
        setDetail(findDetail)
    },[productId])
    console.log(detail)
    console.log(productData)
  return (
    <>
    <div className="title">
      <h1 className="title-heading">Shopping Bage <i className="fa-solid fa-tag"></i></h1>
    </div>
    <section className="shopping-cart">
      <div className="shopping-item">
        <div className="image-container-shopping">
          <img className="shopping-cart-image" src={detail.image} alt="sgoping" />
        </div>
        <div className="shopping-cart-description">
          <h1 className="shopping-cart-heading">{detail.brand}</h1>
          <h4 className="shopping-cart-content">{detail.description}</h4>
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
          <p className="shopping-pricing">${detail.price * quantity}</p>
        </div>
        <div className="shopping-cart-buy-btn">
          <button className="place-your-order">Place Your Order</button>
        </div>
      </div>
    </section>
 </>
  )
}
