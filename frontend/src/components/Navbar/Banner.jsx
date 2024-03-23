import React from 'react'
import Bannerpic from '../../assets/coffeetexture.jpg'
import BannerPic2 from '../../assets/coffee-white.png'

const bgImage = {
  backgroundImage: `url(${Bannerpic})`,
  backgroundColor: '#270c03',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: "100%",
  height: "100%"
}

const Banner = () => {
  return (
    <>
      <div style={bgImage} className='mt-4 flex'
      data-aos="fade-out"
      data-aos-delay="600"
      >
        <div>
          <img src={BannerPic2} alt='BannerPic' style={{
            height: '80%'
          }}/>
        </div>
        <div className='text-center m-28'>
          <p className='text-3xl sm:text-4xl font-bold'>
            Chai with Code: Brewing Brilliance One Sip at a Time!
          </p>
          <ul className='text-left m-8 text-gray-900 font-semibold text-xl list-disc'>
            <li>
            Software Development
            </li>
            <li>
              IT Consulting
            </li>
            <li>
              Cloud Solutions
            </li>
            <li>
              Cybersecurity
            </li>
          </ul>
        </div>
      </div>
      <div
      data-aos="fade-out"
      data-aos-delay="600"
      >
        <h1 className="text-4xl m-4 text-black font-semibold text-center"> Our Team Members </h1>
        <div className='flex'>
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 m-4">
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="" alt="Face" />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Kartik Tyagi
            </p>
            <p className="text-slate-500 font-medium">
              Software Development Engineer
            </p>
          </div>
          <button className="px-4 py-1 text-sm bg-primary font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-primaryhover:border-transparent focus:outline-none focus:ring-2 focus:bg-primary focus:ring-offset-2">Message</button>
        </div>
      </div>
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 m-4">
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="" alt="Face" />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Kartik Tyagi
            </p>
            <p className="text-slate-500 font-medium">
              Software Development Engineer
            </p>
          </div>
          <button className="px-4 py-1 text-sm bg-primary font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-primaryhover:border-transparent focus:outline-none focus:ring-2 focus:bg-primary focus:ring-offset-2">Message</button>
        </div>
      </div>
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 m-4">
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="" alt="Face" />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Kartik Tyagi
            </p>
            <p className="text-slate-500 font-medium">
              Software Development Engineer
            </p>
          </div>
          <button className="px-4 py-1 text-sm bg-primary font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-primaryhover:border-transparent focus:outline-none focus:ring-2 focus:bg-primary focus:ring-offset-2">Message</button>
        </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Banner
