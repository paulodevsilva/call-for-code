const DonationController = require('./controllers/donation.controller');
const EventController = require('./controllers/event.controller');
const UserController = require('./controllers/user.controller');

const routes = require('express').Router();

const userController = new UserController();
const eventController = new EventController();
const donationController = new DonationController();


// user routes

routes.post('/users', userController.create);
routes.post('/users/login', userController.login);


// event routes

routes.post('/events', eventController.create);
routes.get('/events', eventController.getAll);


// donate routes

routes.post('/donations', donationController.create);
routes.get('/donations', donationController.getAll);


module.exports = routes;