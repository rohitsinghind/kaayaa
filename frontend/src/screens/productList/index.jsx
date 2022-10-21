import React,{useState, useEffect, useRef} from 'react'
import { styles } from './styles'
import {useParams} from "react-router-dom";
import axios from "axios"; 

import Product from '../../components/product';

import {Box, Container, Button , Typography, Alert,IconButton} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ProductList() {

  const params  = useParams();

  const divForScroll = useRef(null);

  const [products, setProducts] = useState([])

  const [alert, setAlert] = useState("")
  
    const getProducts = async () => {
    const data = await axios.get(`/api/v1/product/category/${params.category}`).then((res) => {
      setProducts(res.data?.products);
      });
    };
  
  
    useEffect(() => {
      getProducts(params.category)
    }, [params.category,alert])

    useEffect(() => {
          setAlert(alert)
          setTimeout(() => {
            setAlert("");
          }, 3000);
      }, [alert])
      
    
  return (
    <>
    <div ref={divForScroll}></div>
    <div style={styles.container}>
        <Container maxWidth="lg" >
        {alert?<Alert sx={styles.alert} severity="error">{alert}</Alert>:""}
            <Typography sx={styles.text}>Showing results for "{params.category}s"</Typography>
            <Box sx={styles.box}>
              {
                products?.map((e)=>(
                  <Product setAlert={setAlert} key={e?._id} image={e?.image?.url} text={e?.title} price={e?.price} id={e?._id}/>
                ))
              }
            </Box>
            {/* <Box sx={styles.btGroups}>
              <Button sx={styles.btn} variant="text" startIcon={<ArrowBackIosIcon />}>Previous</Button>
              <Typography sx={styles.pgNo}>Page 2</Typography>
              <Button sx={styles.btn} variant="text" endIcon={<ArrowForwardIosIcon />}>Next</Button>
            </Box> */}
             
        </Container>
        <IconButton
          onClick={() => {
            divForScroll.current.scrollIntoView({ behavior: "smooth" });
          }}
          sx={styles.topScrollBtn}
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <KeyboardArrowUpIcon />
        </IconButton>
        </div>
    </>
  )
}
