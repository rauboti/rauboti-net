// => node modules => 178.128.172.245
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const device = require('express-device');
//const passport = require('passport');
const cookieParser = require('cookie-parser');
//const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

// => defining routes
const router = require('./src/routes/routes')();

// => extra logging (morgan), parsing av POST requests (body-parser) & favicon
app.use(morgan('tiny'))
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: false }))
.use(cookieParser())
//app.use(session({ secret: 'scarecrow' }));
//require('./src/config/passport.js')(app);
.use(device.capture())
.use(favicon(path.join(__dirname, '/public/ico', 'favicon.ico')));

// => static folder for source files
app.use(express.static(path.join(__dirname, '/public')))
.use('/css', express.static(path.join(__dirname, '/src/css')))
.use('/js', express.static(path.join(__dirname, '/src/js')))
.use('/img', express.static(path.join(__dirname, '/src/img')))
.use('/ico', express.static(path.join(__dirname, '/src/ico')))

// => setting up EJS as a template engine
app.set('views', './public/views')
.set('view engine', 'ejs');

// => returning index file if root is accessed
app.use('/', router);

// => listening to port
app.listen(port, () => {
  debug(`Server up, listening to port ${chalk.cyan(port)}`);
});