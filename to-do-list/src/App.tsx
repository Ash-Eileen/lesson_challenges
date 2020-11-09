import React, { useState } from 'react'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm'

function App() {
  const [todos, setTodos] = useState<Todo[] | undefined>(undefined)

  const toggleTodo = (selectedTodo: Todo) => {
    if (todos) {
      const newTodos = todos.map(todo => {
        if (todo === selectedTodo) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
      setTodos(newTodos);
    }
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = {text, complete: false}
    if (newTodo) { typeof todos !== 'undefined' ? setTodos([...todos, newTodo]) : setTodos([newTodo])}
  }  

  const deleteTodo: DeleteTodo = (todoIndex: number) => {
    if (typeof todos !== 'undefined') {
      const newTodos = todos.filter((todo, index) => index !== todoIndex)
      setTodos(newTodos)
    }
  }

  return (
    <>
    <h1>Hi. This app uses Typescript. Whoo.</h1>
    {todos && <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} /> }
    <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
