import React, { useState, useEffect } from 'react'
import '../styles/home.css'
import awardeesImg from '../images/awardees-small.jpg'

import MapChart from '../components/map-chart'
import imageMapResize from 'image-map-resizer'
import AwardeesMap from '../components/awardees-map'

import { awardees } from '../awardees'

const Home = () => {

  const { abdoul, alice, athandiwe, delasi, keren, luamba, souleymane, uzoma, valu } = awardees

  // Map the names of the awardees to the object containing all their data
  // TODO: make this more programmatic
  const awardeesNameMap = {
    'Abdoul': abdoul,
    'Alice': alice,
    'Athandiwe': athandiwe,
    'Delasi': delasi,
    'Keren': keren,
    'Luamba': luamba,
    'Souleymane': souleymane,
    'Uzoma': uzoma,
    'Valu': valu
  }

  const [currentAwardee, setCurrentAwardee] = useState(null)

  useEffect(() => {
    imageMapResize();
  }, [])

  const awardeeSelected = (awardeeName) => {
    document.getElementById(`marker-${awardeeName}`).style.display = 'block';
    setCurrentAwardee(awardeesNameMap[awardeeName])
  }

  return (
    <div className='home'>
        <div className='home-image'>
            <img src={awardeesImg} alt="8 people sitting on a long sofa" useMap="#image-map" />
            {
              currentAwardee &&
                <div className="home-description-modal">
                  <h1>{currentAwardee.name}</h1>
                  <h3>{currentAwardee.practice}</h3> {/* Research everyone's practice! */}
                  <h3>{currentAwardee.city}</h3>
                </div>
            }
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