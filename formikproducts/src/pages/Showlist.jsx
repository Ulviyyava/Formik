import React from 'react'
import Product from './Product'

const Showlist = () => {
   const product = JSON.parse(localStorage.getItem('products'))
  return (
    <div className='row'>
        {
            product.map(x => {
                return(
                    <Product
                    key={x.price}
                    name = {x.name}
                    price = {x.price}
                    image = {x.url}
                    />
                    
                )
            })
        }
    </div>
  )
}

export default Showlist