import React from 'react'
import { styles } from './styles'

import {Box, Container, Stack, Typography, Card, Divider} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <>
    <Box sx={styles.background}>
        <Container maxWidth="lg">
        <Box sx={styles.flex3}>
          <Box sx={styles.flex}>
            <Typography sx={styles.textBold}>CONTACT US</Typography>
            <Typography sx={styles.text}>Kaayaa Jewellery, Avenue Street, New York</Typography>
            </Box>
            <Box sx={styles.flex}>
            <Stack spacing={1}>
              <Stack direction="row" spacing={2}>
                <EmailIcon sx={{color:'#c1c1c1'}}/>
                <Typography sx={styles.text}>Kaayaa@gmail.com</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <CallIcon sx={{color:'#c1c1c1'}}/>
                <Typography sx={styles.text}>+91-9876543210</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
                <FacebookIcon sx={{color:'#c1c1c1'}}/>
                <TwitterIcon sx={{color:'#c1c1c1'}}/>
                <InstagramIcon sx={{color:'#c1c1c1'}}/>
            </Stack>
          </Box>
          </Box>
          <Divider sx={{background:"#6D6D6D", my:"10px"}}/>
          <Box sx={styles.flex2}>
            <Typography sx={styles.text}>&copy;Copyright 2022 Kaayaa Jewellery. All rights reserved.</Typography>
          </Box>
          
        </Container>
    </Box>
    </>
  )
}
