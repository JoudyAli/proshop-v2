import express from 'express';
 const router = express.Router();
 import {  authUser,
     registerUser,
     logoutUser,
     getUserProfile,
     updateUserProfile,
      getUsers,
      getUsersById,
      deleteUsers,
      updateUser,
  } from '../controllers/userController.js';

  import { protect,admin } from '../middleware/authMiddleware.js';
 

router.route('/').post(registerUser).get(protect,admin,getUsers); 
router.post('/logout',logoutUser);
router.post('/auth',authUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/:id').delete(protect,admin,deleteUsers).get(protect,admin,getUsersById).put
(updateUser).put(protect,admin,updateUser)



 export default router;// backend/routes/products.Routes.js
// This file defines the routes for product-related operations.