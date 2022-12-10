import React from 'react'
import Header from './Header';
import { useStateValue } from './StateProvider'
import UserProduct from './UserProduct';

function Product() {
  const [{product}] = useStateValue();
  
  return (
   <div className='product'>
    <Header />
    {
      product !== null ? (
        <UserProduct
      key = {product.id}
      id={product.id} 
      image={product.image}
      title={product.title}
      price = {product.price}
      description={product.description}
      product = {product.rating}
      count = {product.count}
   />
      ) : (
        <h2>No Products</h2>
      )
    }
   </div>
   
  )
}

export default Product
