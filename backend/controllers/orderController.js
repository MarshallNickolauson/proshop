import expressAsyncHandler from "express-async-handler";
import Order from '../models/orderModel.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
export const addOrderItems = expressAsyncHandler(async (req, res) => {
    res.send('add order items');
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
export const getMyOrders = expressAsyncHandler(async (req, res) => {
    res.send('get my orders');
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
export const getOrderById = expressAsyncHandler(async (req, res) => {
    res.send('get order by id');
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
export const updateOrderToPaid = expressAsyncHandler(async (req, res) => {
    res.send('update order to paid');
});

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
export const updateOrderToDelivered = expressAsyncHandler(async (req, res) => {
    res.send('update order to delivered');
});

// @desc    Get all orders
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
export const getOrders = expressAsyncHandler(async (req, res) => {
    res.send('get all orders');
});