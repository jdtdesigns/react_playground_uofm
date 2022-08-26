const { Schema, model, SchemaTypes } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'You must supply an email address'],
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
    // validate: {
    //   validator: function (v) {
    //     return /\d{3}-\d{3}-\d{4}/.test(v);
    //   },
    //   message: props => `${props.value} is not a valid phone number!`
    // },
  },
  password: {
    type: String,
    required: true
  },
  todos: [{
    type: SchemaTypes.ObjectId,
    ref: 'Todo'
  }]
}, {
  hooks: {
    async beforeCreate(user) {
      const hashed_pass = await bcrypt.hash(user.password, 10);
      user.password = hashed_pass;
    }
  }
});

userSchema.methods.validatePass = async function (unencryted_password) {
  const valid_pass = await bcrypt.compare(unencryted_password, this.password);
  return valid_pass;
}

const User = model('User', userSchema);

module.exports = User;