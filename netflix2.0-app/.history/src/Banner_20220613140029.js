import axios from './axios';
import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from './Requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, [])

    console.log(movie);

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

  return (
    <header 
    className='banner' 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://venturebeat.com/wp-content/uploads/2021/11/Netflix-Games-Banner.jpg?fit=1920%2C1080&strip=all")`,
        backgroundPosition: "center center"
    }}
    >
        <div className="banner__contents">
            <h1 className="banner__title">
                Movie Name
            </h1>
            <div className="banner__buttons">
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className="banner__description">
                {truncate(`This is a test description This is a test descriptionThis is a test 
                descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is 
                a test descriptionThis is a test descriptionThis is a test descriptionThis is a test 
                 descriptionThis is a test description This is a test descriptionThis is a test 
                 descriptionThis is a test description
                 This is a test descriptionThis is a test descriptionThis is a test description`, 150)}
            </h1>
        </div>

        <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner

/* 
on Line 8 I initialized a Movie Variable. 

 I created a useEffect to fetch the movie information... The fetchData() function inside of the useEffect function is going to be 
reponsible for fetching the movie that is going to show on the banner image.

In the axios.get() I am accessing the requests file and then I will access the 
        'Netflix Originals'
    Then I will set the  'setMovie' variable to be equal to a random index in an array, which in return 
    selects a random movie from the netflixOriginals request.

*/
