import { useState } from "react"

export default function Footer() {
    const [date,setDate]= useState(new Date);

  return (
    <footer>
        <div className="footer">

        <div className="footer-container">
            {/* <div className="col-1">
                <img src="/" alt="add image"/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, maxime molestias sapiente labore doloribus ut animi, tenetur, aliquid quaerat praesentium obcaecati laudantium!
                </p>
            </div> */}
            <div className="col-2">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </div>
            <div className="col-3">
                <h3>Services</h3>
                <ul>
                    <li><a href="#">T-shirt</a></li>
                    <li><a href="#">Jeans</a></li>
                    <li><a href="#">Anime Collections</a></li>
                    <li><a href="#">Sports gears</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Sunglasses</a></li>
                </ul>
            </div>
            <div className="col-4">
                <h3>Contact Us</h3>
                <form>
                    <i className="far fa-envelope"></i>
                    <input type="email" placeholder="Enter your email" required />
                    <button><i className="fas fa-arrow-right"></i></button>
                </form>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div className="footer-2">
            <p>© {date.getFullYear()} E-commerce Site. All Rights Reserved.</p>
        </div>
        </div>
    </footer>
)
}
