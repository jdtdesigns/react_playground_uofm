import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [title, setTitle] = useState('React Example');
  const [inputValue, setInputValue] = useState('');
  const [people, setPeople] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTitle(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const getStarwarsData = () => {
    fetch('https://swapi.dev/api/people')
      .then(res => res.json())
      .then(result => {
        setPeople(result.results);
      })
  }

  return (
    <main>
      <Header title={inputValue} />

      <form>
        <input onChange={handleInputChange} value={inputValue} type="text" placeholder="Input your name" />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>

      <ul>
        {people.length ? people.map((person, i) => (
          <li key={i}>{person.name}</li>
        )) : <p>No results yet.</p>}
      </ul>

      <button onClick={getStarwarsData}>Get Starwars Data</button>
    </main>
  );
}

export default App;














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