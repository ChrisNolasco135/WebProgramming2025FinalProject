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
  }
  // Add a new route
  )
  .post('/', function(req, res, next) {
    const newRoute = req.body;
    routesModel.addRoute(newRoute)
      .then(route => {
        res.status(statusCodes.CREATED).json(route);
      })
      .catch(next);
  }
  )
  // Update an existing route by ID
  .put('/:id', function(req, res, next) {
    const { id } = req.params;
    const updatedRoute = req.body;
    routesModel.updateRoute(id, updatedRoute)
      .then(route => {
        if (!route) {
          return res.status(statusCodes.NOT_FOUND).json({ error: `Route with ID ${id} not found` });
        }
        res.json(route);
      })
      .catch(next);
  }
  )
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
  .seed('/', function(req, res, next) {
    routesModel.seed()
      .then(() => {
        res.status(statusCodes.CREATED).json({ message: 'Routes seeded successfully' });
      })
      .catch(next);
  }
  );

module.exports = router;