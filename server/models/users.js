const data = require('../data/users.json'); 
const { CustomError, statusCodes } = require('./errors')
const { connect } = require('./supabase');

const supabase = connect();
const TABLE = 'users'; // Define the table name for clarity

module.exports = {
  // Fetch all users
  async getAllUsers() {
    const { data, error } = await supabase.from(TABLE).select('*');
    if (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
    return data;
  },

  // Fetch a single user by ID
  async getUserById(userId) {
    const { data, error } = await supabase.from(TABLE).select('*').eq('id', userId).single();
    if (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      throw error;
    }
    return data;
  },

  // Add a new user
  async addUser(user) {
    const { data, error } = await supabase.from(TABLE).insert([user]);
    if (error) {
      console.error('Error adding user:', error);
      throw error;
    }
    return data;
  },

  // Update an existing user by ID
  async updateUser(userId, updatedUser) {
    const { data, error } = await supabase.from(TABLE).update(updatedUser).eq('id', userId);
    if (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
      throw error;
    }
    return data;
  },

  // Delete a user by ID
  async deleteUser(userId) {
    const { data, error } = await supabase.from(TABLE).delete().eq('id', userId);
    if (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw error;
    }
    return data;
  },

  async seed(){
    for (const item of data.items) {

        const insert = mapToDB(item)
        const { data: newItem, error } = await supabase.from(TABLE).insert(insert).select('*')
        if (error) {
            throw error
        }

    }
    return { message: 'Seeded successfully' }
  }
};

function mapToDB(item) {
  return {
   id: item.id,
   firstName: item.name,
   lastName: item.surname,
   email: item.email,
   age: item.age,
   gender: item.gender,
   bodyInfo: {
      height: item.height,
      weight: item.weight
    },
   icon: item.icon,
   role: item.role
  }
};

