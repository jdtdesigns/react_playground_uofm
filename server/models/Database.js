const { Schema, model } = require('mongoose');

const databaseSchema = new Schema({
  database_name: {
    type: String,
    required: true
  }
});

const Database = model('Database', databaseSchema);

module.exports = Database;