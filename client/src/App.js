import { useState } from 'react';
import BigButton from './components/BigButton';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function App() {
  // const [title, setTitle] = useState('Example Title');
  // const [animals, setAnimals] = useState(['dog', 'cat', 'elephant']);

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>




      {/* <h1>{title}</h1>
      {animals.map((animal, index) => <p key={index}>{animal}</p>)}

      <BigButton /> */}
    </div>
  );
}

export default App;
