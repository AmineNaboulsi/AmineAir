"use client";

import { useEffect, useState } from "react";
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";

type Country = {
  country: string;
  language: string;
  flagUrl: string;
  isSelected: boolean;
};

function Header() {
  const [countries ,setcountries] = useState<Country[]>()
  const [countriesStatus , setcountriesStatus] = useState(false)
  const [countriesSelected , setcountriesSelected] = useState(
    { country: "Morocco", language: "French", flagUrl: "https://flagcdn.com/ma.svg" ,isSelected : true},
  )
  useEffect(()=>{
    fetch("/api/flags")
    .then(res=>res.json())
    .then(data=>setcountries(data));
  },[]);
  const OpenLanguePickerHandler = () =>{
    setcountriesStatus(!countriesStatus);
  }
  const ChangeLangueHandler = (item : Country) =>{
    setcountriesSelected(item);
    setcountriesStatus(false);
  }
  return (
    <div className="relative">
    <div className='bg-maincolor text-white flex justify-between items-center px-8 py-3 max-md:px-2'>
      <div className="flex items-center gap-1">
        <Image
          src="/main-logo.png"
          width={20}
          height={20}
          alt='' />
        <span className='text-[1.5rem]'>AmineAir</span>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <a className='flex flex-row justify-center items-center gap-2 hover:underline max-md:hidden' href=''>
          <span>Planifier</span>
          <IoIosArrowDown />
        </a>
        <div className="h-[20px] w-[1px] bg-blue-400 max-md:hidden"></div>
        <a className='hover:underline max-md:hidden' href=''>FAQ</a>
        <div className="h-[20px] w-[1px] bg-blue-400 max-md:hidden"></div>
        <div className="flex items-center gap-2 cursor-pointer max-md:hidden " onClick={()=>OpenLanguePickerHandler()}>
          {countriesSelected && <>
            <Image
            src={countriesSelected.flagUrl}
            width={32}
            height={20}
            alt='' />
          </>}
          <IoIosArrowDown className={`transition-all ${countriesStatus ? 'rotate-180 ': 'rotate-0 '}`} />
        </div>
        <div className="h-[20px] w-[1px] bg-blue-400 max-md:hidden"></div>
        <a href='#'>S&apos;inscrire</a>
        <a className='text-black bg-secondcolor px-4 py-1 rounded-xl' href=''>Se connecter</a>
      </div>
    </div>
    <div className={`${countriesStatus ? '' : "hidden"} absolute left-0 right-0 bg-white z-[10]`}>
      <div  className="container grid grid-cols-4 p-2 gap-x-4 select-none">
      
      {countries && countries?.map((item ,index)=>(
        <>
              <div  key={`${index}-${item.language}-${index}`}
          className={`flex flex-row items-center py-2 px-2 gap-3 cursor-pointer border-2 border-white ${countriesSelected.country == item.country ? 'border-blue-500 bg-blue-200' : item.isSelected ? "hover:border-white" : " hover:border-gray-300"}`} 
          onClick={()=>ChangeLangueHandler(item)}
          >
            <Image
                src={item.flagUrl}
                width={20}
                height={20}
                alt='' />
                <span className="text-black text-xs">{item.language} ({item.country})</span>
              </div>
        </>
      
      ))}
      
      </div>
     
      <Image className="absolute -top-3 right-[18rem]"  src="/poppupicon.svg"
      width={30}
      height={30}
      alt="" />
    </div>
    </div>
   
  )
}

export default Header