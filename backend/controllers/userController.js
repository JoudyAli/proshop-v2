
import asyncHandler from '../middleware/asyncHandler.js';
  import User from '../models/userModel.js';
  import jwt from 'jsonwebtoken'

  // @desc    Auth uder & get token
  // @route   Post/api/users/login
  // @access  Public

 const authUser=asyncHandler(async(req,res)=>{
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if (user && (await user.matchPassword(password))){
  const token= jwt.sign({userId : user._id},process.env.JWT_SECRET,{
   expiresIn: '40d'
  })

  //Set JWT as HTTP-Only Cookie
  res.cookie('JWT',token,{
   httpOnly : true,
   secure: process.env.NODE_ENV !== 'development',
   sameSite : 'strict',
   maxAge:40*24*60*60*1000 // 30 Days
  });

   res.json({
      _id : user._id,
      name : user.name,
      email : user.email,
      isAdmin : user.isAdmin
   });
  }else{
   res.status(401);
   throw new Error ('Invalid email or password');
  }

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









