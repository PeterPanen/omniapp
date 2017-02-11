import express from 'express';

const router = express.Router();
router.get('/', (req, res) => res.json({ authenticated: true }));

export default router;
