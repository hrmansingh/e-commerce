
import { Outlet } from 'react-router-dom'
import './App.css'
import NavLinks from './components/NavLinks'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <NavLinks logo={"E-commerce"} home={"Home"} products={'Products'} signIn={'Sign In'} Addcart={<i className="fa-solid fa-cart-shopping"></i>} />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
