import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import GetDataTrending from '../utils/networks/GetDataTranding';

function Home() {
  const [Movies, setMovies] = useState([])

  const getData = async() => {
      const data = await GetDataTrending()
      await setMovies(data.results)
  }

  useEffect(
      function(){
          getData()
      }, []
  )
    
  return (
    <div>
      <Hero />
      <Movies item={Movies} title={'Treding'} />
    </div>
  );
}

export default Home;
