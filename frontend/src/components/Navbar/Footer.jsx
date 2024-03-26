import React from 'react'
import Bgpic from '../../assets/Coffebg.png'

const bgfooter = {
  backgroundImage: `url(${Bgpic})`,
  backgroundColor: '#270c03',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: "100%",
  height: "100%"
}

const Footer = () => {
    return (
    <>
            <div style={bgfooter}
            data-aos="fade-out"
            data-aos-delay="800"
            >
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    <div>
                        <h1 className=' text-white text-xl font-extrabold ml-64 mt-8 mb-4'> Services </h1>
                        <p className=' text-white ml-64 hover:scale-x-105'> APP Development</p>
                        <p className=' text-white ml-64 hover:scale-x-105'> Web Development</p>
                        <p className=' text-white ml-64 hover:scale-x-105'> Cloud Computing</p>
                        <p className=' text-white ml-64 hover:scale-x-105'> Cyber Security</p>
                    </div>
                    <div>
                        <h1 className=' text-white text-xl font-extrabold ml-64 mt-8 mb-4'> Find Us </h1>
                        <p className=' text-white ml-64 hover:scale-x-105'> 9/8/12, Swaroop Nagar</p>
                        <p className=' text-white ml-64 hover:scale-x-105'> Delhi- 110042</p>
                    </div>
                </div>

                <br></br>
                <br></br>
                <p className=' text-white ml-64'>© 2024 Codewithchai – ALL RIGHTS RESERVED. PRIVACY POLICY</p>
       </div>
    </>
  )
}

export default Footer