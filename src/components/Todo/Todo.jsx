import { useState } from 'react'
import './todo.css'

function Todo() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')
  const [editIndex, setEditIndex] = useState(null)

  const handleAdd = () => {
    if (input.trim() === '') return
    if (editIndex !== null) {
      const updatedTasks = [...tasks]
      updatedTasks[editIndex] = input
      setTasks(updatedTasks)
      setEditIndex(null)
    } else {
      setTasks([...tasks, input])
    }
    setInput('')
  }

  const handleEdit = (index) => {
    setInput(tasks[index])
    setEditIndex(index)
  }

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter(task =>
    task.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="todo-card">
      <h2>To-Do App</h2>

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>{editIndex !== null ? 'Update' : 'Add'}</button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <div>
              <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
              <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo;