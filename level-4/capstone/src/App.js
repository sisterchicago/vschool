import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Confidence from './components/Confidence'
import Home from './components/Home'
import Inspiration from './components/Inspiration'
import Kindness from './components/Kindness'
import Success from './components/Success'

export default function App(props) {

  return (
    <>
        <div className='wrapper'>
          <Router>
           
          <nav className='navbar'>
              <Link to="/" className='nav-home'>
                Home 
              </Link>
              <Link to="/confidence" className='nav-confidence'>
                Confidence 
              </Link>
              <Link to="/inspiration" className='nav-inspiration'>
                Inspiration 
              </Link>
              <Link to="/kindness" className='nav-kindness'>
                Kindness
              </Link>
              <Link to="/success" className='nav-success'>
                Success
              </Link>
          </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/confidence" element={<Confidence />} />
              <Route path="/inspiration" element={<Inspiration />} />
              <Route path="/kindness" element={<Kindness />} />
              <Route path="/success" element={<Success />} />
            </Routes>

          <div className='push'></div>
          <footer className='footer'>
            Copyright Natalie Taylor 2022
          </footer>
         
          </Router>
        </div>
 
    </>
  )
}