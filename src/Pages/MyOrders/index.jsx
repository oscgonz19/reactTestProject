import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"

import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext} from "../../Context"

function MyOrders () {
  const context = useContext(ShoppingCartContext)
  
  
  return (
    <>
      <Layout>
        <div className='flex w-80 items-center justify-center relative mb-4'>
            <Link to='/my-orders' className='absolute left-0'>
                <ChevronLeftIcon className= 'h-6 w-6 text-black cursor-pointer'>
                    </ChevronLeftIcon>
                    </Link>
           
            <h1 className='font-medium text-xl'>My Orders </h1>

        </div>
       
        { context.order.map((order, index)=>(
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard 
                    totalPrice ={order.totalPrice} 
                    totalProducts={order.totalProducts} />
                </Link>
            ))
        }

      </Layout>
      
    </>
  )
}

export default MyOrders