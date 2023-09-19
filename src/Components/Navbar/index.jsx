import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

let menu1 = [
    {
        to: '/',
        text: 'DataShop',
        className: 'font-semibold text-lg'
    },
    {
        to: '/electronics',
        text: 'electronics',
        className: ''
    },
    {
        to: '/jewelery',
        text: 'jewelery',
        className: ''
    },
    {
        to: '/shop-all',
        text: 'Shop All',
        className: ''
    }
]

let menu2 = [
    {
        to: '/',
        text: 'FAQ',
        className: 'text-black/60'
    },
    {
        to: '/',
        text: '',
        className: ''
    },
    {
        to: '/',
        text: 'My Account',
        className: ''
    },
    {
        to: '/',
        text: 'Sign in',
        className: ''
    }
]

const Navbar = () => {

    const context =useContext(ShoppingCartContext)
    const textDecoration = 'underline underline-offset-4'

  return (
    <nav className=" flex items-center justify-between fixed z-10 w-full top-0 py-5 px-8 text-sm font-light">
        <ul className='flex gap-3 items-center'>
            {menu1.map(link => (
                <li 
                    key={link.text}
                    className={link.className}
                >
                    <NavLink 
                        to={link.to}
                        onClick={() => context.setSearchByCategory(link.text)}
                        className={({isActive})=> isActive ? textDecoration : undefined }
                    >
                        {link.text}
                    </NavLink>
                </li>
            ))}
        </ul>
        <ul className='flex gap-3 items-center'>
            {menu2.map(link => (
                <li 
                    key={link.text}
                    className={link.className}
                >
                    <NavLink 
                        to={link.to}
                        className={({isActive})=> isActive ? textDecoration : undefined }
                    >
                        {link.text}
                    </NavLink>
                </li>
            ))}
            <li className='flex'>
              <ShoppingBagIcon className='h-6 w-6 text-black'>{context.count}</ShoppingBagIcon> 
              <div>{context.count}</div>
            </li>
        </ul>
    </nav>
  )
}
export default Navbar