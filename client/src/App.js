import { useState, useEffect } from 'react';
import Header from './components/Header';
import Image from './components/Image';

function App() {
  const [title, setTitle] = useState('React Example');
  const [inputValue, setInputValue] = useState('');
  const [people, setPeople] = useState([]);
  const [image_url] = useState('https://api.lorem.space/image/movie?w=150&h=220');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    getStarwarsData()
  }, []);

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

      <form>
        <input onChange={handleInputChange} value={inputValue} type="text" placeholder="Input your name" />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>

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