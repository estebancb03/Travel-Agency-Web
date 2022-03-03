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

const tripDetailsPage = async (req, res) => {
    const { slug } = req.params;
    try {
        const travel = await Travel.findOne({ where: { slug: slug } });
        res.render('travel', {
            page: 'Información viaje',
            travel
        });
    } catch(exception) {
        console.error(exception);
    }
}

const testimonialsPage = (req, res) => {
    res.render('testimonials', { page: 'Testimoniales' });
}

export {
    homePage,
    wePage,
    travelsPage,
    tripDetailsPage,
    testimonialsPage
}