const homePage = (req, res) => {
    res.render('home', { page: 'Inicio' });
}

const wePage = (req, res) => {
    res.render('we', { page: 'Nosotros' });
}

const travelsPage = (req, res) => {
    res.render('travels', { page: 'Viajes' });
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