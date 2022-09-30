import React, { useEffect } from 'react'
import '../styles/home.css'
import awardees from '../images/awardees-small.jpg'

import MapChart from '../components/map-chart'
import imageMapResize from 'image-map-resizer'
import AwardeesMap from '../components/awardees-map'

const Home = () => {

  useEffect(() => {
    imageMapResize();
  }, [])

  const awardeeSelected = (awardeeName) => {
    document.getElementById(`marker-${awardeeName}`).style.display = 'block';
  }

  return (
    <div className='home'>
        <div className='home-image'>
            <img src={awardees} alt="8 people sitting on a long sofa" useMap="#image-map" />
            <div className="home-map-hover"></div>
        </div>
        <div className='home-map'>
            <MapChart />
        </div>
        {/* Image map for awardees image */}
        <AwardeesMap awardeeSelected={awardeeSelected} />
    </div>
  )
}

export default Home