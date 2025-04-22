const { connect } = require('./supabase');
const { CustomError, statusCodes } = require('./errors');

const supabase = connect();

module.exports = {
  // Fetch all activities
  async getAllActivities() {
    const { data, error } = await supabase.from('activities').select('*');
    if (error) {
      console.error('Error fetching activities:', error);
      throw new CustomError('Failed to fetch activities', statusCodes.INTERNAL_SERVER_ERROR);
    }
    return data;
  },

  // Fetch a single activity by ID
  async getActivityById(activityId) {
    const { data, error } = await supabase.from('activities').select('*').eq('id', activityId).single();
    if (error) {
      console.error(`Error fetching activity with ID ${activityId}:`, error);
      throw new CustomError(`Failed to fetch activity with ID ${activityId}`, statusCodes.NOT_FOUND);
    }
    return data;
  },

  // Fetch activities by user ID
  async getActivitiesByUserId(userId) {
    const { data, error } = await supabase.from('activities').select('*').eq('user_id', userId);
    if (error) {
      console.error(`Error fetching activities for user ID ${userId}:`, error);
      throw new CustomError(`Failed to fetch activities for user ID ${userId}`, statusCodes.NOT_FOUND);
    }
    return data;
  },

  // Add a new activity
  async addActivity(activity) {
    const { data, error } = await supabase.from('activities').insert([activity]);
    if (error) {
      console.error('Error adding activity:', error);
      throw new CustomError('Failed to add activity', statusCodes.BAD_REQUEST);
    }
    return data;
  },

  // Update an existing activity by ID
  async updateActivity(activityId, updatedActivity) {
    const { data, error } = await supabase.from('activities').update(updatedActivity).eq('id', activityId);
    if (error) {
      console.error(`Error updating activity with ID ${activityId}:`, error);
      throw new CustomError(`Failed to update activity with ID ${activityId}`, statusCodes.BAD_REQUEST);
    }
    return data;
  },

  // Delete an activity by ID
  async deleteActivity(activityId) {
    const { data, error } = await supabase.from('activities').delete().eq('id', activityId);
    if (error) {
      console.error(`Error deleting activity with ID ${activityId}:`, error);
      throw new CustomError(`Failed to delete activity with ID ${activityId}`, statusCodes.INTERNAL_SERVER_ERROR);
    }
    return data;
  },
};