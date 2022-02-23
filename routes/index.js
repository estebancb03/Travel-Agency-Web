import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/we', (req, res) => {
    res.render('we');
});

export default router;