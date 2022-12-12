import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/images/Logo.png';


const Navbar = () => {
  return (
    <Stack className='navbar' direction="row" justifyContent="space-around"
    sx={{gap:{
      sm:'122px',
      xs:'40px'
    }, mt:{sm:'32px', xs:'20px'}, justifyContent:'none'}}
    px='20px'
    >



        <Link to='/'>
        <img src={Logo} alt="Logo" className='nav--logo'/>
        </Link>

        <Stack 
        className='nav--link' 
        direction="row" 
        gap="40px" 
        fontSize="24px" 
        alignItems="flex-end">

          <Link to ='/' className='nav--link__home'>Home</Link>
          <Link to='/' className='nav--link__exercices'>Exercices</Link>
        </Stack>


    </Stack>
  )
}

export default Navbar