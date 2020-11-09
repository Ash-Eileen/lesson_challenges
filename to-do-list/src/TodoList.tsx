import React from 'react'
import TodoListItem from './TodoListItem'

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

const TodoList: React.FC<Props> = ( { todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => {        
        return <TodoListItem key={index} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} index={index} />
      })}
    </ul>
  )
}

export default TodoList
