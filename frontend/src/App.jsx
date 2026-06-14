import React from 'react'
import  Parent  from './component/Parent'
import State from './Pages/State'
import Navbar from './component/Navbar'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    //Fragment Tag
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<parent/>}></Route>
    </Routes>
    </>
  )
}

export default App