const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/thoughtsDB');

module.exports = connection;
