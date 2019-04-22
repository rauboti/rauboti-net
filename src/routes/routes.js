// => node modules
const express = require('express');
const debug = require('debug')('app:raubotiRoutes');
const device = require('express-device');
//const passport = require('passport');

// => defining routes
const rRouter = express.Router();

// => db connection
//const sql = require('../js/db');

const menu = [{text: 'Front page', id: 'home', path: '/'},{text: 'Projects', id: 'projects', path: '/projects'},{text: 'About', id: 'about', path: '/about'}];
const projects = [
  {name: 'Saviour', link: 'https://saviour.rauboti.net', description: 'Light-weight economic aid-app'},
  {name: 'Scarecrow', link: 'https://scarecrow.rauboti.net', description: 'Guild site created for the upcoming release of WoW Classic'}
];

function router() {
  // => root of the router
  rRouter.route('/').get((req, res) => {
    res.render('index', { device: req.device.type.toLowerCase(), activePage: 'home', menu, title: 'Rauboti.net' });
  });
  // => The rest of the routes, pages you might want to open up
  rRouter.route('/projects').get((req, res) => {
    res.render('projects', { device: req.device.type.toLowerCase(), activePage: 'projects', menu, title: 'Rauboti.net', projects });
  });
  rRouter.route('/about').get((req, res) => {
    res.render('about', { device: req.device.type.toLowerCase(), activePage: 'about', menu, title: 'Rauboti.net' });
  });
  return rRouter;
}

module.exports = router;
