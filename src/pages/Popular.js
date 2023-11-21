import React, { useEffect, useState } from 'react';
import Movies from '../components/Movie/Movie';
import Hero from '../components/Hero';
import GetDataPopular from '../utils/networks/GetDataPopular';

const Popular = () => {

    const [movies, setMovies] = useState([])
    const [pages, setPages] = useState(1)

    const getData = async(number) => {
        const data = await GetDataPopular(number)
        await setMovies(data.results)
    }

    const handleNext = () => {
        const data = pages
        setPages(data+1)
    }

    const handleBefore = () => {
        if(pages > 1) {
            const data = pages
            setPages(data-1)
        }else {
            setPages(1)
        }
    }

    useEffect(
        function(){
            getData()
        }, [pages]
    )

    return (
        <div>
            <Hero/>
            <Movies item ={movies} title={"Popular Movies"}/>
            <button onClick={handleBefore} variant="primary">Kembali</button>
            <button onClick={handleNext} variant="secondary">Selanjutnya</button>
        </div>
    );
}

export default Popular;
