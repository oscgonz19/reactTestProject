
import { useContext } from 'react'

import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'




export default function Home () {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
  if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
      return (
         context.filteredItems?.map(item =>(
          <Card key={item.id} data={item} />
              ))
      )
    } else {
        return (
          <div> Anything here ;( </div>
          )
      }
    } else { 
      return (
       context.items?.map(item =>(
                <Card key={item.id} data={item} />
              ))
        )
    }
  }

  return (
    <>
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'> Exclusive Products </h1>
      </div>
      <input 
      className='rounded-lg border border-black w-80 mb-4 p-4 focus:outline-none' 
      type='text' 
      placeholder='Search Product'
      onChange={(event)=> context.setSearchByTitle(event.target.value)}>

      </input>

      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
             renderView() 
            }
      </div>
      
    </Layout>
    
      </>
    )
  }
