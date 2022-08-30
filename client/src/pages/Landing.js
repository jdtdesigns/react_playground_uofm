import { useStore } from '../store';

function Landing() {
  const { state: { user } } = useStore();

  return (
    <div>
      <h1>Welcome Guest!</h1>

      <h3>{user.username}</h3>
    </div>
  )
}

export default Landing;