import { useState } from 'react';
import BigButton from './components/BigButton';

function App() {
  const [title, setTitle] = useState('Example Title');
  const [animals, setAnimals] = useState(['dog', 'cat', 'elephant']);
  const [showButton, setShowButton] = useState(false);

  return (
    <div>
      <h1>{title}</h1>
      {animals.map((animal, index) => <p key={index}>{animal}</p>)}

      {showButton ? <BigButton title={title} /> : ''}
    </div>
  );
}

export default App;
