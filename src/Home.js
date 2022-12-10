import React from 'react'
import bgimage from './img/bg-img.jpg'
import './home.css'
import {Link} from 'react-router-dom'
import Favouriteproducts from './Favouriteproducts'
import { useStateValue } from './StateProvider'
import Hero from './Hero'
import Newsletter from './Newsletter'
import Sale from './Sale'


function Home() {
  const [{user, cart}] = useStateValue()
  
  return (
    <>
    <div className='home'> 
        <img className='home__image' src={bgimage} />
        <div className='home__info'>
            <h1>Get UpTo 50% Off on Your First Order</h1>
            {
              user? (
                <h3>Use Code : GET50</h3>
              ) : (
                <Link to='/login'>
                <button className='btn'>Sign Up</button>
                </Link>
              )
            }
           
        </div>
    </div>
    
    <Hero />
    <Sale />
    <Favouriteproducts />
    <Newsletter />

    </>

  )
}

export default Home
