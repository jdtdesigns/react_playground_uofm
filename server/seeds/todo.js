const { Todo } = require('../models');
const { faker } = require('@faker-js/faker');
const db = require('../config/connection');

let todos = [];
let count = 50;

while (count--) {
  todos.push({
    todo_text: faker.lorem.paragraph()
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
})