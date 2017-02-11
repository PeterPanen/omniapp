import express from 'express';
import apiAuthRoutes from './routes/api/auth';

const router = express.Router();
router.use('/api/auth', apiAuthRoutes);

export default router;
