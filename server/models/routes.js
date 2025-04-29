const data = require('../data/routes.json'); 
const { connect } = require('./supabase');
const { CustomError, statusCodes } = require('./errors');

const supabase = connect();
const TABLE = 'routes'; // Define the table name for clarity

module.exports = {
  // Fetch all routes
  async getAllRoutes() {
    const { data, error } = await supabase.from(TABLE).select('*');
    if (error) {
      console.error('Error fetching routes:', error);
      throw new CustomError('Failed to fetch routes', statusCodes.INTERNAL_SERVER_ERROR);
    }
    return data;
  },

  // Fetch a single route by ID
  async getRouteById(routeId) {
    const { data, error } = await supabase.from(TABLE).select('*').eq('id', routeId).single();
    if (error) {
      console.error(`Error fetching route with ID ${routeId}:`, error);
      throw new CustomError(`Failed to fetch route with ID ${routeId}`, statusCodes.NOT_FOUND);
    }
    return data;
  },

  // Add a new route
  async addRoute(route) {
    // Fetch all routes to determine the latest ID
    const { data: routes, error: fetchError } = await supabase.from('routes').select('*');
    if (fetchError) {
      console.error('Error fetching routes:', fetchError);
      throw fetchError;
    }

    // Calculate the next ID
    const latestId = routes.length > 0 ? Math.max(...routes.map(r => r.id)) : 0;
    route.id = latestId + 1;

    // Insert the new route
    const { data, error } = await supabase.from('routes').insert([route]);
    if (error) {
      console.error('Error adding route:', error);
      throw error;
    }

    return data; // Return the created route
  },

  // Update an existing route by ID
  async updateRoute(routeId, updatedRoute) {
    const { data, error } = await supabase
      .from(TABLE)
      .update(updatedRoute) // Update the route with the new data
      .eq('id', routeId); // Match the route by ID

    if (error) {
      console.error(`Error updating route with ID ${routeId}:`, error);
      throw error;
    }

    return data; // Return the updated route
  },

  // Delete a route by ID
  async deleteRoute(routeId) {
    const { data, error } = await supabase.from(TABLE).delete().eq('id', routeId);
    if (error) {
      console.error(`Error deleting route with ID ${routeId}:`, error);
      throw new CustomError(`Failed to delete route with ID ${routeId}`, statusCodes.INTERNAL_SERVER_ERROR);
    }
    return data;
  },

  async seed() {
    for (const item of data.items) {
      const { error } = await supabase.from(TABLE).insert([item]);
      if (error) {
        console.error('Error seeding routes:', error);
        throw new CustomError('Failed to seed routes', statusCodes.INTERNAL_SERVER_ERROR);
      }
    }
  }

};