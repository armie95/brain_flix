import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import Home from '../../Pages/Home'
import Upload from '../../Pages/Upload'

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  )
}

export default Router
