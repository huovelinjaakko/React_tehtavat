import React, { useState } from 'react';

export default function Todolist(props) {

    const [id,setId] = useState('');

    const deleteFromList = (event) => {
        
        setId(event.currentTarget.id);
        console.log(id);
        props.todos.filter((todo, i) => todo !== id);
        // En saanut tätä toimimaan 
        console.log(props.todos);
    
      }

    return(
        <div>
            <table>
                <th>Description</th>
                <th>Date</th>
                <tbody>
                {
                props.todos.map((todo, index) =>
                    <tr key={index}>
                    <td>{todo.desc}</td>
                    <td>{todo.date}</td>
                    <td><button id={index} type="button" onClick={deleteFromList}>Delete</button></td>
                    </tr>
                )
                }
                </tbody>
            </table>
        </div>
    );
}