import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import 'reflect-metadata';

import './src/database/connect';

import userRoutes from './src/routes/userRoutes';
import authRoutes from './src/routes/authRoutes';
import postRoutes from './src/routes/postRoutes';
import ratingRoutes from './src/routes/ratingRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/post', postRoutes);
app.use('/ratings', ratingRoutes);

export default app;
