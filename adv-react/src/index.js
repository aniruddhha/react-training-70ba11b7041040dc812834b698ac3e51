import React from 'react';
import ReactDOM from 'react-dom';
import { Abc } from './abc'
import { WindowComp } from './window'
import { Detailed } from './detailed'
import { SocialPost } from './fetch-demo'
import { Home } from './home'
 
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// React Router - https://reactrouter.com/docs/en/v6/getting-started/overview
// npm install react-router-dom@6

const router = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>  
      <Route path='abc/:num1/:num2' element={ <Abc/> }/>
      <Route path='win' element={ <WindowComp/> }/>
      <Route path='detailed' element={ <Detailed/> }>
        <Route path='personal' element={ <h1> Personal </h1> }/>
        <Route path='financial' element={ <h1> Financial </h1> }/>
      </Route>
      <Route path='post' element={ <SocialPost/> }/>
      <Route path='*' element={ <h1>  Requested Route is ❌ Not Available </h1>}/>
    </Routes>
  </BrowserRouter>
)


ReactDOM.render(
  router,
  document.getElementById('root')
);


