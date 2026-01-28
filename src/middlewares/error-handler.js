/**
 * @file error-handler.js
 * @module middlewares/error-handler
 * @description Error Handler
 */

/**
 * provide error messages and status to error.ejs
 * @function errorHandler
 * @param {Error} err - hold message and status
 * @param {import('express').Request} req - check if we are in run dev
 * @param {import('express').Response} res - send message and error to error.ejs
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
 */
const errorHandler = function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
};

module.exports = errorHandler;