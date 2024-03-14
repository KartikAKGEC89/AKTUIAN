import React from 'react';
import project1 from '../../assets/project1.png'

const projects = [
  {
      id:1,
      img: project1,
      data: "E-Commerce Platform",
      info:"Build using MERN Stack. It is E-Commerce website for B2C and B2B support.",
      aosdelay:"400"
      
  },
  {
      id:2,
      img: project1,
      data: "E-Commerce Platform",
      info:"Build using MERN Stack. It is E-Commerce website for B2C and B2B support.",
      aosdelay:"600"      
  },
  {
      id:3,
      img: project1,
      data: "E-Commerce Platform",
      info:"Build using MERN Stack. It is E-Commerce website for B2C and B2B support.",
      aosdelay:"800"      
  },
]
  
const Services = () => {
  
  return (
    <>
      <span id='services'></span>
    <div>
      <div className='container'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold py-2 font-sans'>
            Projects we build for our customers
          </h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-4 place-content-center gap-4'>
         {
            projects.map((project, item) => (
              <div
                data-aos="fade-out"
                data-aos-delay={project.aosdelay}
                key={item}>
              <div className="bg-white border-solid hover:scale-105 shadow px-4 py-4 border-r-2 rounded">
                  <img src={project.img} alt='' className="w-100 h-100 rounded-lg" />
                  <h4 className='text-4xl font-sans text-center'>{project.data}</h4>
                  <p className='m-2'>{project.info}</p>
                  <a href="https://ka-solutions.vercel.app/" className='bg-primary px-2 py-2 rounded-full m-2 text-white font-semibold hover:bg-black'>LIVE VIEW</a>
              </div>
            </div>
          ))
         }
        </div>
      </div>
      </div>
      </>
  )
}

export default Services
