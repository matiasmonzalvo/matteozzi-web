import React from 'react'
import '../globals.css'

const Footer = () => {
  return (
    <footer className="bg-teal-200 rounded-lg shadow mt-4 mx-20" data-scroll-section>
      <div className="flex flex-row justify-center items-center bg-teal-100 border-x-[1px] border-t-[1px] border-gray-500 rounded-t-2xl overflow-hidden pt-10 pb">
        <div className="w-[40%] flex flex-col items-start justify-center">
          <h2 className="text-[5vw] font-bold leading-[1]">Matteozzi<br/>Lavilla</h2>
          <span className="text-[1vw] text-black opacity-80 mt-[2vw] sm:text-center">© 2024 Matteozzi Lavilla. All Rights Reserved.</span>
        </div>
        <div className="w-[50%] flex flex-row items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Matteozzi Lavilla. All Rights Reserved.</span>
        </div>
      </div>

    </footer>
    
  )
}

export default Footer