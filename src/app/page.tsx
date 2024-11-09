"use client";

import React, { useState } from 'react';
import Header from './Components/header';
import SearchBar from './Components/searchbar';
import './globals.css'
import Image from 'next/image'
import {Trypassparametre} from "./Components/Context/datacontext"

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
export default function Home() {
 
  const [datatest ] = useState<VoleInfoType>(
    {
      CityStart: "",
      CityEnd: "",
      DateStart: new Date(),
      NbPlaces: {
        Adultes: 1,
        teenager: 0,
        child: 0,
        Baby: 0,
      },
    }
  );

  return (
    <>
    <Trypassparametre.Provider value={datatest}>
      <Header />
      <SearchBar />
      <div className="flex flex-col justify-center items-center">
        <Image width={100} height={100} src="/underM.gif" alt='' />
        Under maintenance
      </div>
    </Trypassparametre.Provider>
  
    </>
    
  );
}
