import React from 'react'
import Link from 'next/link'
import Header from '../Components/header';
import Image from 'next/image'
import { IoPerson } from "react-icons/io5";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";

function index() {
  return (
    <div>
     <Header />
     <section className="bg-white">
        <div className="container">
          <div className="p-3 flex flex-col gap-2 max-md:text-center">
            <span className='text-xl'>Marrakech Barcelone (Tous les aéroports)</span>
            <div className="flex gap-6 text-gray-400 max-md:justify-center">
              <span>Aller simple</span>
              <div className="flex gap-2 items-center">
                <div className="bg-yellow-300 w-1 h-1 rounded-full"></div>
                <span>8 nov.</span>
              </div>
              <div className="flex gap-2 items-center">
              <div className="bg-yellow-300 w-1 h-1 rounded-full"></div>
              <span>1</span>
              <IoPerson />
              </div>
            </div>
          </div>
        </div>
     </section>
      <section className='mt-10'>
        <div className="container">
          <div className="max-md:mx-4">
                <div className="flex jus items-center gap-4 text-lg max-md:text-sm">
                            <FaPlaneDeparture />
                            <span>Marrakech à destination de Barcelone (Tous les aéroports)</span>
                </div>
                <div className="bg-white grid justify-center items-center mt-3">
                    <div className="relative flex flex-col justify-center text-center border-x-2 px-8 py-2 cursor-pointer shadow-lg hover:shadow-sm	transition-all ">
                        <span className='text-sm'>08 nov.</span> 
                        <span className='text-xs text-gray-400'>vendredi</span> 
                        <span className='text-xl'>1.519,10 Dhs</span> 
                        <div className='absolute bottom-0 left-0 right-0 h-1 w-[100%] bg-yellow-300'></div> 
                    </div>
               </div>
               <div className="bg-white grid grid-cols-[auto,1fr,1fr] grid-rows-1 p-7 mt-3 max-md:grid-cols-1 max-md:grid-rows-[1fr,auto] ">
                  <div className="flex w-32 flex-col justify-center items-center mr-3 border-r-2 max-md:hidden">
                      <Image src="/main-logo.png" width={40} height={40} alt='' />
                      <span>Amine Air</span>
                  </div>
                  <div className="grid grid-cols-5 items-center border-r-2 ">
                          <div className="flex flex-col text-center">
                          <span className='text-2xl font-medium'>06:45</span>
                          <span className='text-xs'>Marrakech</span>
                          </div>
                          <div className="w-full h-1 bg-gray-300 rounded-xl"></div>
                          <div className="flex flex-col items-center">
                            <span>FR 2240</span>
                            <IoIosAirplane className='text-yellow-500' size={25}/>
                            <span>2h 25m</span>
                          </div>
                          <div className="w-full h-1 bg-gray-300 rounded-xl"></div>
                          <div className="flex flex-col text-center">
                            <span className='text-2xl font-medium'>06:45</span>
                            <span className='text-xs'>Marrakech</span>
                          </div>
                  </div>
                  <div className="grid grid-cols-2 grid-rows-[auto,1fr] px-5 gap-3">
                      <div className="col-span-2 flex justify-end">
                        <span className=' text-xs text-yellow-600 rounded-md py-1 px-3 bg-yellow-100'>3 cozbvo</span>
                      </div>
                      <div className="flex flex-col text-end">
                        <span className='text-xs text-gray-400'>Trafic Basic</span>
                        <span className='text-2xl font-semibold'>1.519,10 Dhs</span>
                      </div>
                      <div className="bg-yellow-300 flex items-center justify-center rounded-md">
                        <span>selectionner</span>
                      </div>
                  </div>
               </div>
               <div className="bg-white grid grid-cols-[auto,1fr,1fr] grid-rows-1 p-7 mt-3 max-md:grid-cols-1 max-md:grid-rows-[1fr,auto] ">
                  <div className="flex w-32 flex-col justify-center items-center mr-3 border-r-2 max-md:hidden">
                      <Image src="/main-logo.png" width={40} height={40} alt='' />
                      <span>Amine Air</span>
                  </div>
                  <div className="grid grid-cols-5 items-center border-r-2 ">
                          <div className="flex flex-col text-center">
                          <span className='text-2xl font-medium'>06:45</span>
                          <span className='text-xs'>Marrakech</span>
                          </div>
                          <div className="w-full h-1 bg-gray-300 rounded-xl"></div>
                          <div className="flex flex-col items-center">
                            <span>FR 2240</span>
                            <IoIosAirplane className='text-yellow-500' size={25}/>
                            <span>2h 25m</span>
                          </div>
                          <div className="w-full h-1 bg-gray-300 rounded-xl"></div>
                          <div className="flex flex-col text-center">
                            <span className='text-2xl font-medium'>06:45</span>
                            <span className='text-xs'>Marrakech</span>
                          </div>
                  </div>
                  <div className="grid grid-cols-2 grid-rows-[auto,1fr] px-5 gap-3">
                      <div className="col-span-2 flex justify-end">
                        <span className=' text-xs text-yellow-600 rounded-md py-1 px-3 bg-yellow-100'>3 cozbvo</span>
                      </div>
                      <div className="flex flex-col text-end">
                        <span className='text-xs text-gray-400'>Trafic Basic</span>
                        <span className='text-2xl font-semibold'>1.519,10 Dhs</span>
                      </div>
                      <div className="bg-yellow-300 flex items-center justify-center rounded-md">
                        <span>selectionner</span>
                      </div>
                  </div>
               </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default index