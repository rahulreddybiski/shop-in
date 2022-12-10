import {allTimeFavProducts} from './Helpers/AlltimeFavourate'
import Favouriteproduct from './Favouriteproduct'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './favouriteproducts.css'

function Favouriteproducts() {
  useEffect(() => {
    AOS.init({duration : 1000})
  })
  return (

    <div className='favouriteproducts'>
      <div data-aos='fade-down' className='favouriteproducts__title'>
        <h1>ALL TIME FAVORITES!</h1>
      </div>

      <div data-aos='fade-left' className='favouriteproducts__info snap-inline'>
        {
            allTimeFavProducts.map(item => (
                <Favouriteproduct  
                    key={item.id}
                    id={item.id}
                    image = {item.image}
                    title={item.title}
                    price ={item.price}
                    rating = {item.rating.rate}
                    count = {item.rating.count}
                    sale={item.sale}
                    description = {item.description}
                />
            ))
        }
      </div>
    </div>
  )
}

export default Favouriteproducts
