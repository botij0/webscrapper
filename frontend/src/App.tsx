import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";

import { Listing } from './schemas/listing';

import Grid from './components/Grid';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import RefreshButton from './components/RefreshButton';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [listings, setListings] = useLocalStorage<Listing[]>("properties", []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchListings = async () => {
    setIsLoading(true);
    setListings([]);

    try {
      const END_POINT = "http://localhost:5001/scrape";
      const response = await axios.get(END_POINT);

      if (response.data.length === 0 || !Array.isArray(response.data)) {
        throw new Error("No Listings Found");
      }

      setListings(response.data);
    }
    catch (error: any) {
      setError(error.response?.data?.error || "Failed to fetch listings. Please try again later.");
    }
    finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    if (listings.length === 0) {
      fetchListings();
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className='flex flex-col items-center min-h-screen bg-gradient-to-br from-emerald-900/70 to-emerald-200/50'>
        <Header />
        <main className='mb-auto mx-5 flex flex-col items-center justify-center'>
          <RefreshButton onClick={fetchListings} isLoading={isLoading} />
          {error && <p className='text-red-500 text-center'>{error}</p>}
          {isLoading ? <Loader /> : <Grid listings={listings} />}
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
