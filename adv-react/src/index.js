import React from 'react';
import ReactDOM from 'react-dom';
import { Abc } from './abc'
import { WindowComp } from './window'
import { Detailed } from './detailed'
import { SocialPost } from './fetch-demo'
import { Home } from './home'
import { UseReducerDemo } from './use-reducer-demo'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// React Router - https://reactrouter.com/docs/en/v6/getting-started/overview
// npm install react-router-dom@6

const AllDataContext = React.createContext()
const commonData = { url : '' }

const router = (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <AllDataContext.Provider value={commonData}><Home /> </AllDataContext.Provider> } />
        <Route path='abc/:num1/:num2' element={ <AllDataContext.Provider value={commonData}><Abc /></AllDataContext.Provider>} />
        <Route path='win' element={<AllDataContext.Provider value={commonData}><WindowComp /></AllDataContext.Provider>} />
        <Route path='detailed' element={<AllDataContext.Provider value={commonData}><Detailed /></AllDataContext.Provider>}>
          <Route path='personal' element={<h1> Personal </h1>} />
          <Route path='financial' element={<h1> Financial </h1>} />
        </Route>
        <Route path='post' element={<AllDataContext.Provider value={commonData}><SocialPost /></AllDataContext.Provider>} />
        <Route path='reducer' element={<UseReducerDemo />} />
        <Route path='*' element={<h1>  Requested Route is ❌ Not Available </h1>} />
      </Routes>
    </BrowserRouter>
  
)


ReactDOM.render(
  router,
  document.getElementById('root')
);


