import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";


export default function Products() {
  return (
    <div className="productCard-container">
      <ProductCard links={'/ProductDetails'} image={"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"}
      brand={"Dlce & Gabbana"}
      description={"cropped leaf-print shirt"}
      formattedPrice={"$796"}
      >

        <NavLink to={'/addcart'} title="Sign In"  type="submit" className="addcart-in_btn">
      <span>Add cart</span>
      <i className="fa-solid fa-cart-shopping"></i>
      </NavLink>
    </ProductCard>
      <ProductCard links={'/ProductDetails'} image={"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"}
      brand={"Dlce & Gabbana"}
      description={"cropped leaf-print shirt"}
      formattedPrice={"$796"}
      >

        <NavLink to={'/addcart'} title="Sign In"  type="submit" className="addcart-in_btn">
      <span>Add cart</span>
      <i className="fa-solid fa-cart-shopping"></i>
      </NavLink>
    </ProductCard>
      <ProductCard links={'/ProductDetails'} image={"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"}
      brand={"Dlce & Gabbana"}
      description={"cropped leaf-print shirt"}
      formattedPrice={"$796"}
      >

        <NavLink to={'/addcart'} title="Sign In"  type="submit" className="addcart-in_btn">
      <span>Add cart</span>
      <i className="fa-solid fa-cart-shopping"></i>
      </NavLink>
    </ProductCard>
      <ProductCard links={'/ProductDetails'} image={"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"}
      brand={"Dlce & Gabbana"}
      description={"cropped leaf-print shirt"}
      formattedPrice={"$796"}
      >

        <NavLink to={'/addcart'} title="Sign In"  type="submit" className="addcart-in_btn">
      <span>Add cart</span>
      <i className="fa-solid fa-cart-shopping"></i>
      </NavLink>
    </ProductCard>
      <ProductCard links={'/ProductDetails'} image={"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"}
      brand={"Dlce & Gabbana"}
      description={"cropped leaf-print shirt"}
      formattedPrice={"$796"}
      >

        <NavLink to={'/addcart'} title="Sign In"  type="submit" className="addcart-in_btn">
      <span>Add cart</span>
      <i className="fa-solid fa-cart-shopping"></i>
      </NavLink>
    </ProductCard>
      <ProductCard links={'/ProductDetails'} image={"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"}
      brand={"Dlce & Gabbana"}
      description={"cropped leaf-print shirt"}
      formattedPrice={"$796"}
      >

        <NavLink to={'/addcart'} title="Sign In"  type="submit" className="addcart-in_btn">
      <span>Add cart</span>
      <i className="fa-solid fa-cart-shopping"></i>
      </NavLink>
    </ProductCard>
    </div>
  )
}
