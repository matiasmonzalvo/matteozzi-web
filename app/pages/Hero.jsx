import React from 'react'

const Hero = () => {
  return (
    <section className='w-screen h-screen flex items-center justify-center overflow-hidden' data-scroll-section>
        
        <div className='w-full h-full flex flex-row items-center justify-start px-20'>
            <div className="flex flex-col justify-center lg:w-7/12 h-full pr-20">
                <h1 className='text-5xl font-[700] m-0 p-0 leading-[0.9]'>Comercio Internacional</h1>
                <p className='mt-4 text-[2vw] leading-[1.1]'>¿Estás interesado en importar-exportar o deseas tener una mejor alternativa en su operativa de comercio exterior?</p>
                <div className='mt-6'>
                    <a href='#' className='px-4 py-2 bg-black opacity-100 text-white rounded-2xl text-[1.5vw]'>Ponete en contacto</a>
                </div>
            </div>
            <div className="lg:w-[50%] h-auto py-[6.5vw] absolute right-20 z-[-1]">
                <img className='w-FULL h-auto rounded-r-2xl' src="/hero.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero
