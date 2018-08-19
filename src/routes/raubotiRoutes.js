// => node modules
const express = require('express');
const debug = require('debug')('app:raubotiRoutes');
//const passport = require('passport');

// => defining routes
const raubotiRouter = express.Router();

// => db connection
//const sql = require('../js/db');

const menu = [{text: 'Front page', id: 'home', path: '/'},{text: 'Projects', id: 'projects', path: '/projects'},{text: 'About', id: 'about', path: '/about'}];
const projects = [
  {name: 'Saviour', link: 'https://saviour.rauboti.net', description: 'Light-weight economic aid-app'},
  {name: 'Scarecrow', link: 'https://scarecrow.rauboti.net', description: 'Guild site created for the upcoming release of WoW Classic'}
];

function router() {
  // => root of the scarecrow router
  raubotiRouter.route('/').get((req, res) => {
    res.render('index',
    {
      activePage: 'home', menu, title: 'Rauboti.net'
    });
  });
  // => The rest of the routes, pages you might want to open up
  raubotiRouter.route('/projects').get((req, res) => {
    res.render('projects',
    {
      activePage: 'projects', menu, title: 'Rauboti.net', projects
    });
  });
  raubotiRouter.route('/about').get((req, res) => {
    res.render('about',
    {
      activePage: 'about', menu, title: 'Rauboti.net'
    });
  });
  return raubotiRouter;
}

module.exports = router;
