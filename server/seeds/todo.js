const { Todo, User } = require('../models');
const { faker } = require('@faker-js/faker');
const db = require('../config/connection');

let todos = [], users = [];
let count = 50;

while (count--) {
  todos.push({
    todo_text: faker.lorem.paragraph()
  });
  users.push({
    email: faker.internet.email(),
    password: 'password'
  });
}

db.once('open', () => {
  Todo.deleteMany({}).then(() => {
    Todo.insertMany(todos)
      .then(todos => {
        console.log('todos generated successfully!');
        process.exit();
      });
  });
  User.deleteMany({}).then(() => {
    User.insertMany(users)
      .then(users => {
        console.log('users generated successfully!');
        process.exit();
      });
  });
});



