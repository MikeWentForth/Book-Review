require('dotenv').config();
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const gracefulShutdown = require('http-graceful-shutdown');
const errorHandler = require('./utils/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use static public folder
app.use(express.static(path.join(__dirname, 'public')));

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Use routes
app.use(routes);

// Implemente express-async-handler
app.use(errorHandler);


sequelize.sync({ force: false }).then(() => {
  const server = app.listen(PORT, () => {
    console.log('Now listening on port:', PORT);
  });
  // Implementing gracefulShutdown
  gracefulShutdown(server);
});
