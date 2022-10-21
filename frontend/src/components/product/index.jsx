import React from 'react'
import { styles } from './styles'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../store/Actions/User";

import {Box, Paper, Typography, IconButton , Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Product({setAlert, image, text, price, id}) {

  const  { isAuthenticated }= useSelector((state)=> state.user);   
  
  const deleteProducts = async () => {
    const data = await axios.delete(`/api/v1/product/${id}`).then((res) => {
      setAlert(res.data?.message)
      });
    };
  

  let navigate = useNavigate();
  return (
    <>
      <Paper variant="outlined" sx={styles.card}>
        <Paper sx={styles.imgCard}>
          <img style={styles.image} src={image} alt="" />
          </Paper>
          <Typography sx={styles.text}>{text}</Typography>
          <Typography sx={styles.price}>₹ {price}.00</Typography>
          <Button sx={styles.btn} onClick={()=>{navigate(`/product/${id}`)}} variant="contained">View</Button>
          {isAuthenticated?<IconButton onClick={deleteProducts} color="error" size="large" sx={styles.deleteBtn}>
            <DeleteForeverIcon />
          </IconButton>:""}
      </Paper>
    </>
  )
}
