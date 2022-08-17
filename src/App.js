import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [task, setTask] =useState(data)
  console.log(task);
  let newPeople
  function onClose(id) {
    newPeople = task.filter((person)=> person.id !== id)
    setTask(newPeople);
  }
   return (
    <main>
      <div className='container'>
        <h3>{task.length} Orders ready to be delivered</h3>
        <List
        task ={task}
        onClose={onClose}
          />
        <button className='clearBtn' onClick={()=> setTask([])}>Delivered All</button>
      </div>
    </main>
  )
}

export default App;
