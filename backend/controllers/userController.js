import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
export const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Register user
// @route   POST /api/users
// @access  Public
export const registerUser = expressAsyncHandler(async (req, res) => {
  res.send("Register user");
});

// @desc    Logout user & clear cookie
// @route   POST /api/users/logout
// @access  Private
export const logoutUser = expressAsyncHandler(async (req, res) => {
  res.send("Logout user");
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = expressAsyncHandler(async (req, res) => {
  res.send("Get user profile");
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = expressAsyncHandler(async (req, res) => {
  res.send("Update user profile");
});

// @desc    Get users
// @route   GET /api/users
// @access  Private/Admin
export const getUsers = expressAsyncHandler(async (req, res) => {
  res.send("Get users (admin)");
});

// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private/Admin
export const getUserById = expressAsyncHandler(async (req, res) => {
  res.send("Get user by id (admin)");
});

// @desc    Update user by id
// @route   PUT /api/users/:id
// @access  Private/Admin
export const updateUserById = expressAsyncHandler(async (req, res) => {
  res.send("Update user by id (admin)");
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
export const deleteUserById = expressAsyncHandler(async (req, res) => {
  res.send("Delete user by id (admin)");
});
