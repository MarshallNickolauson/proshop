import express from 'express';
import { authUser, deleteUserById, getUserById, getUserProfile, getUsers, logoutUser, registerUser, updateUserById, updateUserProfile } from '../controllers/userController.js';
const router = express.Router();

router.route('/').get(getUsers).post(registerUser);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById);

export default router;