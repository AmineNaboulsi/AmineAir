"use client" ;

import React , {useState , useEffect} from 'react'
import Header from '../Components/header';
import StatusInfo from '../Components/statusinfo'
import { IoMdDownload } from "react-icons/io";
import Image from 'next/image'
import { GiCommercialAirplane } from "react-icons/gi";
import QRCode from "react-qr-code";
import { useRouter } from 'next/navigation';

type Places = {
    Taked : boolean ;
    isEmpty : boolean ;
  }
  type DPlaces = {
    passager : string ,
    number_seat : number ;
    price : number;
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

    const [Vols ,setVols] = useState<VolM[]>();
      const [VolsPicked , setVolsPicked] = useState<VolM>();

    const [Tocketslist , setTocketslist ] = useState<ticketM[]>();
    const [placesNumbers , setplacesNumbers] = useState<DPlaces[]>();

    // const [NbpeoplePrice , setNbpeoplePrice] = useState([]);
    const router = useRouter();

    useEffect(()=>{
      console.log(Vols)
      console.log(VolsPicked)
      const fetchData = async () => {
        const response = await fetch('/api/vols');
        const data = await response.json();
        setVols(data);

        const searchdata = JSON.parse(localStorage.getItem('vatavols') ?? '[]');
       
        const id = localStorage.getItem('planeid');
        const findvol = data.find((item: VolM) => item.id == Number(id));
        setVolsPicked(findvol);
       
        const categories = [
            searchdata?.NbPlaces?.Adultes ,
            searchdata?.NbPlaces?.teenager,
            searchdata?.NbPlaces?.child,
            searchdata?.NbPlaces?.Baby
        ]
        if (searchdata && searchdata.NbPlaces?.Adultes > 0) {
            const updatedTickets: ticketM[] = [];
            const placesNumbers_ = JSON.parse(localStorage.getItem('placesNumbers') ?? '[]');
         
            const categoriesM = [
              searchdata?.NbPlaces?.Adultes ,
              searchdata?.NbPlaces?.teenager,
              searchdata?.NbPlaces?.child,
              searchdata?.NbPlaces?.Baby
            ] ;
            const index = 0;
            //console.log({placesNumbers_ : placesNumbers_})
            
            const newarraypalces : DPlaces[]  = [];

            placesNumbers_?.map((item: Places ,i:number)=>{
              if(item.isEmpty == true && item.Taked == true){
                  let price_ = findvol?.price ; 
                  if(categoriesM[index] > 0){
                    categoriesM[index]--;
                    newarraypalces.push({passager : 'Adulte' , number_seat : i , price : price_});
                    return;
                  }

                  if(categoriesM[index+1] > 0){
                    categoriesM[index+1]--;
                    price_-= 50;
                    newarraypalces.push({passager : 'Teneger' , number_seat : i , price : price_});
                    return;
                  }
                  if(categoriesM[index+2] > 0){
                    categoriesM[index+2]--;
                    price_-= 100;
                    newarraypalces.push({passager : 'Child' , number_seat : i , price : price_});
                    return;
                  }
                  else if(categoriesM[index+3] > 0){
                    categoriesM[index+3]--;
                    price_-= 150;
                    newarraypalces.push({passager : 'Baby' , number_seat : i , price : price_});
                    return;
                  }
                  

              }
            })
            setplacesNumbers(newarraypalces);
            // console.log({aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa : newarraypalces})
            
            for (let j = 0; j < 4; j++) {
                const newnb:number = categories[j];
                if(newnb>0){
                    for (let i = 0; i < newnb; i++) {
                        updatedTickets.push({
                          namep: 'Amine Air',
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
                    console.log({updatedTickets : updatedTickets});
                }
               
            }
          //  console.log({'tikcet list' : Tocketslist});
          //  console.log({'vols list' : Vols});
          } else {
            router.push('/');
          }
      };

     fetchData();

        
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
                        <div /*ref={pdfRef}*/ key={i+'Tocketslist'} className="w-[1024px] relative mx-8 border-[1px] border-black">
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
                                                    <span className='absolute left-2 -bottom-[0] bg-transparent'>{placesNumbers &&placesNumbers[i].number_seat +1}</span>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div className="flex flex-col justify-end items-center gap-5 mb-3">
                                        <span className='mt-2'>{Number(placesNumbers &&placesNumbers[i].price )} MAD</span>
                                        <QRCode value={placesNumbers ? (placesNumbers[i].passager + (i+1) + item.placeN +  (item.PlaneN )):''} className='h-20 w-20' />
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
                                                <span>{placesNumbers && placesNumbers[i]?.passager}</span>
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
                                                <span >{placesNumbers && placesNumbers[i].number_seat +1}</span>
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