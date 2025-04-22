const routesModel = require('../models/routes');
const { CustomError, statusCodes } = require('../models/errors');

module.exports = {
  // Get all routes
  async getAllRoutes(req, res) {
    try {
      const routes = await routesModel.getAllRoutes();
      res.status(statusCodes.OK).json(routes);
    } catch (error) {
      console.error('Error fetching routes:', error);
      res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch routes' });
    }
  },

  // Get a single route by ID
  async getRouteById(req, res) {
    const { id } = req.params;
    try {
      const route = await routesModel.getRouteById(id);
      if (!route) {
        return res.status(statusCodes.NOT_FOUND).json({ error: `Route with ID ${id} not found` });
      }
      res.status(statusCodes.OK).json(route);
    } catch (error) {
      console.error(`Error fetching route with ID ${id}:`, error);
      res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch route' });
    }
  },

  // Add a new route
  async addRoute(req, res) {
    const newRoute = req.body;
    try {
      const route = await routesModel.addRoute(newRoute);
      res.status(statusCodes.CREATED).json(route);
    } catch (error) {
      console.error('Error adding route:', error);
      res.status(statusCodes.BAD_REQUEST).json({ error: 'Failed to add route' });
    }
  },

  // Update an existing route by ID
  async updateRoute(req, res) {
    const { id } = req.params;
    const updatedRoute = req.body;
    try {
      const route = await routesModel.updateRoute(id, updatedRoute);
      if (!route) {
        return res.status(statusCodes.NOT_FOUND).json({ error: `Route with ID ${id} not found` });
      }
      res.status(statusCodes.OK).json(route);
    } catch (error) {
      console.error(`Error updating route with ID ${id}:`, error);
      res.status(statusCodes.BAD_REQUEST).json({ error: 'Failed to update route' });
    }
  },

  // Delete a route by ID
  async deleteRoute(req, res) {
    const { id } = req.params;
    try {
      const route = await routesModel.deleteRoute(id);
      if (!route) {
        return res.status(statusCodes.NOT_FOUND).json({ error: `Route with ID ${id} not found` });
      }
      res.status(statusCodes.OK).json({ message: `Route with ID ${id} deleted successfully` });
    } catch (error) {
      console.error(`Error deleting route with ID ${id}:`, error);
      res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete route' });
    }
  },
};