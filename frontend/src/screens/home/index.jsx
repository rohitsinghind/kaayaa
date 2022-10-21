import React,{useState, useEffect} from 'react'
import { styles } from './styles'
import axios from "axios"; 

import Product from '../../components/product';

import { useTheme } from '@mui/material/styles';
import {Box, Container, Paper, MobileStepper, Typography, Card} from '@mui/material';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:"../../assets/sliderImg1.jpg",
  },
  {
    imgPath:"../../assets/sliderImg1.jpg",
  },
  {
    imgPath:"../../assets/sliderImg1.jpg",
  },
];


export default function Home({latestProducts}) {

  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  // const [latestProducts, setLatestProducts] = useState([])

  // const getProducts = async () => {
  //   const data = await axios.get("/api/v1/latestProducts").then((res) => {
  //     setLatestProducts(res.data?.products);
  //     });
  //   };
   console.log(latestProducts)
  
 
      //getProducts()
 

  return (
    <>
      <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={styles.sliderImg}
                src={require("../../assets/sliderImg1.jpg")}
                alt={step.label}
              />
            ) : null}
            
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
    <Container maxWidth="lg" sx={{mt:"50px"}}>
      <Paper variant="outlined" sx={{py:"10px", pl:"30px"}}>
           <Typography sx={styles.text1}>Latest Products</Typography>     
      </Paper>
      <Box sx={styles.box}>
        {
          latestProducts?.map((e)=>(
            <Product setAlert={()=>{}} key={e?._id} image={e?.image?.url} text={e?.title} price={e?.price} id={e?._id}/>
          ))
        }
      </Box>
      <Box sx={styles.box}>
        <Paper elevation={8} sx={styles.card}>
            <img style={styles.cardImg} src={require("../../assets/cardImg1.png")} alt="" />  
        </Paper> 
        <Paper elevation={8} sx={styles.card}>
            <img style={styles.cardImg} src={require("../../assets/cardImg2.png")} alt="" />  
        </Paper> 
        <Paper elevation={8} sx={styles.card2}>
            <img style={styles.cardImg} src={require("../../assets/cardImg3.png")} alt="" />  
        </Paper> 
      </Box>
    </Container>
    </>
  )
}
