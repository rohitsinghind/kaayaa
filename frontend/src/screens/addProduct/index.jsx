import React,{useState, useEffect} from 'react'
import { styles } from './styles';
import { Link } from "react-router-dom";
import axios from "axios"; 

import {Container,Paper,Typography,TextField,OutlinedInput,InputLabel,MenuItem,InputAdornment,FormControl,Box,Button,Divider,Alert,Select} from '@mui/material';


export default function AddProduct() {

    const [creds, setCreds] = useState({ title: '', desc: '',price: '', });
    const [category, setCategory] = useState("ring")
    const [image, setImage] = useState("")

    const [loading, setLoading] = useState(false)


    const [alert, setAlert] = useState("")

    const handleImageChange = (e) => {
      const file = e.target.files[0];

      if(file.size > 500000){
        setAlert("Image size should be less than 500 KB");
        setImage("");
        e.target.value = ''
      }
      else{
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
    
        Reader.onload = () => {
          if (Reader.readyState === 2) {
            setImage(Reader.result);
          }
      }
      };
    };

    const handleChange = (key) => {
        key.preventDefault();
        setCreds({ ...creds, [key.target.id]: key.target.value });
      };

      const addProducts = async () => {
        const data = await axios.post("/api/v1/product/add",
        { title:creds.title, desc:creds.desc, price:creds.price, image ,category }).then((res) => {
          setAlert(res.data?.message);
          setCreds({title: '', desc: '',price: ''})
          setImage("")
          setLoading(false)
          });
        };
    
      const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        addProducts();
      }

      useEffect(() => {  
          setTimeout(() => {
            setAlert("");
          }, 3000);
      }, [alert])

  return (
    <>
        <Container maxWidth="lg" sx={styles.box}>
        {alert?<Alert sx={styles.alert} severity={alert=="Product Added"?"success":"error"}>{alert}</Alert>:""}
        <Paper sx={styles.center} variant="outlined">
            <Typography
                sx={styles.textLogo} >
                Add Product
            </Typography>
            <Box sx={styles.flex}>
            
            <Paper style={styles.detailsBox}>
            <FormControl size="small" sx={styles.inputField}>
              <InputLabel id="Category">Category</InputLabel>
              <Select
                labelId="Category"
                id="Category"
                value={category}
                label="Category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <MenuItem value={"ring"}>Ring</MenuItem>
                <MenuItem value={"earring"}>Earring</MenuItem>
              </Select>
            </FormControl>
            <TextField
          id="title"
        type="text"
          label="Enter Title"
          placeholder="Title"
          value={creds.title}
          onChange={handleChange}
          sx={styles.inputField}
        />
        <TextField
          id="price"
        type="number"
          label="Enter Price"
          placeholder="Price"
          value={creds.price}
          onChange={handleChange}
          sx={styles.inputField}
        />
        <TextField
          id="desc"
        type="text"
          label="Enter Description"
          placeholder="Description"
          value={creds.desc}
          onChange={handleChange}
          sx={styles.inputField}
          multiline
          rows={4}
        />
        
        <Button 
        variant="contained" 
        sx={styles.btn} 
        onClick={submitHandler}
        disabled={loading}
        >add product
        </Button>
        </Paper>
        <Paper elevation={4} sx={styles.card}>
            <img style={styles.cardImg} src={image} alt="" />  
            <input type="file" accept="image/*" onChange={handleImageChange} />
            </Paper> 
        </Box>
        </Paper>
        </Container>
    </>
  )
}
