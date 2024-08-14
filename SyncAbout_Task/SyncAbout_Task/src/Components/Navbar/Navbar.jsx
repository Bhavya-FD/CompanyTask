/* eslint-disable no-unused-vars */
import { AppBar, Box, Container, Typography } from '@mui/material'
import React from 'react'
import '../Navbar/Navbar.css'

export default function Navbar() {
  return (
    <>
      <AppBar elevation={0} id='navbar'>
        <Container maxWidth='xl'>
          <Box className='navContainer'>
            <Box className='logoDesign'>
              <img src="../../../Images/logo.png" alt="" width={50} />
              <Typography >
                <Typography fontSize={23} marginLeft={1} lineHeight='27px' fontFamily={'serif'} variant='h5'>Mr. Micheal <br /> Stafford <Typography fontSize={12} className='logoText' fontFamily={'serif'} variant='caption'>MD MRCOG</Typography></Typography> 
                <Typography fontSize={15} className='consultant' fontFamily={'serif'} variant='button'>Consultant Gynaeclogist</Typography>
              </Typography>
            </Box>
            <ul className='navbarList'>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Patient Resources</li>
              <li>How We Can Assist</li>
              <li>Pricing</li>
              <li>Get in Touch</li>
            </ul>
            <Box className='number'>020 7935 8633</Box>
          </Box>  
        </Container>
      </AppBar>
    </>
  )
}
