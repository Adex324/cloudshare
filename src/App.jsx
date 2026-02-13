// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Waitlist from './pages/Waitlist'
import Signup from './pages/Signup'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Waitlist />} />
        <Route path="/signup" element={<Signup />} />
      
      </Routes>
    </Router>
  )
}

export default App