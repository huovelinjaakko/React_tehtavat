import React from 'react';

export default function Todolist(props) {
    return(
        <div>
            <table>
                <tbody>
                <th>Description</th>
                <th>Date</th>
                {
                props.todos.map((todo, index) =>
                    <tr key={index}>
                    <td>{todo.desc}</td>
                    <td>{todo.date}</td>
                    </tr>
                )
                }
                </tbody>
            </table>
        </div>
    );
}