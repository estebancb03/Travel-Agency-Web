import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'

const app = express();

db.authenticate()
    .then(() => console.log('DB ready...'))
    .catch(error => console.error(error));

const port = process.env.PORT || 4000;

app.set('view engine', 'pug');

app.use((req, res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.webName = 'Agencia de viajes';
    next();
});

app.use('/', router);
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running on port ${ port }`);
});