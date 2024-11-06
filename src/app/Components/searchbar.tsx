import React from 'react'
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";
import Link from 'next/link';
import { FaArrowRightArrowLeft } from "react-icons/fa6";

function searchbar() {
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
                                <input value="Marrakech" className='font-normal' type='text' />
                            </div>
                            <div className="relative flex items-center h-[100%]">
                                <div className="absolute left-[50%] h-[100%] w-[1px] bg-gray-300"></div>
                                <FaArrowRightArrowLeft className='bg-white border-2 border-gray-300 rounded-[50%] w-[30px] h-[30px] p-[6px] z-[1] cursor-pointer' />
                            </div>
                            <div className="flex flex-col px-4 py-1">
                                <span className='text-gray-400 text-sm'>A</span>
                                <input value="Tanger" className='font-normal' type='text' />
                            </div> 
                        </div>
                    <Link className='flex items-center bg-secondcolor px-24 rounded-[3px]' href="/searchresults" >
                        <span>Recherche</span>
                    </Link>
                    <div className="grid grid-cols-[1fr,auto] gap-2  items-center rounded-[3px]">
                            <div className="flex flex-col px-4 py-1 bg-white rounded-[3px]">
                                <span className='text-gray-400 text-sm'>De</span>
                                <input value="Marrakech" className='font-normal' type='text' />
                            </div>
                            <div className="flex flex-col px-4 py-1 bg-white rounded-[3px]">
                                <span className='text-gray-400 text-sm'>Passagers</span>
                                <input value="1 Adulte" disabled className='font-normal' type='text' />
                            </div>
                        </div>
                </div>
                <div className="">vdsvdds</div>
            </div>
           
        </div>
        
    </div>
  )
}

export default searchbar