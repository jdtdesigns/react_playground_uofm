import { useState, useEffect } from 'react';
import BigButton from './components/BigButton';
import StarWars from './pages/StarWars';

function App() {
  const [title, setTitle] = useState('Example Title');
  const [animals, setAnimals] = useState(['dog', 'cat', 'elephant']);
  const [showButton, setShowButton] = useState(true);
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
      <h1>{title}</h1>
      {animals.map((animal, index) => <p key={index}>{animal}</p>)}

      {showButton ? <BigButton grabData={grabData} title={title} /> : ''}
      <h3>Starwars Data</h3>
      {/* {swData.map((char, index) => {
        return <p key={index}>{char.name}</p>
      })} */}

      <StarWars />

    </div>
  );
}

export default App;
