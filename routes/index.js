import express from 'express';
import { homePage, wePage, travelsPage, testimonialsPage } from '../controllers/pagesController.js'

const router = express.Router();
router.get('/', homePage);
router.get('/we', wePage);
router.get('/travels', travelsPage);
router.get('/testimonials', testimonialsPage);

export default router;