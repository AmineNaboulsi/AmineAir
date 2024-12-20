"use client";

import React, { useState, useEffect } from 'react'
import { IoPerson } from "react-icons/io5";
import { useRouter } from 'next/navigation';

interface VoleInfoType {
  CityStart: string;
  CityEnd: string;
  DateStart: Date;
  NbPlaces : {
      Adultes : number ;
      teenager : number ;
      child : number ;
      Baby : number ;
};
}

function StatusInfo(){

    const [VoleInfo , setVoleInfo] = useState<VoleInfoType>();
    const router = useRouter();

    useEffect(()=>{
      const searchdata= JSON.parse(localStorage.getItem('vatavols')?? 'null');
      if(searchdata !== null )
      {
        setVoleInfo(searchdata);
      }
      else router.push('/');
    } , [router])
  return (
        <section className="bg-white">
        <div className="container">
          <div className="p-3 flex flex-col gap-2 max-md:text-center">
            <span className='text-xl'>{VoleInfo?.CityStart} { VoleInfo?.CityEnd} (Tous les aéroports)</span>
            <div className="flex gap-6 text-gray-400 max-md:justify-center">
              <span>Aller simple</span>
              <div className="flex gap-2 items-center">
                <div className="bg-yellow-300 w-1 h-1 rounded-full"></div>
                <span>{VoleInfo?.DateStart?.toString().split('T')[0]}</span>
              </div>
              <div className="flex gap-2 items-center">
              <div className="bg-yellow-300 w-1 h-1 rounded-full"></div>
              <span>{ VoleInfo && ( <>{
                VoleInfo.NbPlaces?.Baby +  VoleInfo.NbPlaces?.child + VoleInfo.NbPlaces?.teenager + VoleInfo.NbPlaces?.Adultes
              }</>)}</span>
              <IoPerson />
              </div>
            </div>
          </div>
        </div>
     </section>
  )
}

export default StatusInfo