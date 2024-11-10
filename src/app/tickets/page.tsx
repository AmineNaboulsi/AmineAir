"use client" ;

import React , {useState , useRef , useEffect} from 'react'
import Header from '../Components/header';
import StatusInfo from '../Components/statusinfo'
import { IoMdDownload } from "react-icons/io";
import Image from 'next/image'
import { GiCommercialAirplane } from "react-icons/gi";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRouter } from 'next/navigation';


interface Places {
    Taked : boolean ,
    isEmpty : boolean ,
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

type ticketM = {
    namep : string ;
    datedepart : Date ;
    CityS : string ;
    CityE : string ;
    TimeS : string ;
    TimeE : string ;
    placeN : number ;
    PortN : number ;
    PlaneN : string ;
    Price : number ;
}
function Tickets() {

    const [Vols ] = useState<VolM[]>([
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
      const [VolsPicked , setVolsPicked] = useState<VolM>();

    const [Tocketslist , setTocketslist ] = useState<ticketM[]>();
    const [placesNumbers , setplacesNumbers] = useState([]);

    // const [NbpeoplePrice , setNbpeoplePrice] = useState([]);

    useEffect(()=>{
        const searchdata = JSON.parse(localStorage.getItem('vatavols'));
       
        const id = localStorage.getItem('planeid');
        const findvol = Vols.find((item) => item.id == id);
        setVolsPicked(findvol);
       
        const categories = [
            searchdata?.NbPlaces?.Adultes ,
            searchdata?.NbPlaces?.teenager,
            searchdata?.NbPlaces?.child,
            searchdata?.NbPlaces?.Baby
        ]
        if (searchdata && searchdata.NbPlaces?.Adultes > 0) {
            const updatedTickets: ticketM[] = [];
            const placesNumbers_ = JSON.parse(localStorage.getItem('placesNumbers'));
            const newarraypalces = [];
            const categoriesM = [
              searchdata?.NbPlaces?.Adultes ,
              searchdata?.NbPlaces?.teenager,
              searchdata?.NbPlaces?.child,
              searchdata?.NbPlaces?.Baby
            ] ;
            let index = 0 ;
            placesNumbers_.map((item,i)=>{
              if( item.isEmpty==true && item.Taked == true){

                  let price_ = findvol?.price ; 
                  if(categoriesM[index] > 0){
                    categoriesM[index]--;
                    newarraypalces.push({number_seat : i , price : price_});
                    return;
                  }

                  if(categoriesM[index+1] > 0){
                    categoriesM[index+1]--;
                    price_-= 50;
                    newarraypalces.push({number_seat : i , price : price_});
                    return;
                  }
                  if(categoriesM[index+2] > 0){
                    categoriesM[index+2]--;
                    price_-= 100;
                    newarraypalces.push({number_seat : i , price : price_});
                    return;
                  }
                  else if(categoriesM[index+3] > 0){
                    categoriesM[index+3]--;
                    price_-= 150;
                    newarraypalces.push({number_seat : i , price : price_});
                    return;
                  }

              }
            })
            setplacesNumbers(newarraypalces); 
            console.log({newarraypalces : newarraypalces})
            
            for (let j = 0; j < 4; j++) {
                const newnb:number = categories[j];
                if(newnb>0){
                    for (let i = 0; i < newnb; i++) {
                        updatedTickets.push({
                          namep:  'Amine Air',
                          datedepart: new Date(searchdata?.DateStart),
                          CityS: searchdata?.CityStart || '',
                          CityE: searchdata?.CityEnd || '',
                          TimeS: findvol?.departureTime || '',
                          TimeE: findvol?.arrivalTime || '',
                          placeN: i + 1,
                          PlaneN : findvol?.flightNumber || '',
                          PortN: 18,
                          Price: findvol?.price || 0,
                        });
                      }
                    setTocketslist(updatedTickets);
                    console.log(updatedTickets);
                }
               
            }
          //  console.log({'tikcet list' : Tocketslist});
          //  console.log({'vols list' : Vols});
          } else {
            router.push('/');
          }

        
      },[]);

    // const pdfRef = useRef<HTMLDivElement>(null);

    // const handleGeneratePdf = async () => {
    //     if (typeof window !== 'undefined' && pdfRef.current) {
    //       const element = pdfRef.current;
    
    //       // Capture the section as an image
    //       const canvas = await html2canvas(element);
    //       const imageData = canvas.toDataURL('image/png');
    
    //       // Create a new PDF document and add the image
    //       const pdf = new jsPDF();
    //       const imgWidth = 190;
    //       const imgHeight = (canvas.height * imgWidth) / canvas.width;
    //       pdf.addImage(imageData, 'PNG', 10, 10, imgWidth, imgHeight);
    
    //       // Save the PDF file
    //       pdf.save('download.pdf');
    //     }
    //     else{
    //         console.log("click else")
    //     }
    //   };

  return (
    <div>
       <Header />
        <StatusInfo />
        <section>
            <div className="container">
                <div className="border-2 border-gray-300 rounded-md">
                    <div className="bg-gray-200 py-5 px-2">
                        <span>List  des ticket </span>
                    </div>
                    <div className="overflow-auto  flex flex-col gap-2 py-2 h-[60vh]">
                    {Tocketslist && Tocketslist.map((item:ticketM, i:number)=>(<>
                        <div /*ref={pdfRef}*/ className="w-[1024px] relative mx-8 border-[1px] border-black">
                            <div className="">
                                <div className="px-2 flex justify-between items-center bg-maincolor">
                                    <div className=" text-white py-4 px-3 flex w-full flex-row justify-start items-center mr-3 ">
                                        <Image src="/main-logo.png" width={40} height={40} alt='' />
                                        <span>Amine Air</span>
                                    </div>
                                    <IoMdDownload size={20} className='text-white mr-5' /* onClick={handleGeneratePdf} */ />
                                </div>
                            </div>
                            <div className="grid grid-cols-[1fr,25%]">
                                <div className="grid grid-cols-[1fr,25%]">
                                    <div className="grid justify-stretch items-center p-3">
                                        <div className="">
                                            <div className="grid grid-cols-3 h-12">
                                                <span className='pl-2'>Nom du passager</span>
                                                <span className='pl-2'>Date</span>
                                                <span className='pl-2'  >Vol</span>
                                            </div>
                                            <div className="grid grid-cols-3">
                                                <div className="relative border-b-2 border-black border-l-2 h-2">
                                                    <span className='absolute left-2 -bottom-[0] bg-transparent'>xxxxxx</span>
                                                </div>
                                                <div className="relative border-b-2 border-black border-l-2 h-2">
                                                    <span className='absolute left-2 -bottom-[0] bg-transparent'>{item.datedepart.toISOString().split('T')[0]}</span>
                                                </div>
                                                <div className="relative border-b-2 border-black border-l-2 h-2">
                                                    <span className='absolute left-2 -bottom-[0] bg-transparent'>{item.PlaneN}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="grid grid-cols-3 h-12">
                                                <span className='pl-2'>Depart de </span>
                                                <span className='pl-2'>Embarquement</span>
                                                <span className='pl-2'  >Départ</span>
                                            </div>
                                            <div className="grid grid-cols-3">
                                                <div className="relative border-b-2 border-black border-l-2 h-2">
                                                    <span className='absolute left-2 -bottom-[0] bg-transparent'>{item.CityS}</span>
                                                </div>
                                                <div className="relative border-b-2 border-black border-l-2 h-2">
                                                    <span className='absolute left-2 -bottom-[0] bg-transparent'>16:50</span>
                                                </div>
                                                <div className="relative border-b-2 border-black border-l-2 h-2">
                                                    <span className='absolute left-2 -bottom-[0] bg-transparent'>{item.TimeS}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="grid grid-cols-3 h-12">
                                                <span className='pl-2'>Destination</span>
                                                <span className='pl-2'>Porte</span>
                                                <span className='pl-2'>Place</span>
                                            </div>
                                            <div className="grid grid-cols-3">
                                                <div className="relative border-b-2 border-black border-l-2 h-2">
                                                    <span className='absolute left-2 -bottom-[0] bg-transparent'>{item.CityE}</span>
                                                </div>
                                                <div className="relative border-b-2 border-black border-l-2 h-2">
                                                    <span className='absolute left-2 -bottom-[0] bg-transparent'>18</span>
                                                </div>
                                                <div className="relative border-b-2 border-black border-l-2 h-2">
                                                    <span className='absolute left-2 -bottom-[0] bg-transparent'>{placesNumbers[i].number_seat +1}</span>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div className="flex flex-col justify-end items-center gap-5 mb-3">
                                        <span className='mt-2'>{parseInt(placesNumbers[i].price )} MAD</span>
                                        <Image src='/QR Code.png' width={90} height={90} alt=''/>
                                        <svg width="167" height="54" viewBox="0 0 167 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 49.9038C21.0024 47.5561 41.212 40.6247 60.2908 34.6277C89.2183 25.5349 117.606 14.8052 146.607 5.93377C150.927 4.61217 158.019 2.55896 162.771 1.46118C165.107 0.921544 168.296 0.517219 163.529 2.2801C143.482 9.6936 121.41 12.613 100.355 15.4774C78.8508 18.4029 57.2381 20.2579 35.6021 21.8713C32.029 22.1378 21.376 23.2398 24.8679 22.4383C34.5793 20.209 43.9112 16.2235 52.9978 12.2332C58.9536 9.61778 64.7811 6.70429 70.7724 4.16993C72.4408 3.46422 76.2929 1.33211 76.108 3.13053C75.9178 4.98037 74.8066 6.61732 74.2453 8.39055C72.3769 14.2933 71.3535 20.3852 70.7093 26.5329C69.8795 34.4515 68.8937 43.4019 70.1094 51.3527C70.4393 53.51 71.8154 53.5228 72.4773 51.5417C74.0053 46.9682 74.0117 41.9036 75.445 37.2419C80.3633 21.2458 77.7362 44.8013 81.1278 44.8013" stroke="black" stroke-linecap="round"/>
                                        </svg>  
                                    </div>
                                </div>
                                <div className="flex flex-col items-center py-3 gap-2">
                                    <GiCommercialAirplane size={40} />
                                    <span>{item.PlaneN}</span>
                                    <div className="w-[80%] h-[2px] bg-gray-800"></div>
                                    <div className="flex w-[80%] justify-between">
                                        <div className="flex flex-col gap-3">
                                            <div className="flex flex-col">
                                                <span>Passager</span>
                                                <span>{VolsPicked?.price}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span>Embarquement</span>
                                                <span>{item.TimeS}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex flex-col">
                                                <span>Porte</span>
                                                <span>{item.PortN}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span>Place</span>
                                                <span >{placesNumbers[i].number_seat +1}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 bottom-0 right-[25%] border-r-2 border-gray-700 border-dashed custom-dashed-spacing"></div>
                            </div>
                        </div>
                    </>))}
                    </div>
               
                    
                </div>
            </div>
        </section>
       

    </div>
  )
}

export default Tickets