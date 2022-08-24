const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/react_playground');

module.exports = mongoose.connection;