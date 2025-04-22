const usersModel = require('../models/users');
const { CustomError, statusCodes } = require('../models/errors');

module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await usersModel.getAllUsers();
      res.status(statusCodes.OK).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch users' });
    }
  },

  // Get a single user by ID
  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await usersModel.getUserById(id);
      if (!user) {
        return res.status(statusCodes.NOT_FOUND).json({ error: `User with ID ${id} not found` });
      }
      res.status(statusCodes.OK).json(user);
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error);
      res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch user' });
    }
  },

  // Add a new user
  async addUser(req, res) {
    const newUser = req.body;
    try {
      const user = await usersModel.addUser(newUser);
      res.status(statusCodes.CREATED).json(user);
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(statusCodes.BAD_REQUEST).json({ error: 'Failed to add user' });
    }
  },

  // Update an existing user by ID
  async updateUser(req, res) {
    const { id } = req.params;
    const updatedUser = req.body;
    try {
      const user = await usersModel.updateUser(id, updatedUser);
      if (!user) {
        return res.status(statusCodes.NOT_FOUND).json({ error: `User with ID ${id} not found` });
      }
      res.status(statusCodes.OK).json(user);
    } catch (error) {
      console.error(`Error updating user with ID ${id}:`, error);
      res.status(statusCodes.BAD_REQUEST).json({ error: 'Failed to update user' });
    }
  },

  // Delete a user by ID
  async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const user = await usersModel.deleteUser(id);
      if (!user) {
        return res.status(statusCodes.NOT_FOUND).json({ error: `User with ID ${id} not found` });
      }
      res.status(statusCodes.OK).json({ message: `User with ID ${id} deleted successfully` });
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
      res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete user' });
    }
  },
};