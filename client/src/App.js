import { useState, useEffect } from 'react';
import StarWars from './pages/StarWars';
import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [logo, setTitle] = useState('React Overview');
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
      <h3>Starwars Data</h3>
      {swData.map((char, index) => {
        return <p key={index}>{char.name}</p>
      })}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/starwars" element={<StarWars />} />
      </Routes>

    </div>
  );
}

export default App;
