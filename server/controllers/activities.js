const activitiesModel = require('../models/activities');
const { CustomError, statusCodes } = require('../models/errors');
const express = require('express');

const router = express.Router();

router
  //get all activities
  .get('/', function(req, res, next) {
    activitiesModel.getAllActivities()
      .then(activities => res.json(activities))
      .catch(next)
  })
  //get activity by id
  .get('/:id', function(req, res, next) {
    const { id } = req.params;
    activitiesModel.getActivityById(id)
      .then(activity => {
        res.json(activity);
      })
      .catch(next);
  })
  //get activities by user id
  .get('/user/:userId', function(req, res, next) {
    const { userId } = req.params;
    activitiesModel.getActivitiesByUserId(userId)
      .then(activities => {
        res.json(activities);
      })
      .catch(next);
  })
  //add new activity
  .post('/', async function(req, res) {
    const newActivity = req.body;

    try {
      // Fetch the latest activity to determine the next ID
      const activities = await activitiesModel.getAllActivities();
      const latestId = activities.length > 0 ? Math.max(...activities.map(a => a.id)) : 0;
      newActivity.id = latestId + 1;

      // Add the new activity
      const activity = await activitiesModel.addActivity(newActivity);
      res.status(201).json(activity);
    } catch (error) {
      console.error('Error adding activity:', error);
      res.status(500).json({ error: 'Failed to add activity' });
    }
  })
  //update activity by id
  .put('/:id', function(req, res, next) {
    const { id } = req.params;
    const updatedActivity = req.body;
    activitiesModel.updateActivity(id, updatedActivity)
      .then(activity => {
        res.json(activity);
      })
      .catch(next);
  }
  )
  //delete activity by id
  .delete('/:id', function(req, res, next) {
    const { id } = req.params;
    activitiesModel.deleteActivity(id)
      .then(() => {
        res.status(statusCodes.NO_CONTENT).send();
      })
      .catch(next);
  }
  )
  // Seed the database with initial data
  .post('/seed', function(req, res, next) {
    activitiesModel.seed()
      .then(() => {
        res.status(statusCodes.CREATED).json({ message: 'Database seeded successfully' });
      })
      .catch(next);
  }
  );
  
module.exports = router;