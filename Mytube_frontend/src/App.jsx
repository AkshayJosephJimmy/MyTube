import React from 'react'
import Header from '/src/components/Header.jsx'
import Home from './components/Home.jsx'
import { SideBarPovider,SideBarContext } from './utils/toggelContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WatchView from './components/WatchView.jsx'
import { Provider } from 'react-redux'
 import myStore from './utils/mytubeStore.js'
 import SignIn from './components/SignIn.jsx'
import Register from './components/Register.jsx'
import SearchBar from './components/SearchBar.jsx'
import SearchResults from './components/SearchResult.jsx'
import { useLocation } from 'react-router-dom';


function App() {
  
  return (
    <Provider store={myStore}>
    <BrowserRouter>
      <SideBarPovider>
       <Header/>
       <Routes>
        <Route path="/" element={<Home  key={location.key}/>} />
        <Route path="/watch/:id" element={<WatchView/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/search" element={<SearchResults/>}/>
        
       </Routes>
      
      </SideBarPovider>
    </BrowserRouter>
    </Provider>
  )
}

export default App
