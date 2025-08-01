import express from 'express';
 const router = express.Router();
 import asyncHandler from '../middleware/asyncHandler.js';
 import Product from '../models/productModel.js';

router.get("/", asyncHandler(async(req, res) => {
  const products = await Product.find({});
  // It uses asyncHandler to handle asynchronous operations and errors gracefully.
  res.json(products);   
}));
 
router.get("/:id",asyncHandler(async(req, res) => {
   const product = await Product.findById(req.params.id);                 
     
    if (product) {
       return res.json(product);
    }
    
      res.status(404).json({Message:'Product not found'});
    
     })
);



 export default router;// backend/routes/products.Routes.js
// This file defines the routes for product-related operations.