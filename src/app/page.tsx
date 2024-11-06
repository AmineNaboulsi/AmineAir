import Header from './Components/header';
import SearchBar from './Components/Searchbar';
import './globals.css'
import Image from 'next/image'

export default function Home() {
 
  return (
    <>
    <Header />
    <SearchBar />
    <div className="flex flex-col justify-center items-center">
      <Image width={100} height={100} src="/underM.gif" alt='' />
      Under maintenance
    </div>
    </>
    
  );
}
