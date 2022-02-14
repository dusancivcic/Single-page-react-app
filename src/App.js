import React, { useState, useEffect } from "react";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import './App.css';
import Fotter from './assets/components/Fotter';
import Main from './assets/components/Main'
import { Route, Switch } from 'react-router-dom'
import NavBar from './assets/components/NavBar'
import AboutPage from './assets/components/AboutPage';
import Blog from './assets/components/Blog';
import SingleNews from './assets/components/SingleNews';
import axios from 'axios';


function App() {


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
  const { promiseInProgress } = usePromiseTracker()
    axios.request(options).then(function (response) {
        // console.log(response.data.articles)
        setThreeNews(response.data.slice(0,3)) 
      
    }).catch(function (error) {
        console.error(error);
    })

  return (
    <>
    <NavBar/>
      <Switch>
        <Route exact path="/">
          <Main threeNews={threeNews} />
        </Route>
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={Blog} />
       {
          (promiseInProgress === true) ?
          <Route path='/news'>
            <SingleNews/>
          </Route>
        :
         threeNews?.map((el, id) => {  
           return(
            <Route key={id} path={`/news/${el.title.replace(/\s+/g, '-').replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '').toLowerCase()}`}>
            <SingleNews el={el} />
          </Route>
           )
           })
       }
      
      </Switch>
     <Fotter/>
    </>
  );
}

export default App;
