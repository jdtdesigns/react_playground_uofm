import { createContext, useContext, useState } from 'react';

const StoreContext = createContext();

export function StoreProvider(props) {
  const [state, setState] = useState({
    user: {
      username: 'JD',
      email: 'jd@test.com'
    },
    title: 'Amazing Playground'
  });

  return (
    <StoreContext.Provider value={{ state, setState }} {...props} />
  )
}

export const useStore = () => useContext(StoreContext);