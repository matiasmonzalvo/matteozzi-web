import React from 'react'

const About = () => {
  return (
    <section className='w-screen h-screen flex items-center justify-center pt-32' data-scroll-section>
        <div className="w-full h-full">
            <div className='w-full h-[60%] relative flex flex-row justify-center gap-4 px-5 sm:px-10 md:px-20'>
                <img src="/hero2.jpg" className='flex-1 h-auto rounded-2xl' alt=""  data-scroll data-scroll-speed="6"/>
                <img src="/hero3.jpg" className='flex-1 h-auto rounded-2xl' alt=""  data-scroll data-scroll-speed="10"/>
                <div className="absolute top-[30%] left-[25%] w-[40%] h-full bg-black rounded-2xl" data-scroll data-scroll-speed="2">
                  <h1 className='text-white text-[3.5vw] font-[700] mt-6 ml-10'>Nosotros</h1>
                  <p className='text-white text-[1.65vw] font-[400] ml-10 w-[90%] leading-[1.2]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates officia odio beatae inventore neque voluptatibus blanditiis quaerat. Magnam minima veniam pariatur assumenda dolores commodi quos minus. Inventore, ipsam animi.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
