"use client";

import { useState } from "react";
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const [countries  , setcountries ] = useState([
    { country: "Austria", language: "German", flagUrl: "https://flagcdn.com/at.svg" ,isSelected : false },
    { country: "Belgium", language: "Dutch", flagUrl: "https://flagcdn.com/be.svg",isSelected : false },
    { country: "Belgium", language: "French", flagUrl: "https://flagcdn.com/be.svg",isSelected : false },
    { country: "Bosnia", language: "English", flagUrl: "https://flagcdn.com/ba.svg",isSelected : false },
    { country: "Bulgaria", language: "Bulgarian", flagUrl: "https://flagcdn.com/bg.svg" ,isSelected : false},
    { country: "China", language: "Chinese", flagUrl: "https://flagcdn.com/cn.svg",isSelected : false },
    { country: "Croatia", language: "English", flagUrl: "https://flagcdn.com/hr.svg",isSelected : false },
    { country: "Cyprus", language: "English", flagUrl: "https://flagcdn.com/cy.svg" ,isSelected : false},
    { country: "Czech Republic", language: "Czech", flagUrl: "https://flagcdn.com/cz.svg",isSelected : false },
    { country: "Denmark", language: "Danish", flagUrl: "https://flagcdn.com/dk.svg" ,isSelected : false},
    { country: "Estonia", language: "English", flagUrl: "https://flagcdn.com/ee.svg" ,isSelected : false},
    { country: "Finland", language: "English", flagUrl: "https://flagcdn.com/fi.svg" ,isSelected : false},
    { country: "France", language: "French", flagUrl: "https://flagcdn.com/fr.svg",isSelected : false },
    { country: "Germany", language: "German", flagUrl: "https://flagcdn.com/de.svg" ,isSelected : false},
    { country: "Great Britain", language: "English", flagUrl: "https://flagcdn.com/gb.svg" ,isSelected : false},
    { country: "Greece", language: "Greek", flagUrl: "https://flagcdn.com/gr.svg" ,isSelected : false},
    { country: "Hungary", language: "Hungarian", flagUrl: "https://flagcdn.com/hu.svg" ,isSelected : false},
    { country: "Ireland", language: "English", flagUrl: "https://flagcdn.com/ie.svg",isSelected : false },
    { country: "Italy", language: "Italian", flagUrl: "https://flagcdn.com/it.svg" ,isSelected : false},
    { country: "Latvia", language: "English", flagUrl: "https://flagcdn.com/lv.svg" ,isSelected : false},
    { country: "Latvia", language: "Latvian", flagUrl: "https://flagcdn.com/lv.svg" ,isSelected : false},
    { country: "Lithuania", language: "Lithuanian", flagUrl: "https://flagcdn.com/lt.svg" ,isSelected : false},
    { country: "Luxembourg", language: "French", flagUrl: "https://flagcdn.com/lu.svg" ,isSelected : false},
    { country: "Malta", language: "English", flagUrl: "https://flagcdn.com/mt.svg" ,isSelected : false},
    { country: "Montenegro", language: "English", flagUrl: "https://flagcdn.com/me.svg" ,isSelected : false},
    { country: "Morocco", language: "French", flagUrl: "https://flagcdn.com/ma.svg" ,isSelected : false},
    { country: "Netherlands", language: "Dutch", flagUrl: "https://flagcdn.com/nl.svg" ,isSelected : false},
    { country: "Norway", language: "Norwegian", flagUrl: "https://flagcdn.com/no.svg" ,isSelected : false},
    { country: "Poland", language: "Polish", flagUrl: "https://flagcdn.com/pl.svg" ,isSelected : false},
    { country: "Portugal", language: "Portuguese", flagUrl: "https://flagcdn.com/pt.svg",isSelected : false },
    { country: "Romania", language: "Romanian", flagUrl: "https://flagcdn.com/ro.svg",isSelected : false },
    { country: "Serbia", language: "English", flagUrl: "https://flagcdn.com/rs.svg" ,isSelected : false},
    { country: "Slovakia", language: "English", flagUrl: "https://flagcdn.com/sk.svg" ,isSelected : false},
    { country: "Spain", language: "Catalan", flagUrl: "https://flagcdn.com/es.svg" ,isSelected : true},
    { country: "Spain", language: "Spanish", flagUrl: "https://flagcdn.com/es.svg",isSelected : false },
    { country: "Sweden", language: "Swedish", flagUrl: "https://flagcdn.com/se.svg",isSelected : false },
    { country: "Turkey", language: "English", flagUrl: "https://flagcdn.com/tr.svg" ,isSelected : false},
    { country: "Ukraine", language: "Ukrainian", flagUrl: "https://flagcdn.com/ua.svg" ,isSelected : false},
    { country: "United States", language: "English", flagUrl: "https://flagcdn.com/us.svg",isSelected : false }
  ])
  const [countriesStatus , setcountriesStatus] = useState(false)
  const [countriesSelected , setcountriesSelected] = useState(
    { country: "Morocco", language: "French", flagUrl: "https://flagcdn.com/ma.svg" ,isSelected : true},
  )
  const OpenLanguePickerHandler = () =>{
    setcountriesStatus(!countriesStatus);
  }
  const ChangeLangueHandler = (item) =>{
    setcountriesSelected(item);
    setcountriesStatus(false);
  }
  return (
    <div className="relative">
    <div className='bg-maincolor text-black flex justify-between items-center px-8 py-3'>
      <div className="flex items-center gap-1">
        <Image
          src="/main-logo.png"
          width={20}
          height={20}
          alt='' />
        <span className='text-[1.5rem]'>AmineAir</span>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <a className='flex flex-row justify-center items-center gap-2 hover:underline' href=''>
          <span>Planifier</span>
          <IoIosArrowDown />
        </a>
        <div className="h-[20px] w-[1px] bg-blue-400"></div>
        <a className='hover:underline' href=''>FAQ</a>
        <div className="h-[20px] w-[1px] bg-blue-400"></div>
        <div className="flex items-center gap-2 cursor-pointer" onClick={()=>OpenLanguePickerHandler()}>
          {countriesSelected && <>
            <Image
            src={countriesSelected.flagUrl}
            width={32}
            height={20}
            alt='' />
          </>}
          <IoIosArrowDown className={`transition-all ${countriesStatus ? 'rotate-180 ': 'rotate-0 '}`} />

        
        </div>
        <div className="h-[20px] w-[1px] bg-blue-400"></div>
        <a href=''>S'inscrire</a>
        <a className='bg-secondcolor px-4 py-1 rounded-xl' href=''>Se connecter</a>
      </div>
    </div>
    <div className={`${countriesStatus ? '' : "hidden"} absolute left-0 right-0 bg-white `}>
      <div className="container grid grid-cols-4 p-2 gap-x-4">
      {countries && countries.map((item ,index)=>(
        <>
    <div 
     className={`flex flex-row items-center py-2 px-2 gap-3 cursor-pointer border-2 border-white ${countriesSelected.country == item.country ? 'border-blue-500 bg-blue-200' : item.isSelected ? "hover:border-white" : " hover:border-gray-300"}`} 
     onClick={()=>ChangeLangueHandler(item)}
     key={`${item.country}-${item.language}-${index}`}>
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