import express from 'express';
 const router = express.Router();
 import { 
     getProducts,
     getProductById,
     creatProducts,
    updateProducts,
    deleteProducts
    } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, creatProducts); // Route to get all products
router.route('/:id')
.get(getProductById)
.put(protect, admin, updateProducts)
.delete(protect, admin, deleteProducts); // Route to get a product by ID  




 export default router;// backend/routes/products.Routes.js
// This file defines the routes for product-related operations.