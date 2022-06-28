import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../../assets/data/BlogData'
import Card from '../home/Card'

const BlogOverview = () => {
  return (
    <div className='blogOverview container'>
      <h1>Reviews</h1>
      <p>Reviews are occassionally post based on knowledge I've gained while messing around with technologies I am interested in. <br/>
      Hopefully it will help to better organize all XD</p>
      <Link to='/reviews/aqqq'>AAAAAAaaa</Link>
      <div className=''>
        <div className='blog timeline'>
          <ul>
            {
              data.map((val, index) => {
                return (
                  <li >
                    <div className='blog timeline date'>
                      {val.date}
                    </div>
                    <Card  key={index}  title={val.title} desc={val.desc} date={val.date} link={`/reviews/${val.fileName}`}  hide={true}/>
                  </li>
                        )
              })}
            
          </ul>

        </div>
      </div>
    </div>
  )
}

export default BlogOverview