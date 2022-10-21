const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary");

const { isAuthenticated } = require("../middleware/auth");
const Product = require("../models/Product");
const User = require("../models/User");

router.route("/product/add").post(isAuthenticated, async (req,res) => {
    try {

        const {category, image, title, desc, price} = req.body;

            const myCloud = await cloudinary.v2.uploader.upload(image,{
                folder: "products",
            })

        const newProduct = {
            category:category,
            title:title,
            desc:desc,
            price:price,
            image:{
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
              },
        }

        const product = await  Product.create(newProduct);

        res.status(201).json({
            success: true,
            message: "Product Added"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

router.route("/latestProducts").get( async (req,res) => {

    try {

        const products = await Product.find();

        return res.status(200).json({
            success:true,
            products:products.reverse().slice(0,5)
        })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

router.route("/product/category/:category").get( async (req,res) => {

    try {

        const products = await Product.find({category:req.params.category});

        return res.status(200).json({
            success:true,
            products:products.reverse()
        })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

router.route("/product/:id").get( async (req,res) => {

    try {

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
              success: false,
              message: "product not found",
            });
          }

        return res.status(200).json({
            success:true,
            product:product
        })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

router.route("/product/:id").delete(isAuthenticated, async (req,res) => {

    try {

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
              success: false,
              message: "product not found",
            });
          }

          await cloudinary.v2.uploader.destroy(product.image.public_id);

          await product.remove();

        return res.status(200).json({
            success:true,
            message: "Product deleted",
        })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router