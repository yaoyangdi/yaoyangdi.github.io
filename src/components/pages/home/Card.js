import React from 'react'
import { Link } from 'react-router-dom'

const card = (props) => {
  return (
      <div className='card btn_shadow'>
        <h3 >{props.title}</h3>
       
          <div className='card-content'>
              <Link to={'/reviews'}>
                 <p>{props.desc}</p>
              </Link>
              <div className='card-content date'>
                <p>{props.date}</p>
              </div>
              
          </div>
        
      </div>
  )
}

export default card
