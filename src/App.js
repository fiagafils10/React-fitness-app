import React from 'react';
import './App.css';
import Home from './pages/Home'

import ExercicesDetail from './pages/ExercicesDetail'
import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'100vw'}}} m="auto"> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercises' element={<ExercicesDetail/>} />
        <Route path='/exercises/:id' element={<ExercicesDetail/>} />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App