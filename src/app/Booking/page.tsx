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

  type TotalRecu = {
    totalprice: number,
    placecat : number[]
  }


function Booking() {

  const [Vols , setVols] = useState<VolM[]>([
    { id: 1, airline: 'Amine Air', departureTime: '06:45', origin: 'Marrakech', destination: 'Casablanca', flightNumber: 'FR 2240', duration: '2h 25m', arrivalTime: '09:10', price: 1519.10 , seatAvailability: 3 ,PlacesNb :[
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
    ] },
    { id: 2, airline: 'Amine Air', departureTime: '08:30', origin: 'Casablanca', destination: 'Rabat', flightNumber: 'FR 2241', duration: '1h 15m', arrivalTime: '09:45', price: 899.50, seatAvailability:5,PlacesNb :[
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
    ]  },
    { id: 3, airline: 'Amine Air', departureTime: '09:00', origin: 'Tangier', destination: 'Fez', flightNumber: 'FR 2242', duration: '1h 00m', arrivalTime: '10:00', price: 750.00, seatAvailability: 12,PlacesNb :[
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
    ]  },
    { id: 4, airline: 'Amine Air', departureTime: '10:15', origin: 'Agadir', destination: 'Marrakech', flightNumber: 'FR 2243', duration: '1h 30m', arrivalTime: '11:45', price: 1200.00, seatAvailability: 6,PlacesNb :[
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
    ]  },
    { id: 5, airline: 'Amine Air', departureTime: '12:30', origin: 'Casablanca', destination: 'Tangier', flightNumber: 'FR 2244', duration: '2h 15m', arrivalTime: '14:45', price: 1350.00, seatAvailability: 2 ,PlacesNb :[
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
    ] },
    { id: 6, airline: 'Amine Air', departureTime: '14:00', origin: 'Fez', destination: 'Rabat', flightNumber: 'FR 2245', duration: '1h 20m', arrivalTime: '15:20', price: 920.00 , seatAvailability: 8 ,PlacesNb :[
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
    ] },
    { id: 7, airline: 'Amine Air', departureTime: '15:45', origin: 'Rabat', destination: 'Marrakech', flightNumber: 'FR 2246', duration: '1h 50m', arrivalTime: '17:35', price: 1050.00, seatAvailability: 5 ,PlacesNb :[
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
    ] },
    { id: 8, airline: 'Amine Air', departureTime: '17:00', origin: 'Casablanca', destination: 'Essaouira', flightNumber: 'FR 2247', duration: '1h 40m', arrivalTime: '18:40', price: 1150.00, seatAvailability: 7,PlacesNb :[
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
    ]  },
    { id: 9, airline: 'Amine Air', departureTime: '18:30', origin: 'Fez', destination: 'Tangier', flightNumber: 'FR 2248', duration: '1h 10m', arrivalTime: '19:40', price: 900.00, seatAvailability: 4 ,PlacesNb :[
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
    ] },
    { id: 10, airline: 'Amine Air', departureTime: '19:15', origin: 'Oujda', destination: 'Casablanca', flightNumber: 'FR 2249', duration: '2h 30m', arrivalTime: '21:45', price: 1400.00, seatAvailability: 6,PlacesNb :[
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
    ]  },
    { id: 11, airline: 'Amine Air', departureTime: '20:00', origin: 'Casablanca', destination: 'Agadir', flightNumber: 'FR 2250', duration: '1h 35m', arrivalTime: '21:35', price: 1100.00, seatAvailability: 3,PlacesNb :[
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
    ]  },
    { id: 12, airline: 'Amine Air', departureTime: '21:45', origin: 'Marrakech', destination: 'Fez', flightNumber: 'FR 2251', duration: '2h 00m', arrivalTime: '23:45', price: 1200.00, seatAvailability: 9,PlacesNb :[
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
    ]  },
    { id: 13, airline: 'Amine Air', departureTime: '07:30', origin: 'Essaouira', destination: 'Rabat', flightNumber: 'FR 2252', duration: '2h 20m', arrivalTime: '09:50', price: 1250.00, seatAvailability: 4,PlacesNb :[
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
    ] },
    { id: 14, airline: 'Amine Air', departureTime: '09:15', origin: 'Tangier', destination: 'Casablanca', flightNumber: 'FR 2253', duration: '1h 45m', arrivalTime: '11:00', price: 1300.00, seatAvailability: 2 ,PlacesNb :[
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
    ] },
    { id: 15, airline: 'Amine Air', departureTime: '13:00', origin: 'Agadir', destination: 'Rabat', flightNumber: 'FR 2254', duration: '1h 55m', arrivalTime: '14:55', price: 1400.00, seatAvailability: 7 ,PlacesNb :[
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
    ] },
    { id: 16, airline: 'Amine Air', departureTime: '14:30', origin: 'Marrakech', destination: 'Tangier', flightNumber: 'FR 2255', duration: '2h 15m', arrivalTime: '16:45', price: 1600.00, seatAvailability: 3 ,PlacesNb :[
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
    ] },
    { id: 17, airline: 'Amine Air', departureTime: '16:00', origin: 'Rabat', destination: 'Fez', flightNumber: 'FR 2256', duration: '1h 30m', arrivalTime: '17:30', price: 1000.00, seatAvailability: 6 ,PlacesNb :[
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
    ] },
    { id: 18, airline: 'Amine Air', departureTime: '18:45', origin: 'Casablanca', destination: 'Oujda', flightNumber: 'FR 2257', duration: '2h 45m', arrivalTime: '21:30', price: 1800.00, seatAvailability: 2 ,PlacesNb :[
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
    ] },
    { id: 19, airline: 'Amine Air', departureTime: '20:15', origin: 'Essaouira', destination: 'Marrakech', flightNumber: 'FR 2258', duration: '1h 20m', arrivalTime: '21:35', price: 1050.00, seatAvailability: 6,PlacesNb :[
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
    ]  },
    { id: 20, airline: 'Amine Air', departureTime: '22:30', origin: 'Fez', destination: 'Agadir', flightNumber: 'FR 2259', duration: '2h 30m', arrivalTime: '01:00', price: 1500.00 , seatAvailability: 8,PlacesNb :[
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
    ]  }
  ]);
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
    if(HowManyPlaceLeft() < NbPlaceT)alert('Pick you places');
    else router.push("/tickets");
  }
  useEffect(()=>{
    const searchdata = localStorage.getItem('vatavols');
    if (searchdata) {
      const alldata = JSON.parse(searchdata);
      setVoleInfo(alldata);
  
      // Calculate total number of places picked
      const totalPlacesPicked = alldata.NbPlaces.Baby + alldata.NbPlaces.child + alldata.NbPlaces.teenager + alldata.NbPlaces.Adultes;
      setNbPlaceT(totalPlacesPicked);
  
      // Get the plane ID from localStorage and filter Vols
      const id = parseInt(localStorage.getItem('planeid'));
      setPlaneId(id);
      setVols((pre: VolM[]) => pre.filter((item) => item.id == id));
  
      // Calculate the total price
      let total = 0;
      let placecat = [0, 0, 0, 0];
  
      Vols.forEach((item: VolM) => {
        if (item.id === id) {
          const adultTotal = alldata.NbPlaces.Adultes * item.price;
          total += adultTotal;
          placecat[0] = adultTotal;
  
          if (alldata.NbPlaces.Baby > 0) {
            const babyTotal = (alldata.NbPlaces.Baby * item.price) - 50; 
            total += babyTotal;
            placecat[3] = babyTotal;
          }
  
          if (alldata.NbPlaces.child > 0) {
            const childTotal = (alldata.NbPlaces.child * item.price) - 50; 
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
    } else {
      router.push('/');
    }
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
  
    Vols.forEach((vol) => {
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
                  {Vols && Vols.map((item )=>
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
                <span >{TotalPrice && TotalPrice.totalprice}</span>
                
              </div>
              <div className="flex flex-col px-5 py-3">
                        {TotalPrice && TotalPrice?.placecat?.map((item,i)=>(
                          <>
                                  <div className="flex justify-between">
                                    <span>{i==0?"Adultes":i==1 ? "Teenager" : i==2 ? "Child" : "Baby" }</span>
                                    <span>{item}</span>
                                  </div>
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