import '../../App.css';



import axios from 'axios';
import { useEffect, useState } from 'react';
import {  Link, NavLink } from "react-router-dom"

const News = props =>{

 

  

    // useEffect(() => {
    //   props.setNewsId(3)
    // }, [])

  return (
    <section className='news-section'>
       <div className='news-container'>
            <h3>News and trends</h3>
            <div className='news-card-container'>
               {                 
                  props.threeNews?.map((element, id) => {                    
                      return(
                      // <Link to={`news/${element.title}`}>
                      <Link to={`/news/${element.title.replace(/\s+/g, '-').replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '').toLowerCase()}`} key={id} >
                        <div className='news-card'>
                          <img src={element.image} alt={element.title} />
                          <div className='news-card-text'>
                              <div>
                                  <h4>{element.date}</h4>
                                  <p>{element.title}</p>
                              </div>
                              <p>View details</p>
                          </div>
                        </div>
                      </Link>
                      // </Link>
                      )
                  
                  })
                }
            </div>
       </div>
    </section>
  );
}

export default News;
