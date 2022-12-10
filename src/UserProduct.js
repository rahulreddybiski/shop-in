import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import './userproduct.css'

function UserProduct({id,image,title,price,description,rating,count}) {
 
  const [{cart, product},dispatch] = useStateValue();
  
  const addToCart = () =>{
      dispatch({
        type : 'ADD_TO_CART',
        item : {
          id : id,
          image : image,
          title : title,
          price : price
        }
      })
  }

  const removeFromCart = () => {
    dispatch({
      type:'REMOVE_FROM_CART',
      id : id
    })
  }
 
 
  return (
    <div className='product'>
       <div className='product'>
      <img className='product__image' src={image} />
      <div className='product__info'>
        <h4 className='product__title'>{title}</h4>
        <h3><span className='product__price'>$ 100.99 </span>${price}.00</h3>
        <p className='product__description'>{description}</p>
        <div className='product__rating'>

        {
          Array(product.rating).fill().map((_) => (
            <p>★</p>
          ))
        }
        <p>({count} reviews)</p>
        </div>
      </div>
      <div className='product__buttons'>

      {
       cart.some(p => p.id == id) ? (
        <>
          <Link to='/cart'>
            <button className='btn'>GoTo Cart</button>
          </Link>
          <button onClick={removeFromCart} className='remove_btn'>Remove From Cart</button>
        </>
       ) : (
          <button onClick={addToCart} className='btn'>Add To Cart</button>
       )
      }
      </div>
    </div>
    </div>
  )
}

export default UserProduct
