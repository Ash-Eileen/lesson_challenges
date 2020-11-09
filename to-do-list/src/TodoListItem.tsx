import React from 'react'

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
  index: number;
}

const TodoListItem: React.FC<Props> = ({todo, toggleTodo, deleteTodo, index}) => {
  return (
    <li>
      <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
        <input type="checkbox" checked={todo.complete} onClick={() => {toggleTodo(todo)}}/>       
        {todo.text}
        <button onClick={e => {
          deleteTodo(index)
          }
        }
        >Delete</button>
      </label>
    </li>
  )
}

export default TodoListItem
