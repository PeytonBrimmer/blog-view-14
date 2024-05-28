require('dotenv').config();
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const expressHandlebars = require('express-handlebars');
const helpers = require('./utils/handlebarsHelpers');
const handlebars = expressHandlebars.create({ helpers: helpers });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const session = require('express-session');
app.use(session({
    secret: process.env.SECRET,
        cookie: {
            maxAge: 3600000,
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
        }
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
}));