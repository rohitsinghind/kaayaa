import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios"; 

import Header from "./components/header";
import Home from "./screens/home";
import ProductDetails from "./screens/productDetails";
import ProductList from "./screens/productList";
import Footer from "./components/footer";
import Login from "./screens/login";
import AddProduct from "./screens/addProduct";

function App() {

  const [latestProducts, setLatestProducts] = useState([])

  const getProducts = async () => {
    const data = await axios.get("/api/v1/latestProducts").then((res) => {
      console.log(res.data)
      setLatestProducts(res.data?.products);
      });
    };
  
  const  { isAuthenticated }= useSelector((state)=> state.user);

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
    <Router>
      <Header/>
          <Routes>
            <Route path="/" element={<Home latestProducts={latestProducts}/>} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products/:category" element={<ProductList/>} />
            <Route path="/admin" element={isAuthenticated?<AddProduct/>:<Login/>} />
          </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
