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
  .post('/', function(req, res, next) {
    const newActivity = req.body;
    activitiesModel.addActivity(newActivity)
      .then(activity => {
        res.status(statusCodes.CREATED).json(activity);
      })
      .catch(next);
  }
  )
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