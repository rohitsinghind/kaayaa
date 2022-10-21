import React from 'react'
import { styles } from './styles'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {logoutUser} from "../../store/Actions/User"

import {Container, Box, Typography, Divider,Button} from '@mui/material/';

export default function Header() {

    const dispatch = useDispatch();

    const  { isAuthenticated }= useSelector((state)=> state.user);

    let navigate = useNavigate();

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logoutUser())
      }

  return (
    <>
        {isAuthenticated?<Button onClick={logoutHandler} size="small" sx={styles.logoutBtn} variant="outlined">Logout</Button>:""}
        <Container maxWidth="lg">
            <Box sx={styles.box}>
                <Box>
                    <Typography onClick={()=>{navigate("/")}} sx={styles.text1}>Kaayaa</Typography>
                </Box>
                <Box sx={styles.box2}>
                    <Typography sx={styles.text2}>Redefine Yourself</Typography>
                </Box>
                <Box>
                    <Typography sx={styles.text3}>Premium Silver Jewellery</Typography>
                </Box>
                <Box>
                    {isAuthenticated?""
                    :
                    <img style={styles.img} src={require('../../assets/ring-logo.jpeg')} alt="" />
                }
                </Box>
            </Box>
            <Divider/>
            <Box sx={styles.box}>
                <Typography sx={styles.text4}>Traditional Jewellery</Typography>
                <Typography onClick={()=>{navigate("/products/ring")}} sx={styles.text4}>Rings</Typography>
                <Typography onClick={()=>{navigate("/products/earring")}} sx={styles.text4}>Earrings</Typography>
                <Typography sx={styles.text4}>Design Your Own</Typography>
            </Box>
        </Container>
    </>
  )
}
