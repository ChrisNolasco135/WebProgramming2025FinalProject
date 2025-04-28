const usersModel = require('../models/users');
const { CustomError, statusCodes } = require('../models/errors');
const express = require('express');
const { route } = require('./activities');

const router = express.Router();

router
  // Get all users
  .get('/', function(req, res, next) {
    usersModel.getAllUsers()
      .then(users => res.json(users))
      .catch(next);
  })
  // Get user by ID
  .get('/:id', function(req, res, next) {
    const { id } = req.params;
    usersModel.getUserById(id)
      .then(user => {
        if (!user) {
          return res.status(statusCodes.NOT_FOUND).json({ error: `User with ID ${id} not found` });
        }
        res.json(user);
      })
      .catch(next);
  })
  // Add a new user
  .post('/', function(req, res, next) {
    const newUser = req.body;
    usersModel.addUser(newUser)
      .then(user => {
        res.status(statusCodes.CREATED).json(user);
      })
      .catch(next);
  })
  // Update an existing user by ID
  .patch('/:id', function(req, res, next) {
    const { id } = req.params;
    const updatedUser = req.body;
    usersModel.updateUser(id, updatedUser)
      .then(user => {
        if (!user) {
          return res.status(statusCodes.NOT_FOUND).json({ error: `User with ID ${id} not found` });
        }
        res.json(user);
      })
      .catch(next);
  })
  // Delete a user by ID
  .delete('/:id', function(req, res, next) {
    const { id } = req.params;
    usersModel.deleteUser(id)
      .then(() => {
        res.status(statusCodes.NO_CONTENT).send();
      })
      .catch(next);
  }
  )
  // Seed users data
  .post('/seed', function(req, res, next) {
    usersModel.seed()
      .then(() => {
        res.status(statusCodes.CREATED).json({ message: 'Users seeded successfully' });
      })
      .catch(next);
  }
  );

module.exports = router;