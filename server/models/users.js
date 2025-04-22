const { connect } = require('./supabase');

const supabase = connect();

module.exports = {
  // Fetch all users
  async getAllUsers() {
    const { data, error } = await supabase.from('users').select('*');
    if (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
    return data;
  },

  // Fetch a single user by ID
  async getUserById(userId) {
    const { data, error } = await supabase.from('users').select('*').eq('id', userId).single();
    if (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      throw error;
    }
    return data;
  },

  // Add a new user
  async addUser(user) {
    const { data, error } = await supabase.from('users').insert([user]);
    if (error) {
      console.error('Error adding user:', error);
      throw error;
    }
    return data;
  },

  // Update an existing user by ID
  async updateUser(userId, updatedUser) {
    const { data, error } = await supabase.from('users').update(updatedUser).eq('id', userId);
    if (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
      throw error;
    }
    return data;
  },

  // Delete a user by ID
  async deleteUser(userId) {
    const { data, error } = await supabase.from('users').delete().eq('id', userId);
    if (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw error;
    }
    return data;
  },
};