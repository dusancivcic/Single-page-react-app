import '../../App.css';



import axios from 'axios';
import { useEffect, useState } from 'react';
import {  Link, NavLink } from "react-router-dom"

const News = props =>{

  const [threeNews,setThreeNews] = useState([]) /* MORA ARRAY ICI ZATO STO JE TO POCETNA VRIJEDNOST */
  // const [newsId,setNewsId] = useState([])

  var options = {
    method: 'GET',
    url: 'https://crypto-news14.p.rapidapi.com/news/coindesk',
    headers: {
      'x-rapidapi-host': 'crypto-news14.p.rapidapi.com',
      'x-rapidapi-key': '4b41a53b47mshcf5aa6809a9fec4p13ca91jsnb9d6612fa079'
    }
  };
  
    axios.request(options).then(function (response) {
        // console.log(response.data.articles)
        setThreeNews(response.data.slice(0,3)) 
      
    }).catch(function (error) {
        console.error(error);
    })


    const getContent = id => {
      console.log('id')
    }


    // useEffect(() => {
    //   props.setNewsId(3)
    // }, [])

  return (
    <section className='news-section'>
       <div className='news-container'>
            <h3>News and trends</h3>
            <div className='news-card-container'>
               {                 
                  threeNews?.map((element, id) => {                    
                      return(
                      // <Link to={`news/${element.title}`}>
                      <Link to='news' key={id} onClick={() => props.setNewsId(element)}>
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
