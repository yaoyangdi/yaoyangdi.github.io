import React from 'react'
import { Link } from 'react-router-dom'

const card = (props) => {
  return (
      <div className='card shadow'>
        <h3 >{props.title}</h3>
       
          <div className='card-content'>
              <a href={props.link}>
                <p>{props.desc}</p>
              </a>
              {/* <Link to={props.link}>
                <p>{props.desc}</p>
              </Link> */}
              <div className={props.hide ? 'card-content date hide' : 'card-content date'}>
                <p>{props.date}</p>
              </div>
              
          </div>
        
      </div>
  )
}

export default card
