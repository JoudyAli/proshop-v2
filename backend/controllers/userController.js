 import asyncHandler from '../middleware/asyncHandler.js';
  import User from '../models/userModel.js';

  // @desc    Auth uder & get token
  // @route   Post/api/users/login
  // @access  Public

 const authUser=asyncHandler(async(req,res)=>{
    res.send('auth user ')
 });


  // @desc    Register
  // @route   Post/api/users
  // @access  Public

 const registerUser=asyncHandler(async(req,res)=>{
    res.send(' register User ')
 });

  // @desc    Register
  // @route   Post/api/users
  // @access  Private

 const logoutUser=asyncHandler(async(req,res)=>{
    res.send(' logout User ')
 });

 // @desc    Get user profile 
  // @route   Post/api/users/profile
  // @access  Private

 const getUserProfile=asyncHandler(async(req,res)=>{
    res.send(' Get User profile ')
 });


  // @desc    Update user profile 
  // @route   Get/api/users/profile
  // @access  Public

 const updateUserProfile=asyncHandler(async(req,res)=>{
    res.send('  update Get User profile ')
 });


  // @desc    Get users  
  // @route    GET/api/users
  // @access  Private/Admin

 const getUsers=asyncHandler(async(req,res)=>{
    res.send(' Get Users ')
 });

  // @desc    Get users  by ID
  // @route   GET/api/users/:id
  // @access  Private/Admin

 const getUsersById=asyncHandler(async(req,res)=>{
    res.send(' Get Users By ID')
 });


  // @desc    Delete users  
  // @route   DELETE/api/users/:id
  // @access  Private/Admin

 const deleteUsers=asyncHandler(async(req,res)=>{
    res.send(' Delete Users ')
 });

 
  // @desc   Update users  
  // @route   PUT/api/users/:id
  // @access  Private/Admin

 const updateUser=asyncHandler(async(req,res)=>{
    res.send(' Update User ')
 });
  
export { 
     authUser,
     registerUser,
     logoutUser,
     getUserProfile,
     updateUserProfile,
      getUsers,
      getUsersById,
      deleteUsers,
      updateUser,
};









