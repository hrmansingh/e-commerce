
import { Outlet } from 'react-router-dom'
import './App.css'
import NavLinks from './components/NavLinks'
import Footer from './components/Footer'
import {Provider} from 'react-redux';
import { store } from './redux/store';
function App() {

  return (
    <>
    <Provider store={store}>

      <NavLinks logo={"E-commerce"} home={"Home"} products={'Products'} signIn={'Sign In'} Addcart={<i className="fa-solid fa-cart-shopping"></i>} />
      <Outlet/>
      <Footer/>
    </Provider>
    </>
  )
}

export default App
