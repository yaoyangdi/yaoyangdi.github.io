import React, { Fragment } from 'react'
import selfie from '../../../assets/selfie.jpg'


const Home = () => {
  return (
      <div className='home-container'>
        <div className='home-selfie'>
          <img src= {selfie} />
          <div className='home-selfie-desc'>
            <h1>Yaoyang Ding</h1>
            <p>Final Year BCompSci Student @ Monash University</p>
          </div>
        </div>

        <div className='home-content-container'>
          
          <div className='home-content-intro'>
            <h1>G'day, I'm Steven! 👋</h1>
            🔘 A final year undergraduate student with A love for software and new technologies.<br/>
            🔘 I firmly believe that tech must be inclusive, accessible and diverse and I considered building my own sharing website for this reason.
          </div>
          <div className='home-content'>
            <h1>From the Blog</h1>
            <p>
              I occasionally post my personal projects and reviews based on knowlege I 've gained. Hopefully it could help me organize all things in a better way.

            </p>
          </div>

        </div>


      </div>

  )
}

export default Home
