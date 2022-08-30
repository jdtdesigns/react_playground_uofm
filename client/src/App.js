import { useState, useEffect } from 'react';
import StarWars from './pages/StarWars';
import Landing from './pages/Landing';
import Header from './components/Header';
import TodosDisplay from './pages/TodosDisplay';
import { Routes, Route } from 'react-router-dom';



function App() {
  const [logo, setTitle] = useState('React Overview');

  return (
    <div>
      <Header logo={logo} />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/starwars" element={<StarWars />} />
        <Route path="/todos" element={<TodosDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
