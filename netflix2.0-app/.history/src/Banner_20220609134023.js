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
    }}>

    </header>
  )
}

export default Banner