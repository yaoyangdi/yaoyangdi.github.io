import React from 'react'
import { Link } from 'react-router-dom'

const Card4Proj = (props) => {
  return (
      <div className='card4Project shadow'>
        <h3 style = {{"marginLeft":"1em"}}>{props.title}</h3>
       
          <div className='card4Project-content'>
              <a href={props.link}  target="_blank">
                <p>{props.desc}</p>
              </a>
              <div style = {{"marginLeft":"-1em"}} className={props.hide ? 'card-content date hide' : 'card-content date'}>
                <p>{props.date}</p>
              </div>
          </div>
        
      </div>
  )
}

export default Card4Proj
