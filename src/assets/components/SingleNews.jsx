import '../../App.css';
import { useState, useEffect } from 'react';

const SingleNews = props =>{

  // const [threeNewsSingle,setThreeNewsSingle] = useState([]) 
 
  // var options = {
  //   method: 'GET',
  //   url: 'https://free-news.p.rapidapi.com/v1/search',
  //   params: {q: 'Elon Musk', lang: 'en'},
  //   headers: {
  //     'x-rapidapi-host': 'free-news.p.rapidapi.com',
  //     'x-rapidapi-key': '4b41a53b47mshcf5aa6809a9fec4p13ca91jsnb9d6612fa079'
  //   }
  // };
  
  
  //   axios.request(options).then(function (response) {
  //       setThreeNewsSingle(response.data.articles.slice(0,3)) 
  //   }).catch(function (error) {
  //       console.error(error);
  //   })

  useEffect(() => {
    console.log(props.newsId)
  }, [])


  return (
    <>
    <section className='about-page-header-section'>
      <div className='about-page-header-container'>
        <h1>News</h1>
      </div>
    </section>
    
    <section className='about-page-main-section'>
      <div className='about-page-main-container'>
        <img src={props.newsId.image} alt={props.newsId.title} />
        <h2>{props.newsId.title}</h2>
        <p>{props.newsId.desc}</p>
           
      </div>           
      </section>
      </>
         
          
  );
}

export default SingleNews;
