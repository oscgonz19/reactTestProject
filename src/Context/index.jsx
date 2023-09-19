import { createContext, useState, useEffect } from 'react';


export const ShoppingCartContext = createContext()

// Shopping Card - Increment quantify
export const ShoppingCartProvider = ({children}) =>{
    const [count, setCount] = useState(0)


//product Detail Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

//Checkout Side menu Open/close
    const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false)

    
// Product Detail Show product 
    const [productShow, setProductShow] = useState({})

// Shopping cart - Add products to card
    const [cartProducts, setCartProducts] = useState([])

// Shopping cart - Order
    const [order, setOrder] = useState([])


// get products
    const [items, setItems] = useState()
  
//filter items
    const [filteredItems, setFilteredItems] = useState()

  
//Get product search by title
    const [searchByTitle, setSearchByTitle] = useState()
    
//Search by category
     const [searchByCategory, setSearchByCategory] = useState()


    useEffect(() => { 
    fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(data=>setItems(data))
                
    },  [])


    const filteredItemsByTitle = (items, searchByTitle) => {
        return (items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        )
    }
    const filteredItemsByCategory = (items, searchByCategory) => {
        return (items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
        )
    }
    
    useEffect(() => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle)) 
        if(searchByCategory) setFilteredItems(filteredItemsByCategory(items, searchByCategory))         
    }, [items, searchByTitle, searchByCategory])

 

    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productShow,
            setProductShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenu,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
        {children}  
        </ShoppingCartContext.Provider>
        
    )
} 