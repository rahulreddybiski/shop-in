import React from 'react'
import './favouriteproduct.css'
import saleImage from './img/sale.png'
import { useStateValue } from './StateProvider'
import {useNavigate} from 'react-router-dom'
function Favouriteproduct({id,image,title,description,price,rating,count,sale}) {
    const [{product,user},dispatch] = useStateValue();
    const navigate = useNavigate()
    
   const selectedProduct = () => {
    dispatch({
        type : 'SELECTED_PRODUCT',
        productDetails : {
            id : id,
            image : image,
            title : title,
            price : price,
            rating : rating,
            count : count,
            description : description
        } 
    })
   }

   const navigateToProduct = () => {
        navigate('/product')
   }

   const randomPrice = Math.floor((Math.random() * (150-300 + 1) + 150))

    return (
    <div onClick={selectedProduct} className='favouriteproduct'>
             <img className='favouriteproduct__product' src={image} alt=""/>
             {
              sale &&  <img className='favouriteproduct__sale' src={saleImage}/>
             }
      <div onClick={navigateToProduct} className='favouriteproduct__info'>
        <h4 className='favouriteproduct__title'>{title}</h4>
        <h3><span className='favouriteproduct__discount'>$ {randomPrice}.99 </span>${price}</h3>
      </div>
    </div>
  )
}

export default Favouriteproduct
