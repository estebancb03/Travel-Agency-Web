import { Travel } from '../models/Travel.js'
import { Testimonial } from '../models/Testimonial.js'

const homePage = async (req, res) => {
    const promiseDB = [];
    promiseDB.push(Travel.findAll({ limit: 3 }));
    promiseDB.push(Testimonial.findAll({ limit: 3 }));
    try {
        const answer = await Promise.all(promiseDB);
        res.render('home', { 
            page: 'Home', 
            className: 'home',
            travels: answer[0],
            testimonials: answer[1]
        });   
    } catch(exception) {
        console.error(exception);
    }
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