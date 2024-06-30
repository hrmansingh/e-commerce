import { NavLink, useLocation} from "react-router-dom";
export default function ProductDetails() {
       const location = useLocation()
       const data = location.state;
       let k=Object.entries(data);
     return (
         
        <section className="product-details-container">
        {
      k.map((element)=>(
            <>
         <div className="img-details">
            <img className="product-img" src={element[1].image} alt="img" />
            </div>
            <div className="product-content">
            <h1 className="product-detail-title">{element[1].brand}</h1>
            {/* <h5 className="product-detail-sub-title">Sub Title</h5> */}
            <div className="product-details-description">
            <p className="product-description">{element[1].description}</p>
            </div>
            <div className="price">
            <p className="product-price">{element[1].price}</p>
           </div>
           <div className="buy-now-btn">
           <NavLink to={'/addcart'} title="Sign In"  type="submit" className="buynow-in_btn">
           <span>Buy Now</span>
           <i className="fa-solid fa-bag-shopping"></i>
           </NavLink>
           </div>
           <div className="description-forProduct">
           <h3 className="description-title-content">Description</h3>
               <p className="description-content">{element[1].productDescription}</p>
               </div>
               </div>
            </>
         ))
      }
      </section>
      )
      }
      