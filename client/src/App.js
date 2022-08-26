import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('Example Title');

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default App;
