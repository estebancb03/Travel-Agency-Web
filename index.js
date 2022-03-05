import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'
import dotenv from 'dotenv';

dotenv.config({ path: 'variables.env' });
const app = express();

db.authenticate()
    .then(() => console.log('DB ready...'))
    .catch(error => console.error(error));

const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';

app.set('view engine', 'pug');

app.use((req, res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.webName = 'Travel Agency';
    next();
});

app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use(express.static('public'));

app.listen(port, host, () => {
    console.log(`Server running on port ${ port } and host ${ host }`);
});