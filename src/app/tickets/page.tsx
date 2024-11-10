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


type VolM = { id: number,
    airline: string,
    departureTime: string,
    origin: string,
    destination: string,
    flightNumber: string,
    duration: string,
    arrivalTime: string,
    price: number,
    seatAvailability: number};

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

    const [Vols , setVols] = useState<VolM[]>([
        { id: 1, airline: 'Amine Air', departureTime: '06:45', origin: 'Marrakech', destination: 'Casablanca', flightNumber: 'FR 2240', duration: '2h 25m', arrivalTime: '09:10', price: '1,519.10 Dhs', seatAvailability: 3},
        { id: 2, airline: 'Amine Air', departureTime: '08:30', origin: 'Casablanca', destination: 'Rabat', flightNumber: 'FR 2241', duration: '1h 15m', arrivalTime: '09:45', price: '899.50 Dhs', seatAvailability:5 },
        { id: 3, airline: 'Amine Air', departureTime: '09:00', origin: 'Tangier', destination: 'Fez', flightNumber: 'FR 2242', duration: '1h 00m', arrivalTime: '10:00', price: '750.00 Dhs', seatAvailability: 12 },
        { id: 4, airline: 'Amine Air', departureTime: '10:15', origin: 'Agadir', destination: 'Marrakech', flightNumber: 'FR 2243', duration: '1h 30m', arrivalTime: '11:45', price: '1,200.00 Dhs', seatAvailability: 6 },
        { id: 5, airline: 'Amine Air', departureTime: '12:30', origin: 'Casablanca', destination: 'Tangier', flightNumber: 'FR 2244', duration: '2h 15m', arrivalTime: '14:45', price: '1,350.00 Dhs', seatAvailability: 2 },
        { id: 6, airline: 'Amine Air', departureTime: '14:00', origin: 'Fez', destination: 'Rabat', flightNumber: 'FR 2245', duration: '1h 20m', arrivalTime: '15:20', price: '920.00 Dhs', seatAvailability: 8 },
        { id: 7, airline: 'Amine Air', departureTime: '15:45', origin: 'Rabat', destination: 'Marrakech', flightNumber: 'FR 2246', duration: '1h 50m', arrivalTime: '17:35', price: '1,050.00 Dhs', seatAvailability: 5 },
        { id: 8, airline: 'Amine Air', departureTime: '17:00', origin: 'Casablanca', destination: 'Essaouira', flightNumber: 'FR 2247', duration: '1h 40m', arrivalTime: '18:40', price: '1,150.00 Dhs', seatAvailability: 7 },
        { id: 9, airline: 'Amine Air', departureTime: '18:30', origin: 'Fez', destination: 'Tangier', flightNumber: 'FR 2248', duration: '1h 10m', arrivalTime: '19:40', price: '900.00 Dhs', seatAvailability: 4 },
        { id: 10, airline: 'Amine Air', departureTime: '19:15', origin: 'Oujda', destination: 'Casablanca', flightNumber: 'FR 2249', duration: '2h 30m', arrivalTime: '21:45', price: '1,400.00 Dhs', seatAvailability: 6 },
        { id: 11, airline: 'Amine Air', departureTime: '20:00', origin: 'Casablanca', destination: 'Agadir', flightNumber: 'FR 2250', duration: '1h 35m', arrivalTime: '21:35', price: '1,100.00 Dhs', seatAvailability: 3 },
        { id: 12, airline: 'Amine Air', departureTime: '21:45', origin: 'Marrakech', destination: 'Fez', flightNumber: 'FR 2251', duration: '2h 00m', arrivalTime: '23:45', price: '1,200.00 Dhs', seatAvailability: 9 },
        { id: 13, airline: 'Amine Air', departureTime: '07:30', origin: 'Essaouira', destination: 'Rabat', flightNumber: 'FR 2252', duration: '2h 20m', arrivalTime: '09:50', price: '1,250.00 Dhs', seatAvailability: 4},
        { id: 14, airline: 'Amine Air', departureTime: '09:15', origin: 'Tangier', destination: 'Casablanca', flightNumber: 'FR 2253', duration: '1h 45m', arrivalTime: '11:00', price: '1,300.00 Dhs', seatAvailability: 2 },
        { id: 15, airline: 'Amine Air', departureTime: '13:00', origin: 'Agadir', destination: 'Rabat', flightNumber: 'FR 2254', duration: '1h 55m', arrivalTime: '14:55', price: '1,400.00 Dhs', seatAvailability: 7 },
        { id: 16, airline: 'Amine Air', departureTime: '14:30', origin: 'Marrakech', destination: 'Tangier', flightNumber: 'FR 2255', duration: '2h 15m', arrivalTime: '16:45', price: '1,600.00 Dhs', seatAvailability: 3 },
        { id: 17, airline: 'Amine Air', departureTime: '16:00', origin: 'Rabat', destination: 'Fez', flightNumber: 'FR 2256', duration: '1h 30m', arrivalTime: '17:30', price: '1,000.00 Dhs', seatAvailability: 6 },
        { id: 18, airline: 'Amine Air', departureTime: '18:45', origin: 'Casablanca', destination: 'Oujda', flightNumber: 'FR 2257', duration: '2h 45m', arrivalTime: '21:30', price: '1,800.00 Dhs', seatAvailability: 2 },
        { id: 19, airline: 'Amine Air', departureTime: '20:15', origin: 'Essaouira', destination: 'Marrakech', flightNumber: 'FR 2258', duration: '1h 20m', arrivalTime: '21:35', price: '1,050.00 Dhs', seatAvailability: 6 },
        { id: 20, airline: 'Amine Air', departureTime: '22:30', origin: 'Fez', destination: 'Agadir', flightNumber: 'FR 2259', duration: '2h 30m', arrivalTime: '01:00', price: '1,500.00 Dhs', seatAvailability: 8 }
      ]);

    const [Tocketslist , setTocketslist ] = useState<ticketM[]>();

    useEffect(()=>{
        const searchdata = JSON.parse(localStorage.getItem('vatavols'));
        const id = localStorage.getItem('planeid');
        setVols((pre : VolM[])=>pre.filter((item)=>item.id == id))
        const categories = [
            searchdata.NbPlaces.Adultes ,
            searchdata.NbPlaces.teenager,
            searchdata.NbPlaces.child,
            searchdata.NbPlaces.Baby
        ]
        if (searchdata && searchdata.NbPlaces?.Adultes > 0) {
            const updatedTickets: ticketM[] = [];
      
            for (let j = 0; j < 4; j++) {
                const newnb:number = categories[j];
                if(newnb>0){
                    for (let i = 0; i < newnb; i++) {
                        updatedTickets.push({
                          namep: searchdata[i]?.cds || '',
                          datedepart: new Date(searchdata[i]?.DateStart),
                          CityS: searchdata[i]?.CityStart || '',
                          CityE: searchdata[i]?.CityEnd || '',
                          TimeS: Vols[0]?.departureTime || '',
                          TimeE: Vols[0]?.arrivalTime || '',
                          placeN: i + 1,
                          PlaneN : Vols[0]?.flightNumber || '',
                          PortN: 19,
                          Price: Vols[0]?.price || 0,
                        });
                      }
                
                      
                }
               
            }
            setTocketslist(updatedTickets);
           console.log({'tikcet list' : Tocketslist});
           console.log({'vols list' : Vols});
          } else {
            router.push('/');
          }

        
      },[]);

    const pdfRef = useRef<HTMLDivElement>(null);

    const handleGeneratePdf = async () => {
        if (typeof window !== 'undefined' && pdfRef.current) {
          const element = pdfRef.current;
    
          // Capture the section as an image
          const canvas = await html2canvas(element);
          const imageData = canvas.toDataURL('image/png');
    
          // Create a new PDF document and add the image
          const pdf = new jsPDF();
          const imgWidth = 190;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          pdf.addImage(imageData, 'PNG', 10, 10, imgWidth, imgHeight);
    
          // Save the PDF file
          pdf.save('download.pdf');
        }
        else{
            console.log("click else")
        }
      };

  return (
    <div>
       <Header />
        <StatusInfo />
        <section>
            <div className="container">
                <div className="border-2 border-gray-300 rounded-md">
                    <div className="bg-gray-200 py-5 px-2">
                        <span>List  des ticket</span>
                    </div>
                    <div className="overflow-auto flex flex-col gap-2 py-2 h-[60vh]">
                    {Tocketslist && Tocketslist.map((item:ticketM, i:number)=>(<>
                    <div ref={pdfRef} className="relative mx-8 border-[1px] border-black">
                        <div className="">
                            <div className="px-2 flex justify-between items-center bg-maincolor">
                                <div className=" text-white py-4 px-3 flex w-full flex-row justify-start items-center mr-3 ">
                                    <Image src="/main-logo.png" width={40} height={40} alt='' />
                                    <span>Amine Air</span>
                                </div>
                                <IoMdDownload size={20} className='text-white mr-5' onClick={handleGeneratePdf}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-[1fr,25%]">
                            <div className="grid grid-cols-[1fr,25%]">
                                <div className=""></div>
                                <div className="flex flex-col justify-end items-center gap-5 mb-3">
                                    <Image src='/QR Code.png' width={90} height={90} alt=''/>
                                    <svg width="167" height="54" viewBox="0 0 167 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 49.9038C21.0024 47.5561 41.212 40.6247 60.2908 34.6277C89.2183 25.5349 117.606 14.8052 146.607 5.93377C150.927 4.61217 158.019 2.55896 162.771 1.46118C165.107 0.921544 168.296 0.517219 163.529 2.2801C143.482 9.6936 121.41 12.613 100.355 15.4774C78.8508 18.4029 57.2381 20.2579 35.6021 21.8713C32.029 22.1378 21.376 23.2398 24.8679 22.4383C34.5793 20.209 43.9112 16.2235 52.9978 12.2332C58.9536 9.61778 64.7811 6.70429 70.7724 4.16993C72.4408 3.46422 76.2929 1.33211 76.108 3.13053C75.9178 4.98037 74.8066 6.61732 74.2453 8.39055C72.3769 14.2933 71.3535 20.3852 70.7093 26.5329C69.8795 34.4515 68.8937 43.4019 70.1094 51.3527C70.4393 53.51 71.8154 53.5228 72.4773 51.5417C74.0053 46.9682 74.0117 41.9036 75.445 37.2419C80.3633 21.2458 77.7362 44.8013 81.1278 44.8013" stroke="black" stroke-linecap="round"/>
                                    </svg>  
                                </div>
                            </div>
                            <div className="flex flex-col items-center py-3 gap-2">
                                <GiCommercialAirplane size={40} />
                                <span>FR 6763ddd</span>
                                <div className="w-[80%] h-[2px] bg-gray-800"></div>
                                <div className="flex w-[80%] justify-between">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col">
                                            <span>Passager</span>
                                            <span></span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span>Embarquement</span>
                                            <span>{item.TimeS}</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex flex-col">
                                            <span>Porte</span>
                                            <span>{item.PortN}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span>Place</span>
                                            <span >15</span>
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