import React from 'react';
import project1 from '../../assets/project1.png'

const projects = [
  {
      id:1,
      img: project1,
      data: "E-Commerce Platform",
      info:"Build using MERN Stack. It is E-Commerce website for B2C and B2B support."
      
  },
  {
      id:2,
      img: project1,
      data: "E-Commerce Platform",
      info:"Build using MERN Stack. It is E-Commerce website for B2C and B2B support."
      
  },
  {
      id:3,
      img: project1,
      data: "E-Commerce Platform",
      info:"Build using MERN Stack. It is E-Commerce website for B2C and B2B support."
      
  },
]
  
const Services = () => {
  
  return (
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
            <div key={item}>
              <div className="bg-white border-solid hover:scale-105 shadow border-r-2 px-4 py-4">
                  <img src={project.img} alt='' className="w-100 h-100 rounded-lg" />
                  <h4 className='text-4xl font-sans text-center'>{project.data}</h4>
                  <p className='m-2'>{project.info}</p>
                  <a href="https://ka-solutions.vercel.app/" className='bg-primary px-2 py-2 rounded-full m-2 text-white font-semibold'>LIVE VIEW</a>
              </div>
            </div>
          ))
         }
        </div>
      </div>
    </div>
  )
}

export default Services
