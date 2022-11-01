import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <Router>

      <nav style={{ margin: 10}}>
          <Link to="/" style={{ padding: 5 }}>
            Home 
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
            About 
          </Link>
          <Link to="/contact" style={{ padding: 5 }}>
            Contact 
          </Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer style={{ margin:10 }}>
        Copyright 2022
      </footer>

    </Router>
  )
}