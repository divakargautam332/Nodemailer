import React from 'react'
import EmailComp from './components/EmailComp'
import OtpComp from './components/OtpComp'
import Success from './components/Success'
import Failure from './components/Failure'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmailComp />} />
        <Route path='/otp' element={<OtpComp />} />
        <Route path='/success' element={<Success />} />
        <Route path='/failure' element={<Failure />} />
        <Route path='/deshboard' element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App