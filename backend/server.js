import express from 'express';
import { errorHandler } from './middleware/errorMiddleware.js';
import { connectDB } from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.BACKEND_PORT || 5000;

import productRoutes from './routes/productRoutes.js';

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(cors());
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/route', importedRoute)

app.use('/api/products', productRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
