"use client";

import { useState } from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";
import Link from 'next/link';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Image from 'next/image';
import { CiCirclePlus } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";

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

function searchbar() {
    const [VoleInfo , setVoleInfo] = useState<VoleInfoType>({
        CityStart  : "" ,
        CityEnd : "" ,
        DateStart : new Date() ,
        NbPlaces : {
            Adultes : 1 ,
            teenager : 0 ,
            child : 0 ,
            Baby : 0 ,
        }
    })
    const [ShowPopupPassager , setShowPopupPassager] = useState(false) ;
  return (
    <div className='bg-maincolor'>
        <div className="container">
            
            <div className="">
                <ul className='flex items-center  text-xl'>
                    <li className='relative px-5 flex justify-center'>
                        <div className="flex items-center justify-center gap-3">
                            <BiSolidPlaneAlt />
                            <span>Vols</span>
                        </div>
                        <div className="absolute -bottom-1 w-[100%] h-[2px] bg-secondcolor"></div>
                    </li>
                    <li className='px-5 flex justify-center'>
                        <div className="flex items-center justify-center gap-3">
                        <FaCar />

                            <span>Location de voiture</span>
                        </div>
                    </li>
                    <li className='px-5 flex justify-center'>
                    <div className="flex items-center justify-center gap-3">
                            <MdLocalHotel />
                            <span>Hotels</span>
                        </div>
                    </li>
                    <li className='px-5 flex justify-center'>
                    <div className="flex items-center justify-center gap-3">
                            <BiSolidPlaneAlt />
                            <span>Cartes Cadeaux</span>
                        </div>
                    </li>
                 
                </ul>
                <div className="grid grid-cols-[1fr,auto] gap-3 mt-5">
                <div className="grid grid-cols-[1fr,auto,1fr]  bg-white items-center rounded-[3px]">
                            <div className="flex flex-col px-4 py-1">
                                <span className='text-gray-400 text-sm'>De</span>
                                <input placeholder='ville' style={{all : 'unset'}} className='font-normal' type='text' />
                            </div>
                            <div className="relative flex items-center h-[100%]">
                                <div className="absolute left-[50%] h-[100%] w-[1px] bg-gray-300"></div>
                                <FaArrowRightArrowLeft className='bg-white border-2 border-gray-300 rounded-[50%] w-[30px] h-[30px] p-[6px] z-[1] cursor-pointer' />
                            </div>
                            <div className="flex flex-col px-4 py-1">
                                <span className='text-gray-400 text-sm'>A</span>
                                <input placeholder='ville' style={{all : 'unset'}} className='font-normal' type='text' />
                            </div> 
                        </div>
                    <Link className='flex items-center bg-secondcolor px-24 rounded-[3px]' href="/searchresults" >
                        <span>Recherche</span>
                    </Link>
                    <div className=" grid grid-cols-[1fr,auto] gap-2  items-center rounded-[3px]">
                            <div className="flex flex-col px-4 py-1 bg-white rounded-[3px]">
                                <span className='text-gray-400 text-sm'>De</span>
                                <input  type='date'  style={{all : 'unset'}} className='font-normal'/>
                            </div>
                            <div 
                            className="relative w-64 cursor-pointer" >
                                <div className="flex flex-col px-4 py-1 bg-white rounded-[3px]"
                                 onClick={()=>{
                                    setShowPopupPassager(!ShowPopupPassager);
                                }}
                                >
                            <span className='text-gray-400 text-sm'>Passagers</span>
                                                            <label style={{all : 'unset'}}
                                                            className='font-normal'
                                                            >
                                                             {VoleInfo && VoleInfo.NbPlaces.Adultes } Adultes
                                                             {(VoleInfo.NbPlaces.teenager + 
                                                                            VoleInfo.NbPlaces.child + 
                                                                            VoleInfo.NbPlaces.Baby > 0) && `, ` + (
                                                                            VoleInfo.NbPlaces.teenager + 
                                                                            VoleInfo.NbPlaces.child + 
                                                                            VoleInfo.NbPlaces.Baby ) + ` Autres` } 
                                                            </label>
                                                            

                                </div>
                                
                                <div className={`${!ShowPopupPassager && 'hidden' } absolute w-[120%] right-0 top-[95%]`}>
                                    <div className="flex justify-center">
                                        <Image src="/poppupicon.svg"
                                                width={30}
                                                height={30}
                                                alt="" />
                                    </div>
                                            <div className="bg-white p-2 grid grid-cols-1 gap-2 mb-1 ">
                                                <div className="">
                                                    <div className="grid grid-cols-[auto,1fr] gap-1 border-2 bg-coldbluecolor p-2">
                                                        <IoIosInformationCircle size={18} className="text-blue-500" />
                                                        <span className="text-xs px-1">Chosissez le type de passager en fonction de leur age au moment du voyage.Les mineurs ( 16 ans) ne peuvent pas voyager seuls. Pour les ajouter à une reservation existante,suivez les unstructions .</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex flex-col">
                                                        <span className="text-sm">Adultes</span>
                                                        <span className="text-xs">16+ and au moment du voyage</span>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-2xl select-none">
                                                        <CiCircleMinus onClick={()=>{
                                                            if(VoleInfo.NbPlaces.Adultes > 1){
                                                                setVoleInfo((p)=>({...p , NbPlaces : {
                                                                    ...p.NbPlaces ,
                                                                    Adultes : p.NbPlaces.Adultes - 1
                                                                }}));
                                                            }
                                                            
                                                        }}/>
                                                        {VoleInfo && VoleInfo.NbPlaces.Adultes} 
                                                        <CiCirclePlus onClick={()=>{
                                                            setVoleInfo((p)=>({...p , NbPlaces : {
                                                                ...p.NbPlaces ,
                                                                Adultes : p.NbPlaces.Adultes + 1
                                                            }}));
                                                        }}/>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex flex-col">
                                                        <span className="text-sm">teenager</span>
                                                        <span className="text-xs">16+ and au moment du voyage</span>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-2xl select-none">
                                                        <CiCircleMinus onClick={()=>{
                                                                if(VoleInfo.NbPlaces.teenager > 0){
                                                                    setVoleInfo((p)=>({...p , NbPlaces : {
                                                                        ...p.NbPlaces ,
                                                                        teenager : p.NbPlaces.teenager - 1
                                                                    }}));
                                                                }
                                                                
                                                            }}/>
                                                        {VoleInfo && VoleInfo.NbPlaces.teenager} 
                                                        <CiCirclePlus onClick={()=>{
                                                            setVoleInfo((p)=>({...p , NbPlaces : {
                                                                ...p.NbPlaces ,
                                                                teenager : p.NbPlaces.teenager + 1
                                                            }}));
                                                        }}/>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex flex-col">
                                                        <span className="text-sm">child</span>
                                                        <span className="text-xs">16+ and au moment du voyage</span>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-2xl select-none">
                                                        <CiCircleMinus onClick={()=>{
                                                            if(VoleInfo.NbPlaces.child > 0){
                                                                setVoleInfo((p)=>({...p , NbPlaces : {
                                                                    ...p.NbPlaces ,
                                                                    child : p.NbPlaces.child - 1
                                                                }}));
                                                            }
                                                            
                                                        }}/>
                                                        {VoleInfo && VoleInfo.NbPlaces.child}  
                                                        <CiCirclePlus 
                                                        onClick={()=>{
                                                            setVoleInfo((p)=>({...p , NbPlaces : {
                                                                ...p.NbPlaces ,
                                                                child : p.NbPlaces.child + 1
                                                            }}));
                                                        }} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex flex-col">
                                                        <span className="text-sm">Baby</span>
                                                        <span className="text-xs">16+ and au moment du voyage</span>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-2xl select-none">
                                                        <CiCircleMinus onClick={()=>{
                                                                if(VoleInfo.NbPlaces.Baby > 0){
                                                                    setVoleInfo((p)=>({...p , NbPlaces : {
                                                                        ...p.NbPlaces ,
                                                                        Baby : p.NbPlaces.Baby - 1
                                                                    }}));
                                                                }
                                                                
                                                            }}/>
                                                        {VoleInfo && VoleInfo.NbPlaces.Baby}  
                                                        <CiCirclePlus 
                                                        onClick={()=>{
                                                            setVoleInfo((p)=>({...p , NbPlaces : {
                                                                ...p.NbPlaces ,
                                                                Baby : p.NbPlaces.Baby + 1
                                                            }}));
                                                        }} />
                                                    </div>
                                                </div>
                                               
                                            </div>
                                    
                                </div>
                            </div>
                           
                    </div>
                </div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
            </div>
           
        </div>
        
    </div>
  )
}

export default searchbar