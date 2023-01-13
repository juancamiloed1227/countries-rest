import express from 'express';
import { getCountryByName } from '../controllers/api.js';

const router = express.Router();

// Define routes and controllers
router.get('/countries/:name', getCountryByName);

export default router;
