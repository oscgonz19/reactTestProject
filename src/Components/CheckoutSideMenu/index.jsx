
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import {XMarkIcon} from '@heroicons/react/24/solid'


import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'


import { totalPrice } from '../../utils' 

import  './style.css'


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            product: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),

        }
        
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setCount(0);
    }

    return (
        <aside 
        className= { `${context.isCheckoutSideMenu? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>
                My Order 
            </h2>
                <button>
                    <XMarkIcon className= 'h-6 w-6 text-blue-500 cursor-pointer'
                    onClick={() => context.closeCheckoutSideMenu()}
                    > </XMarkIcon>
                </button>
            </div>
            <div className='px-6 overflow-y-scroll flex-1 mb-6'>
        
            {
                context.cartProducts.map(product =>(
                <OrderCard 
                key ={product.id}
                id ={product.id}
                title={product.title} 
                imageUrl ={product.image}
                price ={product.price}
                handleDelete={handleDelete}
                />
                ))
            }
             </div>
                <div className='px-6'>
                    <p className='flex justify-between items-center mb-2'>
                    <span className='font-line'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                    </p>
                    <Link to='/my-orders/last'>
                    <button className='bg-black w-full py-3 text-white rounded' onClick={() => handleCheckout()}>CheckOut</button>
                    </Link>
                        
                </div> 
        </aside>
    )
}

export default CheckoutSideMenu 