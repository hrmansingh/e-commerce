import { NavLink } from "react-router-dom";



export default function NavLinks({logo,home,products,signIn,Addcart}) {
  return (
    <header className="container">
        <nav className="nav-container">
            <div className="logo">{logo}</div>
                <div className="nav-link01">
              <ul>
                    <li><NavLink to='/'>{home}</NavLink></li>
                    <li><NavLink to='/products' >{products}</NavLink></li>
              </ul>
                </div>
            <div className="navLink">
                <ul>
                    <li><NavLink to='/signIn'>{signIn}</NavLink></li>
                    <li><NavLink to='/Addcart'>{Addcart}</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
