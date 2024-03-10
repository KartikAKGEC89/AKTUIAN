import React from 'react'
import coffee from '../../assets/coffee2.png'

const Home = () => {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white '>
      <div className='container pb-8 sm:pb-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>We serve best
              IT Solutions and our developers like coffee for code</h1>
            <div className='text-white overflow-hidden'>
              <button className='bg-primary px-4 py-2 rounded-full hover:scale-105 duration-100 m-2'>Contact Us</button>
            </div>
          </div>
          <div className='overflow-hidden min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative'>
            <img src={coffee} alt='COFFEE' className='scale-110 spin' />
            <div className='text-white overflow-hidden'>
              <button className='bg-primary px-4 py-2 rounded-full hover:scale-105 duration-100 top-10 left-10 p-3 absolute'> Learn from our developer</button>
            </div>
            <div className='text-white overflow-hidden'>
              <button className='bg-primary px-4 py-2 rounded-full hover:scale-105 duration-100 bottom-10 right-10 p-3 absolute'>Disscuss with our developer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home