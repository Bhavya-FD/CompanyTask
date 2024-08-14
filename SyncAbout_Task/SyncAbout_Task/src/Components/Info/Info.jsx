/* eslint-disable no-unused-vars */

import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import '../Info/Info.css'


export default function Info() {
  return (
    <>
      <Box id='Section1'>
        <Container className='sectionWrapper1' maxWidth='xl'>
            <Box id='subSection1'>
              <Box className="leftSection">
                <img src="../../../Images/section1.png" alt="" />
              </Box>
              <Box className="rightSection">
                <Typography fontFamily={'serif'} marginBottom={2} variant='h4'>Specialist Gynaecology <br />Consultant</Typography>
                <Typography className='sectionBody' variant='body2'>Mr. Michael Stafford graduated from the Medical College of St Bartholomew Hospital in 1986 and was awarded MRCOG in 1993 and MD in 1998. He became a Consultant in Obstetrics and Gynaecology at the Chelsea and Westminster Hospital, London in the year 2000 where he is former Chairman of the Hospital Medical Staff Committee. Michael was also the surgical member of the Riverside Ethics Committee, Director of the North West Thames advanced post-graduate training modules and an undergraduate interviewer, examiner and tutor for Imperial College</Typography>
                <Typography fontFamily={'serif'} padding={'12px 0'} color={'#A953DC'} variant='h5'>The following are a selection of the conditions Mr. Stafford specialises in and the surgery he undertakes:</Typography>
                <img src="../../../Images/Layer.png" />
              </Box>
            </Box>

            <Box id='subSection2'>
                <Box className="sectionpart1">
                  <Box className='headline'>General Gynaecological Surgey</Box>
                  <Box className='content'>
                    <ul>
                      <li>Ovarian cystectomy</li>
                      <li>Treatment of ectopic pregnancy</li>
                      <li>Laparoscopy and hysteroscopy, including for endometriosis</li>
                      <li>Laparoscopic adhesiolysis</li>
                      <li>Dilatation and curettage</li>
                      <li>Marsupialization of Bartolins abcess</li>
                    </ul>
                    <ul>
                      <li>Management of miscarriage</li>
                      <li>Abdominal hysterectomy</li>
                      <li>Myomectomy</li>
                      <li>Endometrial ablation</li>
                      <li>Laparoscopic sterilization</li>
                      <li>Abortion care</li>
                    </ul>
                  </Box>
                  <Button>Read More</Button>
                </Box>
                <Box className="sectionpart2">
                  <Box className='headline'>Prolapse and Incontinence Management</Box>
                  <Box className='content'>
                  <ul>
                      <li>Vaginal hysterectomy</li>
                      <li>Sacro-hysteropexy</li>
                      <li>Ring pessary</li>
                      <li>Cystocele (anterior) and rectocele (posterior) repair</li>
                      <li>Sacro-spinous fiaxation</li>
                      <li>Mid-urethral tape</li>
                    </ul>
                    <ul>
                      <li>Colposuspension</li>
                      <li>Bladder neck bulking</li>
                      <li>Mangement of vaginal mesh omplications</li>
                      <li>Cytoscopy</li>
                      <li>Managment of bladder pain</li>
                      <li>Management of over active bladder, including Botox</li>
                    </ul>
                  </Box>
                  <Button>Read More</Button>
                </Box>
            </Box>
        </Container>
      </Box>  
    </>
  )
}
