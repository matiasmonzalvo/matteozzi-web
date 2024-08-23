import React from 'react'

const Hero = () => {
  return (
    <section className='w-screen h-screen flex items-center justify-center' data-scroll-section>
        <div className='w-full h-full flex flex-row items-center justify-start px-20'>
            <div className="flex flex-col justify-center lg:w-2/3 h-full">
                <h1 className='text-5xl font-[700] m-0 p-0 leading-[1]'>Alternativas para comercio exterior</h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora hic tenetur at optio obcaecati! Dolor cum harum ut magni consectetur consequuntur. Amet, dignissimos veniam? Dolorum, eaque pariatur. Amet, laboriosam vitae.</p>
                <div className='mt-6'>
                    <a className='px-4 py-2 bg-blue-500 text-white rounded-3xl'>Contacto</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
