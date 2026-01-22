const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const dashboardRouter = require('./routes/dashboard');
const reservationsRouter = require('./routes/lists/reservations');

const mongodb = require('./db/mongo');

mongodb.initClientDbConnection();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));


// get elements from HTML forms
app.use(express.urlencoded({ extended: false }));

// verify authentification to access the dashboard
app.use(cookieParser());
const auth = require('./middlewares/verify-auth');
app.use('/dashboard', auth, dashboardRouter);


app.use('/', indexRouter);
app.use('/reservations', auth, reservationsRouter);

const errorHandler = require('./middlewares/error-handler');
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(errorHandler);

module.exports = app;
