/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Button, ButtonGroup, Container, Typography } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../Header/Header.css';
import Navbar from '../Navbar/Navbar';

export default function Header() {
  return (
    <>
      <Box id='HeaderWrapper'>
        <Navbar/>
        <Box className="background">
          <Container id='header' maxWidth='xl'>
            <Box className='left'>
              <Typography fontFamily={'serif'} variant='h4'>Seeking the Expertise of a Private Gynaecologist in London?</Typography>
              <Typography marginTop={1} fontFamily={'serif'} variant='h5'>We are on the brink of completion.</Typography>
              <Typography marginTop={1}>
                <ul className='headerList'>
                  <li>Private & Discreet</li>
                  <li>Candid & Transparent</li>
                  <li>Virtual & Telephone Consultations</li>
                </ul>
              </Typography>
              <Typography fontSize={20} marginTop={1}>
                <LocalPhoneIcon sx={{paddingTop:1,fontSize:27}}/>
                020 7935 8633
              </Typography>
              <ButtonGroup sx={{marginTop:2}} className='headerButtons'>
                <Button id='button1'>Get in Touch</Button>
                <Button id='button2'>Make an Appointment</Button>
              </ButtonGroup>
            </Box>

            <Box className='right'>
              <img src="../../../Images/Group 6.png"  alt="" />
            </Box>
          </Container> 
        </Box> 
      </Box>
    </>
  )
}
