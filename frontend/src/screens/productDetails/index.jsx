import React,{useState, useEffect} from 'react'
import { styles } from './styles';
import {useParams} from "react-router-dom";
import axios from "axios"; 

import {Box, Container, Paper, Typography, Card} from '@mui/material';

export default function ProductDetails() {

  const params  = useParams();

const [product, setProduct] = useState("")

  const getProduct = async () => {
  const data = await axios.get(`/api/v1/product/${params.id}`).then((res) => {
    setProduct(res.data?.product);
    });
  };

  console.log(product)

  useEffect(() => {
    getProduct()
  }, [ params.id])
  


  return (
    <>
        <Container maxWidth="lg" sx={styles.container}>
        <Paper elevation={8} sx={styles.card}>
            <img style={styles.cardImg} src={product?.image?.url} alt="" />  
        </Paper> 
        <Box sx={styles.box}>
          <Typography sx={styles.name}>{product?.title}</Typography>
          <Typography sx={styles.price}>₹ {product?.price}.00</Typography>
          <Typography sx={styles.desc}>{product?.desc}</Typography>
        </Box>
        </Container>
    </>
  )
}
