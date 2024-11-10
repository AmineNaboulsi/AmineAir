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
  const [Vols , setVols] = useState<VolM[]>([
    { id: 1, airline: 'Amine Air', departureTime: '06:45', origin: 'Marrakech', destination: 'Casablanca', flightNumber: 'FR 2240', duration: '2h 25m', arrivalTime: '09:10', price: '1,519.10 Dhs', seatAvailability: 3},
    { id: 2, airline: 'Amine Air', departureTime: '08:30', origin: 'Casablanca', destination: 'Rabat', flightNumber: 'FR 2241', duration: '1h 15m', arrivalTime: '09:45', price: '899.50 Dhs', seatAvailability:5 },
    { id: 3, airline: 'Amine Air', departureTime: '09:00', origin: 'Tangier', destination: 'Fez', flightNumber: 'FR 2242', duration: '1h 00m', arrivalTime: '10:00', price: '750.00 Dhs', seatAvailability: 12 },
    { id: 4, airline: 'Amine Air', departureTime: '10:15', origin: 'Agadir', destination: 'Marrakech', flightNumber: 'FR 2243', duration: '1h 30m', arrivalTime: '11:45', price: '1,200.00 Dhs', seatAvailability: 6 },
    { id: 5, airline: 'Amine Air', departureTime: '12:30', origin: 'Casablanca', destination: 'Tangier', flightNumber: 'FR 2244', duration: '2h 15m', arrivalTime: '14:45', price: '1,350.00 Dhs', seatAvailability: 2 },
    { id: 6, airline: 'Amine Air', departureTime: '14:00', origin: 'Fez', destination: 'Rabat', flightNumber: 'FR 2245', duration: '1h 20m', arrivalTime: '15:20', price: '920.00 Dhs', seatAvailability: 8 },
    { id: 7, airline: 'Amine Air', departureTime: '15:45', origin: 'Rabat', destination: 'Marrakech', flightNumber: 'FR 2246', duration: '1h 50m', arrivalTime: '17:35', price: '1,050.00 Dhs', seatAvailability: 5 },
    { id: 8, airline: 'Amine Air', departureTime: '17:00', origin: 'Casablanca', destination: 'Essaouira', flightNumber: 'FR 2247', duration: '1h 40m', arrivalTime: '18:40', price: '1,150.00 Dhs', seatAvailability: 7 },
    { id: 9, airline: 'Amine Air', departureTime: '18:30', origin: 'Fez', destination: 'Tangier', flightNumber: 'FR 2248', duration: '1h 10m', arrivalTime: '19:40', price: '900.00 Dhs', seatAvailability: 4 },
    { id: 10, airline: 'Amine Air', departureTime: '19:15', origin: 'Oujda', destination: 'Casablanca', flightNumber: 'FR 2249', duration: '2h 30m', arrivalTime: '21:45', price: '1,400.00 Dhs', seatAvailability: 6 },
    { id: 11, airline: 'Amine Air', departureTime: '20:00', origin: 'Casablanca', destination: 'Agadir', flightNumber: 'FR 2250', duration: '1h 35m', arrivalTime: '21:35', price: '1,100.00 Dhs', seatAvailability: 3 },
    { id: 12, airline: 'Amine Air', departureTime: '21:45', origin: 'Marrakech', destination: 'Fez', flightNumber: 'FR 2251', duration: '2h 00m', arrivalTime: '23:45', price: '1,200.00 Dhs', seatAvailability: 9 },
    { id: 13, airline: 'Amine Air', departureTime: '07:30', origin: 'Essaouira', destination: 'Rabat', flightNumber: 'FR 2252', duration: '2h 20m', arrivalTime: '09:50', price: '1,250.00 Dhs', seatAvailability: 4},
    { id: 14, airline: 'Amine Air', departureTime: '09:15', origin: 'Tangier', destination: 'Casablanca', flightNumber: 'FR 2253', duration: '1h 45m', arrivalTime: '11:00', price: '1,300.00 Dhs', seatAvailability: 2 },
    { id: 15, airline: 'Amine Air', departureTime: '13:00', origin: 'Agadir', destination: 'Rabat', flightNumber: 'FR 2254', duration: '1h 55m', arrivalTime: '14:55', price: '1,400.00 Dhs', seatAvailability: 7 },
    { id: 16, airline: 'Amine Air', departureTime: '14:30', origin: 'Marrakech', destination: 'Tangier', flightNumber: 'FR 2255', duration: '2h 15m', arrivalTime: '16:45', price: '1,600.00 Dhs', seatAvailability: 3 },
    { id: 17, airline: 'Amine Air', departureTime: '16:00', origin: 'Rabat', destination: 'Fez', flightNumber: 'FR 2256', duration: '1h 30m', arrivalTime: '17:30', price: '1,000.00 Dhs', seatAvailability: 6 },
    { id: 18, airline: 'Amine Air', departureTime: '18:45', origin: 'Casablanca', destination: 'Oujda', flightNumber: 'FR 2257', duration: '2h 45m', arrivalTime: '21:30', price: '1,800.00 Dhs', seatAvailability: 2 },
    { id: 19, airline: 'Amine Air', departureTime: '20:15', origin: 'Essaouira', destination: 'Marrakech', flightNumber: 'FR 2258', duration: '1h 20m', arrivalTime: '21:35', price: '1,050.00 Dhs', seatAvailability: 6 },
    { id: 20, airline: 'Amine Air', departureTime: '22:30', origin: 'Fez', destination: 'Agadir', flightNumber: 'FR 2259', duration: '2h 30m', arrivalTime: '01:00', price: '1,500.00 Dhs', seatAvailability: 8 }
  ]);
  const router = useRouter();

  useEffect(()=>{
    const searchdata = JSON.parse(localStorage.getItem('vatavols'));
    if(searchdata)
    {
      setVols(pre=>pre.filter((item)=>{
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
    else router.push('/');
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
                        <span className='text-2xl font-semibold'>{item.price}</span>
                      </div>
                      <div onClick={()=>{
                          router.push(`/booking?id=${item.id}`);
                          localStorage.setItem("planeid" , item.id );
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