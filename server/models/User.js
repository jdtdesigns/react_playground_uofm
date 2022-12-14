const { Schema, model, SchemaTypes } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'You must supply an email address'],
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
  },
  password: {
    type: String,
    required: true
  },
  todos: [{
    type: SchemaTypes.ObjectId,
    ref: 'Todo'
  }]
});

userSchema.pre(['insertMany', 'save'], async function (next, users) {
  if (Array.isArray(users)) {
    const hashed_users = users.map(async user => {
      const hashed_pass = await bcrypt.hash(user.password, 10);
      user.password = hashed_pass;
      return user;
    });
    console.log(await Promise.all(hashed_users));
    return next();
  }

  const hashed_pass = await bcrypt.hash(this.password, 10);
  this.password = hashed_pass;
});

userSchema.methods.validatePass = async function (unencryted_password) {
  const valid_pass = await bcrypt.compare(unencryted_password, this.password);
  return valid_pass;
}

const User = model('User', userSchema);

module.exports = User;