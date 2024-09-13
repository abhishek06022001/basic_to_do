import React, { useState } from 'react'

function Item({ todo, handleInputChange, handleDelete, handleEdit }) {
  const { name, key } = todo;
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(todo.name);
  function handleInputChange(e) {
    setInput(e.target.value);
  }
  return (
    <div>

      <div key={key} className='flex items-baseline'>
        {(edit)
          ? <input value={input}
            onChange={handleInputChange}
            onBlur={(e) => handleEdit(input, key)} /> : <input value={input} readOnly />}

        <button onClick={() => handleDelete(key)} className='bg-blue-100 m-2 p-1 text-sm' >Delete</button>
        <button onClick={() => setEdit(true)} className='bg-blue-100 m-2 p-1 text-sm' >Edit</button>

      </div>
    </div>
  )
}

export default Item