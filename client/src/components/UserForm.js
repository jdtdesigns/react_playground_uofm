import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

function UserForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [addUser, { data }] = useMutation(ADD_USER);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    addUser({ variables: formData });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {data && (
        <div>
          <h2>Submitted User Email: {data.addUser.email}</h2>
        </div>
      )}

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