import { Travel } from '../models/Travel.js'
import { Testimonial } from '../models/Testimonial.js'

const homePage = (req, res) => {
    res.render('home', { page: 'Home' });
}

const wePage = (req, res) => {
    res.render('we', { page: 'We' });
}

const travelsPage = async (req, res) => {
    const travels = await Travel.findAll();
    res.render('travels', { 
        page: 'Next travels',
        travels 
    });
}

const tripDetailsPage = async (req, res) => {
    const { slug } = req.params;
    try {
        const travel = await Travel.findOne({ where: { slug: slug } });
        res.render('travel', {
            page: 'Travel information',
            travel
        });
    } catch(exception) {
        console.error(exception);
    }
}

const testimonialsPage = async (req, res) => {
    try {
        const testimonials = await Testimonial.findAll();
        res.render('testimonials', { 
            page: 'Testimonials', 
            testimonials
        });
    } catch(exception) {
        console.error(exception);
    }
}

export {
    homePage,
    wePage,
    travelsPage,
    tripDetailsPage,
    testimonialsPage
}