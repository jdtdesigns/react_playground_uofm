import { gql, useQuery } from '@apollo/client';

const GET_TODOS = gql`
  query GetTodos {
    getTodos {
      _id
      todo_text
    }
  }  
`;

function TodosDisplay() {
  const { error, loading, data } = useQuery(GET_TODOS);

  return (
    <div>
      {error && <p className="error">{error.message}</p>}

      {loading && <p>Loading...</p>}

      {data && data.getTodos.map(todo => (
        <div key={todo._id}>
          <h3>{todo.todo_text}</h3>
        </div>
      ))}
    </div>
  )
}

export default TodosDisplay;