import { useState, useEffect } from 'react';
import StarWars from './pages/StarWars';
import Landing from './pages/Landing';

function App() {
  const [logo, setTitle] = useState('React Overview');
  const [animals, setAnimals] = useState(['dog', 'cat', 'elephant']);
  const [swData, setSWData] = useState([]);


  const grabData = () => {
    fetch('https://swapi.dev/api/people')
      .then(res => res.json())
      .then(data => {
        setSWData(data.results);
      });
  };

  useEffect(grabData, []);

  return (
    <div>
      {animals.map((animal, index) => <p key={index}>{animal}</p>)}

      <h3>Starwars Data</h3>
      {/* {swData.map((char, index) => {
        return <p key={index}>{char.name}</p>
      })} */}


      <StarWars />
      <Landing />

    </div>
  );
}

export default App;
