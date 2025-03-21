import { useState, useEffect } from 'react'
import { useLocalStorage } from "@uidotdev/usehooks";
import Header from './components/Header'
import Footer from './components/Footer'
import Grid from './components/Grid'
import axios from 'axios';

function App() {
  const [listings, setListings] = useLocalStorage<any[]>("properties", []);
  const [error, setError] = useState<string | null>(null);

  const fetchListings = async () => {
    setListings([]);

    try {
      const END_POINT = "http://localhost:5001/scrape";
      const response = await axios.get(END_POINT);

      if (response.data.length === 0 || !Array.isArray(response.data)) {
        throw new Error("No Listings Found");
      }

      setListings(response.data);
    } catch (error: any) {
      setError(error.response?.data?.error || "Failed to fetch listings. Please try again later.");
    }
  }


  useEffect(() => {
    if (listings.length === 0) {
      fetchListings();
    }
  }, []);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-slate-700/50'>
      <Header />
      <Grid listings={[]} />
      <Footer />
    </div>
  )
}

export default App
