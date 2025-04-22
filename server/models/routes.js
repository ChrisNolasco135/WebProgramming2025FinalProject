const { connect } = require('./supabase');
const { CustomError, statusCodes } = require('./errors');

const supabase = connect();

module.exports = {
  // Fetch all routes
  async getAllRoutes() {
    const { data, error } = await supabase.from('routes').select('*');
    if (error) {
      console.error('Error fetching routes:', error);
      throw new CustomError('Failed to fetch routes', statusCodes.INTERNAL_SERVER_ERROR);
    }
    return data;
  },

  // Fetch a single route by ID
  async getRouteById(routeId) {
    const { data, error } = await supabase.from('routes').select('*').eq('id', routeId).single();
    if (error) {
      console.error(`Error fetching route with ID ${routeId}:`, error);
      throw new CustomError(`Failed to fetch route with ID ${routeId}`, statusCodes.NOT_FOUND);
    }
    return data;
  },

  // Add a new route
  async addRoute(route) {
    const { data, error } = await supabase.from('routes').insert([route]);
    if (error) {
      console.error('Error adding route:', error);
      throw new CustomError('Failed to add route', statusCodes.BAD_REQUEST);
    }
    return data;
  },

  // Update an existing route by ID
  async updateRoute(routeId, updatedRoute) {
    const { data, error } = await supabase.from('routes').update(updatedRoute).eq('id', routeId);
    if (error) {
      console.error(`Error updating route with ID ${routeId}:`, error);
      throw new CustomError(`Failed to update route with ID ${routeId}`, statusCodes.BAD_REQUEST);
    }
    return data;
  },

  // Delete a route by ID
  async deleteRoute(routeId) {
    const { data, error } = await supabase.from('routes').delete().eq('id', routeId);
    if (error) {
      console.error(`Error deleting route with ID ${routeId}:`, error);
      throw new CustomError(`Failed to delete route with ID ${routeId}`, statusCodes.INTERNAL_SERVER_ERROR);
    }
    return data;
  },
};