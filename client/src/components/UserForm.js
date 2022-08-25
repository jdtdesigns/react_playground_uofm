import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DATABASE } from '../utils/mutations';

function UserForm() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // let [addUser, {}]
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input name="email" onChange={handleInputChange} value={formData.email} type="email" placeholder="Type your email" />
      <input name="password" onChange={handleInputChange} value={formData.password} type="password" placeholder="Type your password" />
      <button>Submit</button>
    </form>
  )
}

export default UserForm;




// const submitFormEl = document.querySelector('#submit-form');

// function sendPostRequest(event) {

// }

// submitFormEl.addEventListener('submit', sendPostRequest);

// <body>
//   <form id="submit-form">
//     <input type="email" placeholder="Type your email" />
//     <input type="password" placeholder="Type your password" />
//     <button>Submit</button>
//   </form>
// </body>

// const data = {
//   name: 'jd',
//   age: 42
// };

// const another = {...data};

// console.log(another);