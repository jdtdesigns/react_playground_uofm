import { useState, useEffect } from 'react';
import Header from './components/Header';
import { DATABASES_QUERY } from './utils/queries';
import {
  useQuery,
  useMutation
} from '@apollo/client';

import UserForm from './components/UserForm';


function App() {
  const [title, setTitle] = useState('React Example');
  // const { error, data, loading } = useQuery(DATABASES_QUERY);

  return (
    <main>
      <Header title={title} />

      <UserForm />

      {/* {loading ? <p>Loading...</p> : (
        <ul>
          {data.getAll.map(db => (
            <li key={db._id}>{db.database_name}</li>
          ))}
        </ul>
      )} */}
    </main>
  );
}

export default App;



// function doesSomething() {
//   return ['orange', function () { console.log('hey, i am a function stored to this array') }];
//   // return { one: 'asdfdjsafl', two: 'asdfasdlfkj' };
// }

// const [adfsdfsadf, asdfsadfsdfsadfdsf] = doesSomething();

// console.log(one);

// two();



// const obj = {
//   name: 'jd',
//   age: 42
// };

// const {age, name} = obj;





// const names = ['andy', 'gunnar', 'logan'];

// const data = names.map((name) => {
//   return 'Student Name: ' + name;
// });

// console.log(data);


// const el = document.querySelector('#el');

// el.addEventListener('click', (event) => {

// })




// const fruits = ['apple', 'orange', 'grape'];
// const obj = { name: 'jd', age: 42 };
// const [one, two, three] = fruits;
// const { name } = obj;

// console.log(three);


// const count = 0;

// count++
// count--
// count += 1;
// count = 5;

// function setCount(operation) {
//   count = operation;
// }

// setCount(count + 1);