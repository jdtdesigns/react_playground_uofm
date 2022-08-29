import { useState, useEffect } from 'react';
import StarWars from './pages/StarWars';
import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [logo, setTitle] = useState('React Overview');

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/starwars" element={<StarWars />} />
      </Routes>

    </div>
  );
}

export default App;
