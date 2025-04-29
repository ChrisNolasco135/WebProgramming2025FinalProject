const routesModel = require('../models/routes');
const { CustomError, statusCodes } = require('../models/errors');
const express = require('express');

const router = express.Router();

router
  // Get all routes
  .get('/', function(req, res, next) {
    routesModel.getAllRoutes()
      .then(routes => res.json(routes))
      .catch(next);
  })
  // Get a single route by ID
  .get('/:id', function(req, res, next) {
    const { id } = req.params;
    routesModel.getRouteById(id)
      .then(route => {
        if (!route) {
          return res.status(statusCodes.NOT_FOUND).json({ error: `Route with ID ${id} not found` });
        }
        res.json(route);
      })
      .catch(next);
  })
  // Add a new route
  .post('/', async function (req, res, next) {
    const newRoute = req.body; // Get the route details from the request body

    try {
      const route = await routesModel.addRoute(newRoute); // Call the model to add the route
      res.status(201).json(route); // Respond with the created route
    } catch (error) {
      console.error('Error adding route:', error);
      next(error); // Pass the error to the error handler
    }
  })
  // Update an existing route by ID
  .put('/:id', function (req, res, next) {
    const { id } = req.params; // Extract the route ID from the URL
    const updatedRoute = req.body; // Get the updated route data from the request body

    routesModel.updateRoute(id, updatedRoute)
      .then(route => {
        if (!route) {
          return res.status(statusCodes.NOT_FOUND).json({ error: `Route with ID ${id} not found` });
        }
        res.json(route); // Respond with the updated route
      })
      .catch(next); // Handle errors
  })
  // Delete a route by ID
  .delete('/:id', function(req, res, next) {
    const { id } = req.params;
    routesModel.deleteRoute(id)
      .then(() => {
        res.status(statusCodes.NO_CONTENT).send();
      })
      .catch(next);
  }
  )
  // Seed routes data
  .post('/seed', function(req, res, next) {
    routesModel.seed()
      .then(() => {
        res.status(statusCodes.CREATED).json({ message: 'Routes seeded successfully' });
      })
      .catch(next);
  }
  );

module.exports = router;