import React from 'react'
import Banner from './Banner'
import './HomeScreen.css'
import Nav from './Nav'
import requests from './Requests'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
        <Banner />

        <Row 
          title='NETFLIX ORIGINALS'
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />

        <Row title="Trending Now"fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Top Rated"fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Action Movies"fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Comedy Movies"fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Horrow Movies"fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Romance Movies"fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Documentaries"fetchUrl={requests.fetchNetflixOriginals} />

        {/* Row */}
    </div>
  )
}

export default HomeScreen

// Props allows you to customize one Component from another.