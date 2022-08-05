import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../../assets/data/BlogData'
import Card from '../home/Card'
import {groupByDate, dateFormater} from '../../../helpers/index'


const BlogOverview = () => {

  var flip = false;
  const grouped_list = groupByDate(data);
  const singleSide = grouped_list.length <=3;

  return (
    <div className='blogOverview container'>
      <h1>Reviews</h1>
      <p className='blogOverview container p'>Reviews are occassionally post based on knowledge I've gained while messing around with technologies I am interested in. <br/>
      Hopefully it will help to better organize all XD</p>
        <div className='blog timeline'>
          <ul className={singleSide ? 'blog timeline singleSide': 'blog timeline bothSide'}>
            {
              grouped_list.map((v, i) => {
                if (singleSide){
                    return ( <div className='blog group'>
                      {
                        v.map((val, index) => {
                          return (
                              <li className='blog timeline card singleSide'>
                                <div className='blog date singleSide'>
                                  {index=== 0 ? val.date : ""}
                                </div>
                                <Card  key={index}  title={val.title} desc={val.desc} date={val.date} link={`/reviews/${val.fileName}`}  hide={true}/>
                              </li>
                        )
                        })
                      }
                    </div>

                    )
                } 
                else{
                  flip = !flip;
                  return (<div className='blog group'>
                      {
                        v.map( (val, index)  =>  {
                          return(
                            <li className={flip ? 'blog timeline card left': 'blog timeline card right'}>
                            <div className={flip ? 'blog date left' : 'blog date'}>
                                {index=== 0 ? val.date : ""}
                            </div>
                            <Card  key={index} title={val.title} desc={val.desc} date={val.date} link={`/reviews/${val.fileName}`}  hide={true}/>
                            </li>
                          )
                        })
                      }
                    </div>
                  )
                    


  
                    // <li className='blog timeline card right'>
                    // <div className='blog date'>
                    //   {v.date}
                    // </div>
                    // <Card  key={i}  title={v.title} desc={v.desc} date={v.date} link={`/reviews/${v.fileName}`}  hide={true}/>
                    // </li>
                    // </div>
  

                }
              })}
            
          </ul>

        </div>
    </div>
  )
}

export default BlogOverview