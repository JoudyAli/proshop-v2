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
 

router.route('/').post(registerUser).get(getUsers); 
router.post('/logout',logoutUser);
router.post('/login',authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile)
router.route('/:id').delete(deleteUsers).get(getUsersById).put
(updateUser)



 export default router;// backend/routes/products.Routes.js
// This file defines the routes for product-related operations.