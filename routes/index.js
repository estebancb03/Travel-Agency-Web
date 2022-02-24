import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        page: 'Inicio'
    });
});

router.get('/we', (req, res) => {
    res.render('we', {
        page: 'Nosotros'
    });
});

router.get('/travels', (req, res) => {
    res.render('travels', {
        page: 'Viajes'
    });
});

router.get('/testimonials', (req, res) => {
    res.render('testimonials', {
        page: 'Testimonios'
    });
});

export default router;