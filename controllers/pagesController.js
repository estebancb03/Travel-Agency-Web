import { Travel } from '../models/Travel.js'

const homePage = (req, res) => {
    res.render('home', { page: 'Inicio' });
}

const wePage = (req, res) => {
    res.render('we', { page: 'Nosotros' });
}

const travelsPage = async (req, res) => {
    const travels = await Travel.findAll();
    res.render('travels', { 
        page: 'Próximos viajes',
        travels 
    });
}

const testimonialsPage = (req, res) => {
    res.render('testimonials', { page: 'Testimoniales' });
}

export {
    homePage,
    wePage,
    travelsPage,
    testimonialsPage
}