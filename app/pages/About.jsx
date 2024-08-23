import React from 'react'

const About = () => {
  return (
    <section className='w-screen h-screen flex items-center justify-center' data-scroll-section>
        <div className="w-full h-full">
            <div className='w-full h-[60%] relative flex flex-row justify-center gap-4'>
                <img src="/hero2.jpg" className='w-auto h-full rounded-2xl' alt=""  data-scroll data-scroll-speed="8"/>
                <img src="/hero3.jpg" className='w-auto h-full rounded-2xl' alt=""  data-scroll data-scroll-speed="4"/>
                <div className="absolute top-[30%] left-[25%] w-[40%] h-full bg-green-500 rounded-2xl" data-scroll data-scroll-speed="1">

                </div>
            </div>
        </div>
    </section>
  )
}

export default About