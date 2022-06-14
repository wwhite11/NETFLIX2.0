import axios from './axios';
import React, { useEffect, useState } from 'react'
import './Row.css';

function Row({ title, fetchUrl, isLargeRow=false }) {

    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl])

    console.log(movies)

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row__posters">
        {movies.map(movie =>(
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} alt={movie.name}/>
            )
        ))}
        </div>
        
    </div>
  )
}

export default Row

/*  
I map through the movies array and for each movie, if isLargeRow is true, which I predefined 
in the HomeScreen for the  row props containing: 'Netflix Originals'   then we should display a larger image of the
movie which would be the poster_path.  OR IF isLargeRow is false, then we only display the backdrop_path. In a img element.

We will be displaying all movies for each category with thier respected images. 

*/