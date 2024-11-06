import Header from './Components/header';
import SearchBar from './Components/searchbar';

import './globals.css'
import Link from 'next/link';

export default function Home() {

  return (
    <>
    <Header />
    <SearchBar />
      Navigate to :
      <ul>
        <li><Link href="/searchresults">Search Results</Link></li>
      </ul>
    </>
    
  );
}
