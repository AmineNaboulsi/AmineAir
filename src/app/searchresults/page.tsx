'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../Components/header';
import Image from 'next/image'
import { FaPlaneDeparture } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import StatusInfo from '../Components/statusinfo';
import { useRouter } from 'next/navigation';

type VolM = { id: number,
   airline: string,
   departureTime: string,
   origin: string,
   destination: string,
   flightNumber: string,
   duration: string,
   arrivalTime: string,
   price: number,
   seatAvailability: number};

function SerchResultat() {

  const [Vols , setVols] = useState<VolM[]>();
  
  const router = useRouter();
  const searchdata = JSON.parse(localStorage.getItem('vatavols'));
  useEffect(()=>{
    fetch('/api/vols')
    .then(res=>res.json())
    .then(data=>{
      setVols(data); 
      setVols(pre=>pre?.filter((item)=>{
        if(searchdata.CityStart.toLowerCase().trim() != "" && searchdata.CityEnd.toLowerCase().trim() != ""){
          return (
          item.origin.toLowerCase().trim().includes(searchdata.CityStart.toLowerCase().trim()) &&
            item.destination.toLowerCase().trim().includes(searchdata.CityEnd.toLowerCase().trim()))
        }
        else if(searchdata.CityStart.toLowerCase().trim() != ""){
          return (searchdata.CityStart.toLowerCase().trim() != "" &&
          item.origin.toLowerCase().trim().includes(searchdata.CityStart.toLowerCase().trim()))
        } 
        else return false;  
        
      }
        
      //   || 
      //   
      // )
      )
      ) 
    }
    )
  },[]);
  return (
    <div>
     <Header />
     <StatusInfo />
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
               {Vols && Vols.map((item)=>(
                <>
                    <div className="bg-white grid grid-cols-[auto,1fr,1fr] grid-rows-1 p-7 mt-3 max-md:grid-cols-1 max-md:grid-rows-[1fr,auto] ">
                  <div className="flex w-32 flex-col justify-center items-center mr-3 border-r-2 max-md:hidden">
                      <Image src="/main-logo.png" width={40} height={40} alt='' />
                      <span>{item.airline}</span>
                  </div>
                  <div className="grid grid-cols-5 items-center border-r-2 ">
                          <div className="flex flex-col text-center">
                          <span className='text-2xl font-medium'>{item.departureTime}</span>
                          <span className='text-xs'>{item.origin}</span>
                          </div>
                          <div className="w-full h-1 bg-gray-300 rounded-xl"></div>
                          <div className="flex flex-col items-center">
                            <span>{item.flightNumber}</span>
                            <IoIosAirplane className='text-yellow-500' size={25}/>
                            <span>{item.duration}</span>
                          </div>
                          <div className="w-full h-1 bg-gray-300 rounded-xl"></div>
                          <div className="flex flex-col text-center">
                            <span className='text-2xl font-medium'>{item.arrivalTime}</span>
                            <span className='text-xs'>{item.destination}</span>
                          </div>
                  </div>
                  <div className="grid grid-cols-2 grid-rows-[auto,1fr] px-5 gap-3">
                      <div className="col-span-2 flex justify-end">
                        <span className=' text-xs text-yellow-600 rounded-md py-1 px-3 bg-yellow-100'>{item.seatAvailability} seats</span>
                      </div>
                      <div className="flex flex-col text-end">
                        <span className='text-xs text-gray-400'>Trafic Basic</span>
                        <span className='text-2xl font-semibold'>{parseInt(item.price)} Dhs</span>
                      </div>
                      <div onClick={()=>{
                          router.push(`/booking?id=${item.id}`);
                          localStorage.setItem("planeid" , item.id );
                          searchdata.CityStart = item.origin ;
                          searchdata.CityEnd = item.destination ;
                          localStorage.setItem("vatavols" , JSON.stringify(searchdata));
                      }} className="bg-yellow-300 flex items-center justify-center rounded-md">
                        <span>selectionner</span>
                      </div>
                  </div>
               </div>
                </>
                     
               ))}
               
               
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default SerchResultat