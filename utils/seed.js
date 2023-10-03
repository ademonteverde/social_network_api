const mongoose = require('mongoose');
const connection = require('../config/connection');
const { Thought, User } = require('../models');
const userData = require('./userData');
const thoughtData = require('./thoughtData');

// Function to seed the database
async function seedDatabase() {
    try {
        await connection;

        await User.deleteMany({});
        await Thought.deleteMany({});

        await User.insertMany(userData);
        await Thought.insertMany(thoughtData);

        console.log('Seed data inserted successfully');
    } catch (error) {
        console.error('Error inserting seed data:', error);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();

module.exports = {
    userData,
    thoughtData
};
