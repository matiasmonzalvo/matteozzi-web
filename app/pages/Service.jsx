import React from 'react'
import { GiCommercialAirplane, GiTruck, GiWorld } from 'react-icons/gi';

const Service = () => {
  return (
    <section className='w-screen h-screen flex items-center justify-center' data-scroll-section>
      <div className="w-full h-full p-20 flex flex-row justify-center items-center">
        <div className="w-full h-[95%] bg-white border-[3px] border-gray-300 rounded-2xl flex flex-col justify-start items-center" data-scroll data-scroll-direction="horizontal" data-scroll-speed="2">
          <div className="text-4xl p-8 rounded-full bg-black mt-16 text-white">
            <GiCommercialAirplane />
          </div>
          <h2 className='mt-[1.5vw] text-[2.25vw] w-[80%] text-black font-[800] text-center leading-[1]'>Despachante de aduana</h2>
          <p className='w-[80%] text-center text-[1.25vw] font-[700] text-black mt-[1.5vw] leading-[1.3]'>Ofrecemos despachos de importación, permisos de embarque, importaciones y exportaciones temporales, actividades bancarias, obtención de regímenes especiales, gestiones ante organismos oficiales, permisos de embarque para exportación, y asesoramiento en el área bancaria.</p>
        </div>
        <div className="w-full h-full bg-white border-[3px] border-gray-300 rounded-2xl z-20 relative flex flex-col justify-start items-center" data-scroll>
          <div className="text-4xl p-8 rounded-full bg-black mt-16 text-white">
            <GiTruck />
          </div>
          <h2 className='mt-[1.5vw] text-[2.25vw] w-[90%] text-black font-[800] text-center leading-[1]'>Agentes de transporte aduanero</h2>
          <p className='w-[80%] text-center text-[1.25vw] font-[700] text-black mt-[1.5vw] leading-[1.3]'>Ofrecemos trasbordos, seguros y fletes nacionales e internacionales, tránsitos terrestres y aéreos, reembarcos, permisos de transporte, y coordinación de embarques. También brindamos atención personalizada, confección de documentos de carga, gestión de vuelos internacionales en el Aeropuerto de S.C. de Bariloche, logística internacional multimodal y servicios de estiba.</p>
        </div>
        <div className="w-full h-[95%] bg-white border-[3px] border-gray-300 rounded-2xl flex flex-col justify-start items-center" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2">
          <div className="text-4xl p-8 rounded-full bg-black mt-16 text-white">
            <GiWorld />
          </div>
          <h2 className='mt-[1.5vw] text-[2.25vw] w-[90%] text-black font-[800] text-center leading-[1]'>Consultoría en comercio internacional</h2>
          <p className='w-[80%] text-center text-[1.25vw] font-[700] text-black mt-[1.5vw] leading-[1.3]'>Ofrecemos asesoría integral en comercio internacional, incluyendo análisis de costos, documentación, medios de pago, y asesoría legal aduanera. También gestionamos inscripciones para importadores y exportadores, y brindamos apoyo en regímenes promocionales y clasificaciones arancelarias.</p>
        </div>
      </div>
    </section>
  )
}

export default Service
