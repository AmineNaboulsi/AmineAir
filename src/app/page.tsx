import Header from './Components/header';
import './globals.css'
import Link from 'next/link';

export default function Home() {

  return (
    <>
    <Header />
      Navigate to :
      <ul>
        <li><Link href="/searchresults">Search Results</Link></li>
      </ul>
    </>
    
  );
}
