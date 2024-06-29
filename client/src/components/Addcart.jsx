import img from '../assets/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg'
export default function Addcart() {
  return (
    <>
    <div className="title">
      <h1 className="title-heading">Shopping Bage <i className="fa-solid fa-tag"></i></h1>
    </div>
    <section className="shopping-cart">
      <div className="shopping-item">
        <div className="image-container-shopping">
          <img className="shopping-cart-image" src={img} alt="sgoping" />
        </div>
        <div className="shopping-cart-description">
          <h1 className="shopping-cart-heading">shirts</h1>
          <h4 className="shopping-cart-content">white</h4>
        </div>
        <div className="quantity-items-btn">
          <button className="items-plus"><i className="fa-solid fa-plus"></i></button>
          <span className="count-items">1</span>
          <button className="items-minus"><i className="fa-solid fa-minus"></i></button>
        </div>
        <div className="shopping-cart-price">
          <p className="shopping-pricing">$599</p>
        </div>
        <div className="shopping-cart-buy-btn">
          <button className="place-your-order">Place Your Order</button>
        </div>
      </div>
    </section>
    </>
  )
}
