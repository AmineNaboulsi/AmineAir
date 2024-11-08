"use client";

import React, { useState } from 'react'
import Header from '../Components/header';
import Image from 'next/image'
import StatusInfo from '../Components/statusinfo'
import { BsBackpack2 } from "react-icons/bs";
import { MdDone } from "react-icons/md";

interface Places {
  Taked : boolean ,
  isEmpty : boolean ,
}

function page() {
  const [NbPlaces, setNbPlaces] = useState<Places[]>([
    {
      Taked :false ,
      isEmpty : false
    },
    {
      Taked :false ,
      isEmpty : false
    },
  
    {
      Taked :false ,
      isEmpty : true
    },

    {
      Taked :false ,
      isEmpty : true
    }
    ,
    {
      Taked :false ,
      isEmpty : false
    },
    {
      Taked :false ,
      isEmpty : false
    },
   
    {
      Taked :false ,
      isEmpty : true
    },
  
    {
      Taked :false ,
      isEmpty : false
    }
    ,
    {
      Taked :false ,
      isEmpty : true
    },
   
    {
      Taked :false ,
      isEmpty : false
    },
   
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : false
    }
    ,
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : false
    },
    {
      Taked :false ,
      isEmpty : false
    },
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : true
    }
    ,
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : false
    }
    ,
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : false
    },
    {
      Taked :false ,
      isEmpty : false
    },
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : true
    }
    ,
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : false
    }
    ,
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : false
    },
    {
      Taked :false ,
      isEmpty : false
    },
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : true
    }
    ,
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : false
    }
    ,
    {
      Taked :false ,
      isEmpty : true
    },
    {
      Taked :false ,
      isEmpty : false
    }
  ]);
  const totallimit = 5 ;
  const HandledPickchanged =(i:number) => {
   setNbPlaces(prev=>prev.map((item , p)=> p !=i ? item : HowManyPlaceLeft(p)<totallimit  ? ({
          ...item,
          Taked : !item.Taked
    }):item));
  };
  const HowManyPlaceLeft = (i:number) => {
      let totalchecked = 0;
      NbPlaces.forEach((item /* , p*/)=>{
        if(item.Taked /*|| (p==i && NbPlaces[p].Taked  )*/) totalchecked++;
      })
      return totalchecked; 
  }
  return (
    <div>
      <Header />
      <StatusInfo voldata={{
        CityStart  : "" ,
        CityEnd : "" ,
        DateStart : new Date() ,
        NbPlaces : {
            Adultes : 1 ,
            teenager : 0 ,
            child : 0 ,
            Baby : 0 ,
        }
    }}/>
    <section>
      <div className="container">
        <span className='font-semibold'>Selectionner le badge pour votre voyage</span>
        <div className="grid grid-cols-[1fr,25%] max-md:grid-cols-1 gap-5 ">
          <div className="border-2 grid gap-1">   
              <div className="py-4 px-3 flex w-full flex-row justify-start items-center mr-3 bg-gray-200">
                  <Image src="/main-logo.png" width={40} height={40} alt='' />
                  <span>Amine Air</span>
              </div>
              <div className="px-3">
                <span className='font-semibold'>Bagage sous le siége</span>
                <div className="grid grid-cols-[25%,1fr]">
                  <div className="flex flex-col items-center px-5 gap-2 py-3 text-xs">
                    <BsBackpack2 size={30}/>
                      <div className="flex flex-col items-center">
                        <span className=''>A Bagage sous le siége</span>
                        <span>40X30X15 cm</span>
                      </div>
                    <div className="flex justify-center gap-3 items-center">
                      <div className="bg-greenlightcolor rounded-full flex justify-center items-center h-4 w-4">
                        <MdDone className=' text-white' />
                      </div>
                      <span className='text-greenlightcolor'>Inclus</span>

                    </div>
                  </div>
                  <div className="bg-gray-200 grid grid-cols-[1fr,20%] items-center px-6">
                    <div className="text-xs flex flex-col gap-2">
                      <span>Lorem dkvbdkv dsvkibds kjddjkivbdkjv dqvkd.</span>
                      <span >vldsvnjqdnv dk djos dsvljds vjdq dql djqi bqdlvqdouqdv dqljv qdoqdldjq vdqjv dqlj dqoulbqdjlqdoq qjdvldsvnjqdnv dk djos dsvljds vjdq dql djqi bqdlvqdouqdv dqljv qdoqdldjq vdqjv dqlj</span>
                    </div>
                    <Image src="/plane-chair.png" width={80} height={80} alt=''/>
                  </div>
                </div>
              </div>
              <div className="mt-4 w-full h-[1px] bg-gray-300"></div>
              <div className="mt-2 flex flex-col gap-4 pl-5">
                <span className='font-semibold'>Selectionner Votre place</span>
                <div className="flex flex-wrap gap-1">
                  {NbPlaces && NbPlaces.map((item , i)=>(
                    <>
                      <div key={`${item.Taked}-${i}`}
                      onClick={()=>HandledPickchanged(i)}
                      className={`text-gray-900* w-12 h-12 rounded-[3px] flex justify-center items-center
                        ${!item.isEmpty ? " bg-red-500 ": item.Taked?" bg-green-500 ":" bg-gray-300 "}`}>
                          {i+1}
                      </div>
                    </>
                  ))}
                </div>
              </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="">
              <div className="flex justify-between rounded-ss-md rounded-se-md bg-gray-600 text-xl text-white p-3  ">
                <span>Total</span>
                <span>3200 MAD</span>
              </div>
              <div className="flex flex-col bg-gray-300  px-5 py-3">
                <div className="flex justify-between">
                  <span>1 Adultes</span>
                  <span>1600 MAD</span>
                </div>
                <div className="flex justify-between">
                  <span>1 tineeger</span>
                  <span>1550 MAD</span>
                </div>
              </div>
            </div>
            <div className="max-md:flex max-md:justify-center  ">
              <button className='text-white rounded-md w-full py-3 bg-maincolor'>Confirme votre choix</button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    
      </div>
  )
}

export default page