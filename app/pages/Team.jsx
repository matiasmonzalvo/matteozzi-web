import React from 'react'

const Team = () => {
  return (
    <section className='w-screen h-auto flex items-center justify-center' data-scroll-section>
      <div className="flex flex-col w-full h-full p-20 justify-center items-start">
        <div className="w-auto"><h1 className="text-[5vw] font-[800]">Our Team</h1></div>
        <div className="flex flex-col w-full h-full relative gap-2">
          <div className="w-[55%] h-full bg-teal-100 border-[1px] border-gray-500 rounded-2xl ml-[5vw] flex flex-row px-10 items-center py-4" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
            <div className="w-[17.5%] h-auto overflow-hidden rounded-full border-[1px] border-gray-900">
              <img src="/marzorati.jpg" alt="" />
            </div>
            <div className="w-[70%] ml-[2.5vw] text-black">
              <span>CEO</span>
              <h3 className='text-[2vw] font-[700]'>Emiliano Matteozzi</h3>
              <p className='font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed?</p>
            </div>
          </div>
          <div className="w-[55%] h-full bg-teal-100 border-[1px] border-gray-500 rounded-2xl ml-[15vw] flex flex-row px-10 items-center py-4" data-scroll data-scroll-speed="4" data-scroll-direction="horizontal">
            <div className="w-[17.5%] h-auto overflow-hidden rounded-full border-[1px] border-gray-900">
              <img src="/matteozzi.jpg" alt=""/>
            </div>
            <div className="w-[70%] ml-[2.5vw] text-black">
              <span>CEO</span>
              <h3 className='text-[2vw] font-[700]'>Cesar Matteozzi</h3>
              <p className='font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed?</p>
            </div>
          </div>
          <div className="w-[55%] h-full bg-teal-100 border-[1px] border-gray-500 rounded-2xl ml-[25vw] flex flex-row px-10 items-center py-4" data-scroll data-scroll-speed="6" data-scroll-direction="horizontal">
            <div className="w-[17.5%] h-auto overflow-hidden rounded-full border-[1px] border-gray-900">
              <img src="/monzalvo.jpg" alt="" />
            </div>
            <div className="w-[70%] ml-[2.5vw] text-black">
              <span>CEO</span>
              <h3 className='text-[2vw] font-[700]'>Stella Lavilla</h3>
              <p className='font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed?</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Team