import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('Example Title');
  const [animals, setAnimals] = useState(['dog', 'cat', 'elephant']);

  return (
    <div>
      <h1>{title}</h1>
      {animals.map((animal, index) => <p key={index}>{animal}</p>)}
    </div>
  );
}

export default App;
