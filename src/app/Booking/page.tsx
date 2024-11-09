"use client";

import React, { useState ,useEffect } from 'react'
import Header from '../Components/header';
import Image from 'next/image'
import StatusInfo from '../Components/statusinfo'
import { BsBackpack2 } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { useRouter } from 'next/navigation';

interface Places {
  Taked : boolean ,
  isEmpty : boolean ,
}
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

function Booking() {
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
  const [NbPlaceT , setNbPlaceT] = useState(0);
  const [VoleInfo , setVoleInfo] = useState<VoleInfoType>(
    {
      CityStart:'',
      CityEnd: '',
      DateStart: new Date(),
      NbPlaces : {
          Adultes : 1 ,
          teenager : 0 ,
          child : 0 ,
          Baby : 0 ,
    }
    }
  );
  const router = useRouter();
  
  const HandledClickConfirmation = () =>{
    if(HowManyPlaceLeft() < NbPlaceT)alert('Pick you places');
    else router.push("/tickets");
  }
  useEffect(()=>{
    const searchdata = localStorage.getItem('vatavols');
    if(searchdata)
    {
      const alldata = JSON.parse(searchdata);
      setVoleInfo(alldata);
      // setNbPlaceT(VoleInfo.reduce((acc ,cv ,i)=>acc+cv));
      const totalplcespicked = alldata.NbPlaces.Baby +  alldata.NbPlaces.child + alldata.NbPlaces.teenager + alldata.NbPlaces.Adultes ;
      setNbPlaceT(totalplcespicked);
      console.log({"ach l9a" : VoleInfo} )
    }
    else router.push('/');
  } , [])

  const HandledPickchanged =(i:number) => {
   setNbPlaces(prev=>prev.map((item , p)=> p !=i ? item : HowManyPlaceLeft()< NbPlaceT  ? ({
          ...item,
          Taked : !item.Taked
    }):item));
  };
  const HowManyPlaceLeft = () => {
      let totalchecked = 0;
      NbPlaces.forEach((item /* , p*/)=>{
        if(item.Taked /*|| (p==i && NbPlaces[p].Taked  )*/) totalchecked++;
      })
      return totalchecked; 
  }
  return (
    <div>
      <Header />
      <StatusInfo />
    <section>
      <div className="container mt-6">
        <span className='font-semibold'>Selectionner le badge pour votre voyage</span>
        <div className="mt-4 grid grid-cols-[1fr,25%] max-md:grid-cols-1 gap-5 ">
          <div className="border-2 border-gray-300 grid gap-1 rounded-md">   
              <div className="rounded-ss-md rounded-se-md py-4 px-3 flex w-full flex-row justify-start items-center mr-3 bg-gray-200">
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
              <div className="mt-2 flex flex-col gap-4 pl-5 mb-3">
                <span className='font-semibold'>Selectionner Votre place</span>
                <div className="flex flex-wrap gap-1">
                  {NbPlaces && NbPlaces.map((item , i)=>(
                    <>
                      <div key={`${item.Taked}-${i}`}
                      onClick={()=>HandledPickchanged(i)}
                      className={`select-none text-gray-900* w-12 h-12 rounded-[3px] flex justify-center items-center
                        ${!item.isEmpty ? " bg-red-500 ": item.Taked?" bg-green-500 ":" bg-gray-300 "}`}>
                          {i+1}
                      </div>
                    </>
                  ))}
                </div>
              </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="border-2 border-gray-300 rounded-md">
              <div className="flex justify-between rounded-ss-md rounded-se-md bg-gray-200 text-xl text-black p-3  ">
                <span>Total</span>
                <span>3200 MAD</span>
              </div>
              <div className="flex flex-col px-5 py-3">
                          {(VoleInfo && VoleInfo.NbPlaces.Adultes==0) ?
                              <></>:
                              <>
                                  <div className="flex justify-between">
                                    <span>{VoleInfo.NbPlaces.Adultes} Adultes</span>
                                    <span>1550 MAD</span>
                                  </div>
                              </>} 
                              {(VoleInfo && VoleInfo.NbPlaces.teenager==0) ?
                              <></>:
                              <>
                                  <div className="flex justify-between">
                                    <span>{VoleInfo.NbPlaces.teenager} Teenager</span>
                                    <span>1550 MAD</span>
                                  </div>
                              </>} 
                              {(VoleInfo && VoleInfo.NbPlaces.child==0) ?
                              <></>:
                              <>
                                  <div className="flex justify-between">
                                    <span>{VoleInfo.NbPlaces.child}  Child</span>
                                    <span>1550 MAD</span>
                                  </div>
                              </>} 
                              {(VoleInfo && VoleInfo.NbPlaces.Baby==0) ?
                              <></>:
                              <>
                                  <div className="flex justify-between">
                                    <span>{VoleInfo.NbPlaces.Baby} Baby</span>
                                    <span>1550 MAD</span>
                                  </div>
                              </>} 
              </div>
            </div>
            <div className="max-md:flex max-md:justify-center  ">
              <button onClick={()=>HandledClickConfirmation()} className='text-white rounded-md w-full py-3 bg-maincolor border-none'>Confirme votre choix</button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    
      </div>
  )
}

export default Booking ;