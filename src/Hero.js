import React, { useEffect } from 'react'
import './hero.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Hero() {
  
  useEffect(() => {
    AOS.init({duration : 1000})
  }, [])  


  return (
    <div className='hero'>
      <div data-aos='fade-right' className='hero__title'>
        <h1>What's different about Shop-In</h1>
        <p>
             On-time delivery of your products to the door Step
             with easy returs with in 2-3 working days
        </p>
        
      </div>
      <div data-aos='fade-left' className='hero__info'>
        <div className='hero__data'>
            <h3><span className='hero__data__numbers'>01</span>  Track your products easily</h3>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque magni officiis. Voluptatum repellat quod doloribus a, obcaecati culpa molestiae 
                sunt omnis dolorem maiores iusto eum dignissimos  placeat facere. Sint?
            </p>
        </div>

        <div  className='hero__data'>
            <h3><span className='hero__data__numbers'>02</span>  Easy returns and refunds</h3>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque magni officiis. Voluptatum repellat quod doloribus a, obcaecati culpa molestiae 
                sunt omnis dolorem maiores iusto eum dignissimos placeat facere. Sint?
            </p>
        </div>

        <div className='hero__data'>
            <h3><span className='hero__data__numbers'>03</span> 24/7 Customer service team</h3>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque magni officiis. Voluptatum repellat quod doloribus a, obcaecati culpa molestiae 
                sunt omnis dolorem maiores iusto eum dignissimos placeat facere. Sint?
            </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
