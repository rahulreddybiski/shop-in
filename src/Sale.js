import React, { useEffect, useState } from 'react'
import './sale.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Sale() {
    const endTime = new Date("dec 25, 2022 00:00:00").getTime();
    const [currentTime, setCurrentTime] = useState(new Date().getTime());
    const remainingTime = endTime - currentTime;
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    useEffect(() => {
        setTimeout(() => setCurrentTime(new Date().getTime()),1000)
    },[currentTime])

    useEffect(() => {
        AOS.init({duration : 1000})
    },[])

    return (
        <div className='sale'>
            <div className='sale__info'>
                <h1 data-aos='fade-up' className='sale__starts'>Sale Starts In  {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds</h1>
            </div>
        </div>
    )
}

export default Sale
