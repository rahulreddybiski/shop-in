import React from 'react'
import './cartproduct.css'
import { useStateValue } from './StateProvider'
function Cartproduct({id,image,title,price}) {

 const [{cart},dispatch] = useStateValue();

 const removeFromCart = () => {
    dispatch({
        type : 'REMOVE_FROM_CART',
        id : id
    })
 }

  return (
    <div className='cartproduct'>
      <img className='cartproduct__image' src={image} />
      <div className='cartproduct__info'>
        <p>{title}</p>
        <p className='cartproduct__price'>$ {price}</p>
        <button onClick={removeFromCart} className='btn'>Remove From Cart</button>
      </div>

    </div>
  )
}

export default Cartproduct
