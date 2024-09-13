import React from 'react';
import { useState } from 'react';
import Todo from './Item';
import Item from './Item';
function App() {
  const [toDos, setToDos] = useState([]);
  const [todo, setTodo] = useState({});

  function CreateTodo(e) {
    setToDos([...toDos, { name: todo.name, key: `${Math.random()}` }]);
    setTodo({ name: '' })
  }
  function handleInputChange(e) {
    setTodo({
      name: e.target.value
    });
  }
  function handleEdit(input, key) {

    const newArray = toDos.map((todo) => {
      if (todo.key == key) {
        const newtodo = { ...todo };
        newtodo.name = input;
        return newtodo;
      } else {
        return todo;
      }
    })
    setToDos(newArray);
  }
  function handleDelete(key) {
    const newArray = toDos.filter((todo) => {
      return (todo.key !== key);
    })
    setToDos(newArray);
  }
  return (
    <>
      <div className='todo'>
        <h1 className='text-3xl text-center font-bold border-2 p-2'> To do application</h1>
        <div class="flex flex-col items-center pt-5   border-2  ">
          <div>
            <input type="text" placeholder='Name of Todo' className='bg-slate-100 text-sm p-1'
              id='create_todo'
              onChange={handleInputChange}
              value={todo.name}
            />
            <button class="bg-blue-500 text-white text-sm py-1 px-1 "
              onClick={CreateTodo}
            >
              Create ToDo
            </button>
          </div>
          <div>
            {toDos.map((todo) => {
              return <Item key={todo.key} todo={todo} handleInputChange={handleInputChange} handleDelete={handleDelete}
                handleEdit={handleEdit}
              >  </Item>


            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default App