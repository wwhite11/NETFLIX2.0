import React from 'react'
import './Banner.css'

function Banner() {
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
                <button>Play</button>
                <button>My List</button>
            </div>
        </div>
    </header>
  )
}

export default Banner