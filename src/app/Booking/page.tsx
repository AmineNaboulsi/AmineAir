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
type VolM = { 
  id: number,
  airline: string,
  departureTime: string,
  origin: string,
  destination: string,
  flightNumber: string,
  duration: string,
  arrivalTime: string,
  price: number,
  seatAvailability: number,
  PlacesNb :Places[]};

  // type TotalRecu = {
  //   totalprice: number,
  //   placecat : number[]
  // }


function Booking() {

  const [Vols ,setVols] = useState<VolM[]>();

  const [PlaneId , setPlaneId ] = useState<number>(0);
  const [NbPlaceT , setNbPlaceT] = useState<number>(0);
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
  const [TotalPrice , setTotalPrice ] = useState();
  const router = useRouter();
  
  const HandledClickConfirmation = () =>{
    console.log(VoleInfo)
    if(HowManyPlaceLeft() < NbPlaceT)alert('Pick you places');
    else {
        const id = parseInt(localStorage.getItem('planeid'));

        Vols?.forEach((item: VolM) => {
        if (item.id == id) {
            localStorage.setItem('placesNumbers' , JSON.stringify(item.PlacesNb));
        }});
    }
    router.push("/tickets");
  }
  useEffect(()=>{

    const fetchData = async () => {
      const response = await fetch('/api/vols');
      const data = await response.json();
      setVols(data);
      const searchdata = localStorage.getItem('vatavols');
      if (searchdata) {
        const alldata = JSON.parse(searchdata);
        setVoleInfo(alldata);
    
        const totalPlacesPicked = alldata.NbPlaces.Baby + alldata.NbPlaces.child + alldata.NbPlaces.teenager + alldata.NbPlaces.Adultes;
        setNbPlaceT(totalPlacesPicked);
    
        const id = parseInt(localStorage.getItem('planeid'));
        setPlaneId(id);
        setVols((pre: VolM[]) => pre.filter((item) => item.id == id));
        console.log(Vols);
        let total = 0;
        let placecat = [] ;
    
        data?.forEach((item: VolM) => {
          if (item.id === id) {
            const adultTotal = alldata.NbPlaces.Adultes * item.price;
            total += adultTotal;
            placecat[0] = adultTotal;
    
            if (alldata.NbPlaces.Baby > 0) {
              const babyTotal = (alldata.NbPlaces.Baby * item.price) - 150; 
              total += babyTotal;
              placecat[3] = babyTotal;
            }
    
            if (alldata.NbPlaces.child > 0) {
              const childTotal = (alldata.NbPlaces.child * item.price) - 100; 
              total += childTotal;
              placecat[2] = childTotal;
            }
    
            if (alldata.NbPlaces.teenager > 0) {
              const teenagerTotal = (alldata.NbPlaces.teenager * item.price) - 50; 
              total += teenagerTotal;
              placecat[1] = teenagerTotal;
            }
          }
        });
    
        setTotalPrice({ totalprice: total, placecat });
        console.log({ totalprice: total, placecat })
      } else {
        router.push('/');
      }
    }
    fetchData();
    
    
  } , [])

  const HandledPickchanged = (i: number) => {
    setVols((previousData) =>
      previousData.map((vol) =>
        vol.id === PlaneId
          ? {
              ...vol,
              PlacesNb: vol.PlacesNb.map((place, index) =>
                index === i && HowManyPlaceLeft() < NbPlaceT
                  ? { ...place, Taked: !place.Taked }
                  : place
              ),
            }
          : vol
      )
    );
  };
  const HowManyPlaceLeft = () => {
    let totalChecked = 0;
  
    Vols?.forEach((vol) => {
      if (vol.id === PlaneId) {
        vol.PlacesNb.forEach((place) => {
          if (place.Taked) totalChecked++;
        });
      }
    });
  
    return totalChecked;
  };

  // const HowManyPlaceLeft = () => {
  //     let totalchecked = 0;
  //     NbPlaces.forEach((item /* , p*/)=>{
  //       if(item.Taked /*|| (p==i && NbPlaces[p].Taked  )*/) totalchecked++;
  //     })
  //     return totalchecked; 
  // }
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
                  {Vols && Vols?.map((item )=>
                    (<>
                      {item.id == PlaneId && item?.PlacesNb?.map((item , i)=>(
                            <>
                              <div key={`${item.Taked}-${i}`}
                              onClick={()=>HandledPickchanged(i)}
                              className={`select-none text-gray-900* w-12 h-12 rounded-[3px] flex justify-center items-center
                                ${!item.isEmpty ? " bg-red-500 ": item.Taked?" bg-green-500 ":" bg-gray-300 "}`}>
                                  {i+1}
                              </div>
                            </>
                    ))}

                    </>
                  ))}
                 
                </div>
              </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="border-2 border-gray-300 rounded-md">
              <div className="flex justify-between rounded-ss-md rounded-se-md bg-gray-200 text-xl text-black p-3  ">
                <span>Total</span>
                <span >{TotalPrice && parseInt(TotalPrice.totalprice)} MAD</span>
                
              </div>
              <div className="flex flex-col px-5 py-3">
                        {TotalPrice && TotalPrice?.placecat?.map((item,i)=>(
                          <>
                          {item > 0 && 
                          
                          <div className="flex justify-between">
                          <span>{i==0?"Adultes":i==1 ? "Teenager" : i==2 ? "Child" : "Baby" }</span>
                          <span>{parseInt(item)} MAD</span>
                        </div>
                        }
                                 
                          </>
                        ))}
                        
                             
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