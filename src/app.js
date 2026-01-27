const createError = require('http-errors');
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const errorHandler = require('./middlewares/error-handler');
const auth = require('./middlewares/verify-auth');

const indexRouter = require('./routes/index');
const dashboardRouter = require('./routes/dashboard');
const reservationsRouter = require('./routes/lists/reservations');
const catwaysRouter = require('./routes/lists/catways');
const usersRouter = require('./routes/lists/users');

const mongodb = require('./db/mongo');

/**CONNECTION TO MONGODB*/
mongodb.initClientDbConnection();

const app = express();

/**
 * swagger configuration
 */
const swaggerUi = require('swagger-ui-express');

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./routes*.js', './routes/lists*.js'],
};

const openapiSpecification = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// view engine setup
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));


// get elements from HTML forms
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

// verify authentification to access the dashboard
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/dashboard', auth, dashboardRouter);
app.use('/reservations', auth, reservationsRouter);
app.use('/catways', auth, catwaysRouter);
app.use('/users', auth, usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(errorHandler);

module.exports = app;