import { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import Header from './components/Header';
import TodosDisplay from './pages/TodosDisplay';
import TodoForm from './pages/TodoForm';
import AuthForm from './pages/AuthForm';
import Protect from './components/Protect';
import { Routes, Route } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';

function App() {
  const [logo] = useState('React Overview');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user_data = isAuthenticated();

    if (user_data) setUser(user_data);
  }, []);

  return (
    <div>
      <Header logo={logo} user={user} />

      <Routes>
        <Route path="/" element={<Protect>
          <Landing user={user} />
        </Protect>} />
        <Route path="/auth-form" element={<Protect>
          <AuthForm setUser={setUser} />
        </Protect>} />

        <Route path="/todos" element={<Protect>
          <TodosDisplay />
        </Protect>} />
        <Route path="/todo-form" element={<Protect>
          <TodoForm />
        </Protect>} />
      </Routes>
    </div>
  );
}

export default App;
