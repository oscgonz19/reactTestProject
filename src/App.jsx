import {BrowserRouter, useRoutes} from 'react-router-dom'
import { ShoppingCartProvider } from './Context'



import Home from './Pages/Home'
import ShopAll from './Pages/ShopAll'
import MyAccount from './Pages/MyAccount'
import MyOrder from './Pages/MyOrder'
import MyOrders from './Pages/MyOrders'
import Navbar from './Components/Navbar'
import CheckoutSideMenu from './Components/CheckoutSideMenu'
import './App.css'
import './index.css'

const AppRoutes = () => {
  let routes = useRoutes ([
  {path: '/', element :<Home />},
  {path: '/shop-all', element :<ShopAll />},
  {path: '/electronics', element :<Home />},
  {path: '/jewelery', element :<Home />},
  {path: '/my-orders/:id', element :<MyOrder />},
  {path: '/my-orders/', element :<MyOrders />},
  {path: '/my-account', element :<MyAccount />}
])
return routes
}


function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
      <AppRoutes />
      <Navbar />
      <CheckoutSideMenu/>
      </BrowserRouter>
   </ShoppingCartProvider>
  )
}

export default App
