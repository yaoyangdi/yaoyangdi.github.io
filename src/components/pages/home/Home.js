import React from 'react'
import selfie from '../../../assets/images/selfie.jpg'
import Card from './Card'
import blogData from '../../../assets/data/BlogData'
import projectData from '../../../assets/data/ProjectData'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { sortByDate } from '../../../helpers';
import Card4Proj from './Card4Proj'

const Home = () => {
  return (
      <div className='home container'>
        <div className='home-selfie'>
          <img src= {selfie} />
          <div className='home-selfie-desc'>
            <h1>Yaoyang Ding</h1>
            <p>Final Year BCompSci Student @ Monash University</p>
            
            <div className='home-selfie-desc email'>
              <div style={{fontWeight:"bold", fontSize:"1.2em", marginRight:"0.6em"}}>email: </div> 
                <div>yaoyangding.work@gmail.com<br/></div> 
            </div>
          </div>
        </div>

        <div className='home-content-container'>
          
          <div className='home-content-intro'>
            <h1>G'day, I'm Steven! 👋</h1>
            <div className='home-socialIcon'>
                <a href="https://github.com/yaoyangdi" className='home-socialIcon item'>
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
                <a href="https://www.facebook.com/ding.yaoyang/" className='home-socialIcon item'>
                  <FontAwesomeIcon icon={faFacebook} size="2x"/>
                </a>
                <a href="https://twitter.com/stevending59" className='home-socialIcon item'>
                  <FontAwesomeIcon icon={faTwitter} size="2x"/>
                </a>
                <a href="https://www.instagram.com/steven_di1/" className='home-socialIcon item'>
                  <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
                <a href="https://www.linkedin.com/in/yaoyang-ding-bba6511ab/" className='home-socialIcon item'>
                  <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </a>

            </div>
            <p>
            🔘 A coder.<br/>
            🔘 A final year undergraduate student with A love for software and new technologies.<br/>
            🔘 A self-motivated learner that is always willing to explore solutions toward real life challenges.<br/>
            🔘 I firmly believe that tech must be inclusive, accessible and diverse and I considered building my own sharing website for this reason.<br/>
            </p>
          </div>
          <div className='home-content'>
            <h2>From the Blog</h2>
            <p>
              I occasionally post my personal projects and reviews based on knowlege I 've gained. Hopefully it could help me organize things in a better way :D
            </p>
            
            <h2>Latest Projects</h2>
            <div className='home-content card4Project-layout'>
              {sortByDate(projectData, false).slice(0,3).map((val, index) => {
                return (
                        <Card4Proj key={index}  title={val.title} desc={val.desc} date={val.date} link={val.url} />
                )
              })}
            </div>


            <h2>Latest Reviews</h2>
            <div className='home-content card'>
              {sortByDate(blogData, false).slice(0,4).map((val, index) => {
                return (
                        <Card key={index}  title={val.title} desc={val.desc} date={val.date} link={`/reviews/${val.fileName}`} />
                )
              })}
            </div>
          </div>
        </div>


      </div>

  )
}

export default Home
