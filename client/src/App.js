import { useState, useEffect } from 'react';
import Header from './components/Header';
import Image from './components/Image';
import {
  useQuery,
  useMutation,
  gql
} from '@apollo/client';

const DATABASES_QUERY = gql`
  query Databases {
    getAll {
      _id
      database_name
    }
  }
`;

const ADD_DATABASE = gql`
  mutation addDatabase($database_name: String!) {
    addDatabase(database_name: $database_name) {
      _id
      database_name
    }
  }
`;

function App() {
  const [title, setTitle] = useState('React Example');
  const [nameValue, setInputValue] = useState('');
  const [people, setPeople] = useState([]);
  const [image_url] = useState('https://api.lorem.space/image/movie?w=150&h=220');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([]);
  const { loading, error, data } = useQuery(DATABASES_QUERY);
  const [addDatabase, { loading: dbLoading, error: dbError, data: dbData }] = useMutation(ADD_DATABASE);


  // useEffect(() => {
  //   getStarwarsData()
  // }, []);

  const handleAddDatabase = (event) => {
    event.preventDefault();
    addDatabase({
      variables: {
        database_name: nameValue
      }
    })
  };

  const handleNameChange = (event) => {
    setInputValue(event.target.value);
  };

  const getStarwarsData = () => {
    fetch('https://swapi.dev/api/people')
      .then(res => res.json())
      .then(result => {
        setPeople(result.results);
        setIsLoggedIn(true);
      })
  }

  const addItem = () => {
    const item = {
      completed: false,
      eagerness: 'high'
    };

    setItems([...items, item])
  }


  return (
    <main>
      <Header isLoggedIn={isLoggedIn} title={title} />

      <Image image_url={image_url} title={title} />

      {error ? <p>{error}</p> : loading ? <p>Database query is loading...</p> : (
        <ul>
          {data.getAll.map(db => (
            <li key={db._id}>{db.database_name}</li>
          ))}
        </ul>
      )}

      <form>
        <input onChange={handleNameChange} value={nameValue} type="text" placeholder="Type the database name" />
        <button onClick={handleAddDatabase}>Submit</button>
      </form>

      {dbData && (
        <div>
          <p>ID: {dbData.addDatabase._id}</p>
          <p>Database Name: {dbData.addDatabase.database_name}</p>
        </div>
      )}

      <ul>
        {people.length ? people.map((person, i) => (
          <li key={i}>{person.name}</li>
        )) : <p>Loading...</p>}
      </ul>

      <div className="column">
        <button onClick={() => setTitle('title changed')}>Change Title</button>

        <button onClick={getStarwarsData}>Get Starwars Data</button>

        <button onClick={addItem}>Add Item</button>
      </div>
    </main>
  );
}

export default App;







// const obj = {
//   name: 'jd',
//   age: 42
// };

// const {name: data_name, age: person_age, blah} = obj;





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