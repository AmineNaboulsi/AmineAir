"use client";

import React, { useState } from 'react'
import { IoPerson } from "react-icons/io5";

interface NbPlaces {
    Adultes: number;
    teenager: number;
    child: number;
    Baby: number;
  }
  
  interface VoleInfoProps {
    voldata: {
      CityStart: string;
      CityEnd: string;
      DateStart: Date;
      NbPlaces: NbPlaces;
    };
  }

const StatusInfo: React.FC<VoleInfoProps> = ({ voldata }) => {

    const [VoleInfo, setVoleInfo] = useState(voldata);
    
  return (
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
  )
}

export default StatusInfo