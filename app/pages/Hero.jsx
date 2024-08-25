import React from 'react'
import '../globals.css'

const Hero = () => {
  return (
    <section className='w-screen h-screen flex items-center justify-center overflow-hidden' data-scroll-section>
        
        <div className='w-full h-auto flex flex-row items-center justify-start relative px-20'>
            <div className="flex flex-col justify-center lg:w-[60%] h-auto px-5 py-10 bg-teal-100 border-[1px] border-gray-500 rounded-2xl">
                <h1 className='text-5xl font-[700] m-0 p-0 leading-[0.9] w-[60%]'>Comercio Internacional</h1>
                <p className='mt-4 text-[1.25vw] leading-[1.1] w-[100%]'>¿Estás interesado en importar-exportar o deseas una mejor alternativa para optimizar tu operativa de comercio exterior? Ya sea que estés buscando expandir tus horizontes comerciales, explorar nuevos mercados internacionales o simplemente mejorar la eficiencia y reducir costos en tus operaciones actuales, estamos acá para ayudarte.</p>
                <div className='mt-6'>
                    <a href='#' className='px-4 py-2 bg-black opacity-100 text-white rounded-md text-[1.25vw] hover:bg-neutral-800 transition duration-200 ease-in-out'>Ponete en contacto</a>
                </div>
            </div>
            <div className="lg:w-[42.75%] h-full absolute right-0 mr-10 z-[-1]">
                <img className='w-auto h-full rounded-2xl border-[1px] border-gray-500' src="/hero.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero
