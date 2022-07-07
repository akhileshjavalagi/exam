import React from 'react'
import { Routes, Route } from 'react-router'
import Fetch from './Fetch'
import ShowAnswer from './ShowAnswer'
import Start from './Start'
export default function Routers() {
  return (
    <div>

      {/* here I used routes for the rooting purpose */}
      <Routes>
      <Route path="/" element={<Start/>}></Route>
      <Route path="/answer" element={<ShowAnswer/>}></Route>  
      <Route path="/fetch" element={<Fetch/>}></Route> 
      </Routes>
    </div>
  )
}
