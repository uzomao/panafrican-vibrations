import React, { useState, useEffect } from 'react'
import '../styles/home.css'
import awardeesImg from '../images/awardees.jpg'

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

  const [vibeCount, setVibeCount] = useState(0)

  useEffect(() => {
    imageMapResize();
  }, [])

  const [alreadySelectedNames, setAlreadySelectedNames] = useState([])

  const awardeeSelected = (awardeeName) => {
    document.getElementById(`marker-${awardeeName}`).style.display = 'block';
    document.getElementById(`marker-text-${awardeeName}`).style.display = 'block';
    
    setCurrentAwardee(awardeesNameMap[awardeeName])

    if(alreadySelectedNames.includes(awardeeName) === false){
      setVibeCount(vibeCount+1)
      setAlreadySelectedNames([...alreadySelectedNames, awardeeName])
    }

    // add a new class to the home image section to account for the description modal
    const descriptionModalClassName = 'home-description-modal-active'
    if(document.getElementsByClassName(descriptionModalClassName).length === 0){
      document.getElementsByClassName('home-image')[0].className += ` ${descriptionModalClassName}`
    }
  }

  return (
    <div className='home'>
        <div className='home-image'>
            <div className='home-image-image'>
              { !vibeCount && <p style={{color: '#fff', textAlign: 'center'}}>* click on an artist to unlock their vibe *</p>}
              <img src={awardeesImg} alt="8 people sitting on a long sofa" useMap="#image-map" />
            </div>
            {
              currentAwardee &&
                <div className="home-description-modal">
                  <button onClick={ () => {
                    setCurrentAwardee(null)
                    document.getElementsByClassName('home-image')[0].className = `home-image`
                  } }>X</button>
                  <div className="awardee-details">
                    <h1 className="awardee-name">{currentAwardee.name}</h1>
                    <h3><span role="img" aria-label='artist palette'>🎨</span> {currentAwardee.practice}</h3> {/* Research everyone's practice! */}
                    <h3><span role="img" aria-label='globe showing europe-africa'>🌍</span> {currentAwardee.city}</h3>
                    <p>{currentAwardee.text}</p>
                    <a href={currentAwardee.pcfLink} target="_blank" rel="noopener noreferrer">Link to Prince Claus profile</a>
                    {currentAwardee.portfolio && <a href={currentAwardee.portfolio} target="_blank" rel="noopener noreferrer">Link to artist's portfolio</a>}
                    {currentAwardee.instagram && <a href={currentAwardee.instagram} target="_blank" rel="noopener noreferrer">Link to artist's Insta</a>}
                  </div>
                </div>
            }
        </div>
        <div className='home-map'>
            <p className="vibe-count">
              Vibe count: {`${vibeCount}/9`}
            </p>
            <MapChart awardeeSelected={awardeeSelected} />
        </div>
        {/* Image map for awardees image */}
        <AwardeesMap awardeeSelected={awardeeSelected} />
    </div>
  )
}

export default Home