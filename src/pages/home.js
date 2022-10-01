import React, { useState, useEffect } from 'react'
import '../styles/home.css'
import awardeesImg from '../images/awardees.jpg'

import MapChart from '../components/map-chart'
import imageMapResize from 'image-map-resizer'
import AwardeesMap from '../components/awardees-map'
import ReactTooltip from 'react-tooltip'

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

  const [content, setContent] = useState("")

  const [vibeCount, setVibeCount] = useState(0)

  useEffect(() => {
    imageMapResize();
  }, [])

  const alreadySelectedNames = []

  const awardeeSelected = (awardeeName) => {
    document.getElementById(`marker-${awardeeName}`).style.display = 'block';
    document.getElementById(`marker-text-${awardeeName}`).style.display = 'block';
    
    setCurrentAwardee(awardeesNameMap[awardeeName])

    if(!alreadySelectedNames.includes(awardeeName)){
      setVibeCount(vibeCount+1)
      alreadySelectedNames.push(awardeeName)
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
              { !vibeCount && <p style={{color: '#fff', textAlign: 'center'}}>* click on an artist to bring out their vibe *</p>}
              <img src={awardeesImg} alt="8 people sitting on a long sofa" useMap="#image-map" />
            </div>
            {
              currentAwardee &&
                <div className="home-description-modal">
                  <button onClick={ () => {
                    setCurrentAwardee(null)
                    document.getElementsByClassName('home-image')[0].className = `home-image`
                  } }>X</button>
                  <>
                    <h1>{currentAwardee.name}</h1>
                    <h3>{currentAwardee.practice}</h3> {/* Research everyone's practice! */}
                    <h3>{currentAwardee.city}</h3>
                  </>
                </div>
            }
        </div>
        <div className='home-map'>
            <p style={{color: '#fff', position: 'absolute', top: '0', right: '15px', fontSize: '18px'}}>
              Vibe count: {`${vibeCount}/9`}
            </p>
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip place="bottom">{content}</ReactTooltip>
        </div>
        {/* Image map for awardees image */}
        <AwardeesMap awardeeSelected={awardeeSelected} />
    </div>
  )
}

export default Home