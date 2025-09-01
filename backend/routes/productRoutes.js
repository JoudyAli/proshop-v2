import express from 'express';
 const router = express.Router();
 import { 
     getProducts,
     getProductById,
     creatProducts,
    updateProducts,
    deleteProducts,
    createProductReview,
    getTopProducts
    } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').get(getProducts).post(protect, admin, creatProducts); // Route to get all products
router.get('/top',getTopProducts);


router.route('/:id')
.get(checkObjectId, getProductById)
.put(protect, admin,checkObjectId, updateProducts)
.delete(protect, admin,checkObjectId, deleteProducts); // Route to get a product by ID  
router.route('/:id/reviews').post(protect, checkObjectId,createProductReview);



 export default router;// backend/routes/products.Routes.js
// This file defines the routes for product-related operations.