import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from './component/Card'
import Login from './component/Login'

const App = () => {
  return (
  <>
  <Routes>
   
   <Route path="/" element={<Card />} />
   <Route path="/Login" element={<Login />} />
  </Routes>
  </>
  )
}

export default App

