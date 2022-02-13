import React, { useState, useEffect } from "react";

import './App.css';
import Fotter from './assets/components/Fotter';
import Main from './assets/components/Main'
import { Route, Switch } from 'react-router-dom'
import NavBar from './assets/components/NavBar'
import AboutPage from './assets/components/AboutPage';
import Blog from './assets/components/Blog';
import SingleNews from './assets/components/SingleNews';

function App() {

  const [newsId, setNewsId] = useState({})


  return (
    <>
    <NavBar/>
      <Switch>
        <Route exact path="/">
          <Main newsId={newsId} setNewsId={setNewsId} />
        </Route>
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={Blog} />
        <Route path="/news">
          <SingleNews newsId={newsId} />
        </Route>
      </Switch>
     <Fotter/>
    </>
  );
}

export default App;
