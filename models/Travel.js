import Sequelize from 'sequelize';
import db from '../config/db.js'

export const Travel = db.define('travels', {
    title: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.NUMBER
    },
    date_start: {
        type: Sequelize.STRING
    },
    date_end: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    available: {
        type: Sequelize.NUMBER
    },
    slug: {
        type: Sequelize.STRING
    }
});