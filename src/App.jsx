import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Create from './components/Create';
import Edit from './components/Edit';


function App() {

  const {search,pathname} = useLocation();
  return (
    <div className='h-screen w-screen flex'>
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/create' element={<Create/>} />
         <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App