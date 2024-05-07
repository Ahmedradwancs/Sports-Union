import express from 'express';
import { createUserActivity, getUserActivities, getUserActivity, getUsersWithSameActivity } from '../controllers/users-activities.controller.js';

const usersActivitiesRouter = express.Router();




// Route handler to get all users activities
usersActivitiesRouter.get('/users-activities/', getUserActivities);

// Route handler to get a single user's activities
usersActivitiesRouter.get('/user-activities/:id', getUserActivity);

// Route handler to get users have the same activities
usersActivitiesRouter.get('/users-same-activities/:id', getUsersWithSameActivity);

// Route handler to create a new user activity
usersActivitiesRouter.post('/user-activity', createUserActivity);

export default usersActivitiesRouter;
