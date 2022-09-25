import React from 'react'
import '../styles/home.css'
import awardees from '../images/awardees.jpg'

const Home = () => {
  return (
    <div className='home'>
        <div className='home-image'>
            <img src={awardees} alt="8 people sitting on a long sofa" />
        </div>
        <div className='home-map'>
            <h1>Map</h1>
        </div>
    </div>
  )
}

export default Home