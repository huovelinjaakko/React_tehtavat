import React, { useState, useRef } from 'react';
import './App.css';
import { AgGridReact } from'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function App() {

  const [todo, setTodo] = useState({desc: '', date: '', priority: ''});
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((todo, index) => 
        index !== gridRef.current.getSelectedNodes()[0].childIndex))
    }
    else {
      alert('Select row first');
    }
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }
  
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const columns = [
    {headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true, animateRows: true},
    {headerName: 'Description', field: 'desc', sortable: true, filter: true, floatingFilter: true, animateRows: true},
    {headerName: 'Priority', field: 'priority', sortable: true, filter: true, floatingFilter: true, animateRows: true,
      cellStyle: params => params.value === "High" ? {color:'red'} : {color: 'black'}
    }
  ]

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        Date: <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
        Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
        Priority: <input type="text" name="priority" value={todo.priority} onChange={inputChanged}/>
        <input type="submit" value="Add"/>
      </form>
      <button onClick={deleteTodo}>Delete</button>
      <div className="ag-theme-material" 
        style={{
          width: '35%', 
          height: '700px',
          margin: 'auto'}}
          >
            <AgGridReact
              ref={gridRef}
              onGridReady={params => gridRef.current = params.api}
              rowSelection="single"
              animateRows={true}
              columnDefs={columns}
              rowData={todos}
              >
            </AgGridReact>
      </div>
    </div>
  );
}

export default App;
