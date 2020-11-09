import React, {useState} from 'react'

interface Props {
  addTodo: AddTodo
}

const AddTodoForm: React.FC<Props> = ( {addTodo} ) => {
  const [newTodo, setNewTodo] = useState('')

  return (
    <form>
      <input type="text" value={newTodo} onChange={e => {setNewTodo(e.target.value)}} />
      <button type="submit" onClick={e => {
        e.preventDefault();
        addTodo(newTodo)
        setNewTodo('')
      }}>Add Todo</button>
    </form>
  )
}

export default AddTodoForm
