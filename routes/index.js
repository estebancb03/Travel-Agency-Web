import express from 'express';
import { saveTestimonial } from '../controllers/testimonialController.js';
import { 
    homePage, 
    wePage, 
    travelsPage, 
    tripDetailsPage, 
    testimonialsPage 
} from '../controllers/pagesController.js';

const router = express.Router();
router.get('/', homePage);
router.get('/we', wePage);
router.get('/travels', travelsPage);
router.get('/travels/:slug', tripDetailsPage);
router.get('/testimonials', testimonialsPage);
router.post('/testimonials', saveTestimonial);

export default router;