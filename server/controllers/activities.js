const activitiesModel = require('../models/activities');
const { CustomError, statusCodes } = require('../models/errors');

module.exports = {
  // Get all activities
  async getAllActivities(req, res) {
    try {
      const activities = await activitiesModel.getAllActivities();
      res.status(statusCodes.OK).json(activities);
    } catch (error) {
      console.error('Error fetching activities:', error);
      res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch activities' });
    }
  },

  // Get a single activity by ID
  async getActivityById(req, res) {
    const { id } = req.params;
    try {
      const activity = await activitiesModel.getActivityById(id);
      if (!activity) {
        return res.status(statusCodes.NOT_FOUND).json({ error: `Activity with ID ${id} not found` });
      }
      res.status(statusCodes.OK).json(activity);
    } catch (error) {
      console.error(`Error fetching activity with ID ${id}:`, error);
      res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch activity' });
    }
  },

  // Get activities by user ID
  async getActivitiesByUserId(req, res) {
    const { userId } = req.params;
    try {
      const activities = await activitiesModel.getActivitiesByUserId(userId);
      if (!activities || activities.length === 0) {
        return res.status(statusCodes.NOT_FOUND).json({ error: `No activities found for user ID ${userId}` });
      }
      res.status(statusCodes.OK).json(activities);
    } catch (error) {
      console.error(`Error fetching activities for user ID ${userId}:`, error);
      res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch activities' });
    }
  },

  // Add a new activity
  async addActivity(req, res) {
    const newActivity = req.body;
    try {
      const activity = await activitiesModel.addActivity(newActivity);
      res.status(statusCodes.CREATED).json(activity);
    } catch (error) {
      console.error('Error adding activity:', error);
      res.status(statusCodes.BAD_REQUEST).json({ error: 'Failed to add activity' });
    }
  },

  // Update an existing activity by ID
  async updateActivity(req, res) {
    const { id } = req.params;
    const updatedActivity = req.body;
    try {
      const activity = await activitiesModel.updateActivity(id, updatedActivity);
      if (!activity) {
        return res.status(statusCodes.NOT_FOUND).json({ error: `Activity with ID ${id} not found` });
      }
      res.status(statusCodes.OK).json(activity);
    } catch (error) {
      console.error(`Error updating activity with ID ${id}:`, error);
      res.status(statusCodes.BAD_REQUEST).json({ error: 'Failed to update activity' });
    }
  },

  // Delete an activity by ID
  async deleteActivity(req, res) {
    const { id } = req.params;
    try {
      const activity = await activitiesModel.deleteActivity(id);
      if (!activity) {
        return res.status(statusCodes.NOT_FOUND).json({ error: `Activity with ID ${id} not found` });
      }
      res.status(statusCodes.OK).json({ message: `Activity with ID ${id} deleted successfully` });
    } catch (error) {
      console.error(`Error deleting activity with ID ${id}:`, error);
      res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete activity' });
    }
  },
};