
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import SignIn from './components/SignIn.jsx'
import Addcart from './components/Addcart.jsx'
import SignUp from './components/SignUp.jsx'
import ProductDetails from './components/ProductDetails.jsx'


const router = createBrowserRouter([

  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/products",
        element: <Products/>
      },
      {
        path:"/signIn",
        element: <SignIn/>,
      },
      {
        path:"/signUp",
        element: <SignUp/>,
      },
      {
        path:"/Addcart/",
        element: <Addcart/>
      },
      {
        path:"/Addcart/:id",
        element: <Addcart/>
      },
      {
        path:"/ProductDetails/:id",
        element: <ProductDetails/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
