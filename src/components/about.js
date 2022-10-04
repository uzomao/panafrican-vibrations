import React from 'react'
import '../styles/about.css'

import image1 from '../images/gallery/image1.JPG'
import image2 from '../images/gallery/image2.JPG'
import image3 from '../images/gallery/image3.JPG'
import image4 from '../images/gallery/image4.JPG'
import image5 from '../images/gallery/image5.JPG'
import image6 from '../images/gallery/image6.JPG'
import image7 from '../images/gallery/image7.JPG'

const images = [image1,image2,image3,image4,image5,image6,image7]


const About = () => {
  return (
    <div className="about-modal">
        <p>
            In September 2022 I linked up with eight other inspiring young artists and changemakers from across the continent for 
            the Prince Claus Fund Mobile Lab Week in Ghana, an intense week of learning, networking, mentorship, collaborations and 
            showcasing artistry. Led by facilitators from PCF, the Lab Week was aimed at bringing artists at earlier stages of 
            their practice into community with mentors with more established practices to exchange ideas and learn from one another. 
            This in itself was a very enriching experience but one of the things I enjoyed the most about the trip was the positive 
            energy that the group built in the short space of a week. Reflecting on this on the flight home I got the inspiration 
            to create Pan-African Vibrations as an ode to a transformative week and a testament to what is possible when we stay 
            in the energy of our dreams.
        </p>

        <p>
            I’m sending much love to the facilitators, organisers and steering committee from PCF: Marcus, Fariba, Ken Sen Ong 
            and Fernando. A huge thanks to Carla Fernandez and M7Red for sharing your expertise, time and unique 
            vibrations with us. And to Ibrahim, Essinam, Benjamin, Asmah, Sackitey and the rest of the team at Red Clay, 
            thanks for being the most incredible hosts.
        </p>

        <div className='about-images'>
            {
                images.map((image) => <figure><img src={image} 
                    alt="scene from Prince Claus Fund Mobile Lab Week at Red Clay Studio, Tamale, Ghana" 
                /></figure>)
            }
        </div>

        <p>
            Let’s keep vibrating highly <span role="img" aria-label="star emoji">✨</span>
        </p>

        <p style={{marginTop: '2rem', fontStyle: 'italic'}}>
            - Uzoma, 04/10/2022
        </p>
    </div>
  )
}

export default About