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
    // Fetch all users to determine the latest ID
    const { data: users, error: fetchError } = await supabase.from('users').select('*');
    if (fetchError) {
      console.error('Error fetching users:', fetchError);
      throw fetchError;
    }

    // Calculate the next ID
    const latestId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
    user.id = latestId + 1;

    // Insert the new user
    const { data, error } = await supabase.from('users').insert([user]);
    if (error) {
      console.error('Error adding user:', error);
      throw error;
    }

    return data; // Return the newly created user
  },

  // Update an existing user by ID
  async updateUser(userId, updatedUser) {
    const { data, error } = await supabase
      .from('users')
      .update(updatedUser) // Update the user with the new data
      .eq('id', userId); // Ensure the query filters by the correct user ID

    if (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
      throw error;
    }

    if (!data || data.length === 0) {
      throw new Error(`User with ID ${userId} not found`);
    }

    return data; // Return the updated user
  },

  // Delete a user by ID
  async deleteUser(userId) {
    const { data, error } = await supabase.from(TABLE).delete().eq('id', userId);
    if (error) {
      console.error('Error deleting user with ID ${userId}:', error);
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

