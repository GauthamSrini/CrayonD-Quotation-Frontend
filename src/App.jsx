import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import TopNavigationBar from './pages/TopNavigationBar'
import SideNavigationBar from './pages/SideNavigationBar'
import Quotation from './pages/Quotation'

function App() {

  return (
    <div className='mainComponent'>
      <div>
        <TopNavigationBar/>
      </div>
      <div style={{display:"flex"}}>
        <div className='topNavDiv'><SideNavigationBar/></div>
        <div>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/page1' element={<Quotation/>}/>
              <Route path='/page2' element={<Quotation/>}/>
              <Route path='/page3' element={<Quotation/>}/>
              <Route path='/page4' element={<Quotation/>}/>
            </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
