import express from 'express';
import { creteTour } from '../controllers/tourController.js';

const router = express.Router();

router.post("/",creteTour);

export default router;