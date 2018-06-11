// => node modules
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

// => defining routes
const projectRouter = express.Router();
const scarecrowRouter = require('./src/routes/scRoutes')();

// => extra logging (morgan), parsing av POST requests (body-parser) & favicon
app.use(morgan('tiny'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'scarecrow' }));
require('./src/config/passport.js')(app);
app.use(favicon(path.join(__dirname, '/public/ico', 'favicon.ico')));

// => static folder for source files
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/src/css')));
app.use('/js', express.static(path.join(__dirname, '/src/js')));
app.use('/img', express.static(path.join(__dirname, '/src/img')));
app.use('/ico', express.static(path.join(__dirname, '/src/ico')));

// => setting up EJS as a template engine
app.set('views', './src/views');
app.set('view engine', 'ejs');


// => returning index file if root is accessed
app.get('/', (req, res) => {
  res.render('index',
  {
    menuItem: [{text: 'Front page', id: 'pHome'},
      {text: 'Projects', id: 'pProjects'},
      {text: 'About', id: 'pAbout'}]
  });
});

// => root of the project router
projectRouter.route('/').get((req, res) => {
  res.send('Unable to find the requested page.');
});
// => using the scarecrow router if /scarecrow are shown.
app.use('/scarecrow', scarecrowRouter);

// => listening to port
app.listen(port, () => {
  debug(`Server up, listening to port ${chalk.cyan(port)}`);
});