import HomePage from './Components/Header';
import './globals.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <HomePage />
      Navigate to :
      <ul>
        <li><Link href="/Search-results">Search Results</Link></li>
      </ul>
    </>
    
  );
}
