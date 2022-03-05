import { Testimonial } from "../models/Testimonial.js";

const saveTestimonial = async (req, res) => {
    const { name, email, message } = req.body;
    const errors = [];
    if(name.trim() === '') 
        errors.push({ message: 'Name is empty' });
    if(email.trim() === '') 
        errors.push({ message: 'Email is empty' });
    if(message.trim() === '') 
        errors.push({ message: 'Message is empty' });
    if(errors.length > 0) {
        const testimonials = await Testimonial.findAll();
        res.render('testimonials', {
            page: 'Testimonials',
            errors,
            name,
            email,
            message,
            testimonials
        });
    } 
    else {
        try {
            await Testimonial.create({
                name,
                email, 
                message
            });
            res.redirect('./testimonials');
        } catch(error) {
            console.error(error);
        }
    }
}

export { saveTestimonial }