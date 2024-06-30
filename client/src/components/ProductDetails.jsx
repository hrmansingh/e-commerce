import { NavLink, useLocation } from "react-router-dom";
export default function ProductDetails() {
   let location = useLocation();
   console.log(location.state)
  return (
    <section className="product-details-container">
       <div className="img-details">
    <img className="product-img" src={'https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg'} alt="img" />
       </div>

       <div className="product-content">
        <h1 className="product-detail-title">Title</h1>
        {/* <h5 className="product-detail-sub-title">Sub Title</h5> */}
        <div className="product-details-description">
            <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, cumque?</p>
        </div>
        <div className="price">
        <p className="product-price">$399</p>
        </div>
        <div className="buy-now-btn">
        <NavLink to={'/addcart'} title="Sign In"  type="submit" className="buynow-in_btn">
        <span>Buy Now</span>
        <i className="fa-solid fa-bag-shopping"></i>
        </NavLink>
        </div>
           <div className="description-forProduct">
            <h3 className="description-title-content">Description</h3>
            <p className="description-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum sed deserunt adipisci in minus vel reiciendis veritatis ipsa velit magnam, assumenda nisi dolores facilis voluptas eaque et ea autem vitae, aliquam mollitia ab sit minima. Perspiciatis veritatis quisquam quaerat delectus aliquam, architecto, harum dolores voluptatem officiis culpa quasi tenetur odit accusamus quo, minima sapiente doloribus dolor mollitia temporibus itaque blanditiis rem. Sit inventore possimus eius fuga sequi quis doloribus. Amet quos, dicta unde doloremque at ex, temporibus fugit, labore quaerat laboriosam doloribus. Incidunt cumque corrupti officiis corporis similique facere nobis, debitis fuga inventore omnis soluta cupiditate deserunt temporibus totam excepturi alias. Quas non eveniet vero animi repellendus obcaecati accusantium fugiat atque quae est, nihil culpa minima quidem enim dicta fuga eaque voluptas illo magni soluta incidunt explicabo quibusdam! Architecto, sint voluptatem sed nam, veritatis at temporibus veniam repellendus, dolor quam nostrum! Quod quidem quia deserunt enim debitis tenetur asperiores quibusdam sapiente molestias expedita, ullam quas repellat voluptate similique deleniti assumenda voluptatibus earum totam magni, necessitatibus recusandae et ducimus, tempore quisquam. Maxime minima mollitia et nihil aliquid ipsa animi ut, maiores quae sequi deserunt veniam. Velit laudantium harum dolorum fugiat, molestias modi non, nesciunt, provident nulla accusantium earum sint distinctio magni!</p>
           </div>
       </div>

    </section>
  )
}
