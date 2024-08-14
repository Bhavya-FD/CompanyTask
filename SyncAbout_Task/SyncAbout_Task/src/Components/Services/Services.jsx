/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";
import "../Services/Services.css";

export default function Services() {
  return (
    <>
      <Box id="section2">
        <Container maxWidth='xl' className="sectionWrapper2">
          <Box className="gridBox">
            <Box className="box1">
              <Box className="gridContent1">
                <Box className="grid1">
                  <img src="../../../Images/Vector2.png"  width={150}/>
                </Box>  
                <Typography>General Gynaecology</Typography>
              </Box>
              <Box className="gridContent2">
                <Box className="grid2">
                  <img src="../../../Images/Vector (3).png"  width={150} />
                </Box>
                <Typography>Ovarian and Vulval Cysts</Typography>
              </Box>
              <Box className="gridContent3">
                <Box className="grid3">
                  <img src="../../../Images/Vector (3).png"  width={150} />
                </Box>
                <Typography>Cancer Treatments</Typography>
              </Box>
            </Box>

            <Box className="box2">
              <Box className="gridContent4">
                <Box className="grid4">
                  <img src="../../../Images/Vector (3).png" width={150} />
                </Box>
                <Typography>Menstrual Problems</Typography>
              </Box>
              <Box className="gridContent5">
                <Box className="grid5">
                  <img src="../../../Images/Vector (3).png"  width={150}/>
                </Box>
                <Typography>Family Planning</Typography>
              </Box>
              <Box className="gridContent6">
                <Box className="grid6">
                  <img src="../../../Images/Vector (3).png" width={150} alt="" />
                </Box>
                <Typography>Abnormal Cervical Smears</Typography>
              </Box>
            </Box>

            <Box className="box3">
              <Box className="gridContent7">
                <Box className="grid7">
                  <img src="../../../Images/Vector (3).png"  width={150} />
                </Box>
                <Typography>Incontinence and Prolapse</Typography>
              </Box>
              <Box className="gridContent8">
                <Box className="grid8">
                  <img src="../../../Images/Vector (3).png"  width={150}/>
                </Box>
                <Typography>Tubal Problems</Typography>
              </Box>
              <Box className="gridContent9">
                <Box className="grid9">
                  <img src="../../../Images/Vector (3).png"  width={150} />
                </Box>
                <Typography>Hormonal Problems</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
