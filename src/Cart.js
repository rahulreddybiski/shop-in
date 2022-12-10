import React from 'react'
import { BsBasket } from 'react-icons/bs';
import Cartproduct from './Cartproduct';
import { useStateValue } from './StateProvider'

function Cart() {
  const [{cart}] = useStateValue();
  return (
    <div className='cart'>
        <div className='cart__left'>

        {
            cart?.length === 0 ? (
                <h3 className='cart__empty'>
                    No products in the cart. Go back to homescreen to add the products to cart
                </h3>
            ) : (
                cart.map(cartProduct => (
                    <Cartproduct 
                        id={cartProduct.id}
                        image={cartProduct.image}
                        title={cartProduct.title}
                        price={cartProduct.price}
                    />
                ))
            )
        }
        </div>

    </div>
  )
}

export default Cart
