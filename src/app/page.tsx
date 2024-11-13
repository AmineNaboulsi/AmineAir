"use client";

import React, { useState , useEffect } from 'react';
import Header from './Components/header';
import SearchBar from './Components/searchbar';
import './globals.css'
import Image from 'next/image'
// import {Trypassparametre} from "./Components/Context/datacontext"

type Country = {
  country: string;
  language: string;
  flagUrl: string;
  isSelected: boolean;
};


// interface VoleInfoType {
//   CityStart: string;
//   CityEnd: string;
//   DateStart: Date;
//   NbPlaces : {
//       Adultes : number ;
//       teenager : number ;
//       child : number ;
//       Baby : number ;
// };
// }
export default function Home() {
 
  const [countries ,setcountries] = useState<Country[]>()
  useEffect(()=>{
    fetch("/api/flags")
    .then(res=>res.json())
    .then(data=>setcountries(data));
  },[]);

  // const [datatest ] = useState<VoleInfoType>(
  //   {
  //     CityStart: "",
  //     CityEnd: "",
  //     DateStart: new Date(),
  //     NbPlaces: {
  //       Adultes: 1,
  //       teenager: 0,
  //       child: 0,
  //       Baby: 0,
  //     },
  //   }
  // );

  return (
    <>
    {/* <Trypassparametre.Provider value={datatest}> */}
      <Header />
      <SearchBar />
       
      <section className='mt-4'>
      <div className="container text-center flex flex-col gap-6  max-md:px-10">
          <span className='font-bold'>Nous avons tout ce dont vous avez besoin pour démarrer le paiement à la livraison dans plusieurs pays.</span>
          <span>Permettez à vos clients de payer à la livraison dans plus de 5 pays et augmentez les ventes de votre magasin.   </span>
          <div className='flex gap-10 overflow-x-auto justify-center '>
            {countries && countries.map((item , i)=>(
              <>
              {i<8 &&  
              <div className="flex flex-col items-center gap-3 ">
                <Image
                src={item.flagUrl} 
                  width={100} 
                  height={32} 
                  className="w-24 h-14 rounded-md object-cover max-md:object-contain"
                   alt=''/>
                <span>{item.country}</span>
              </div>
              
              }
             

              </>))}
          </div>
        </div>
      </section>
    {/* </Trypassparametre.Provider> */}
  
    </>
    
  );
}
