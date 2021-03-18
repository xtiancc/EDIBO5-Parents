import React, { Component } from 'react'
import axios from "axios";

class TodoList extends Component {

  editDone = (id) => {
    const todo = this.props.todos.find( i => i.id === id);
    todo.done = true;

    axios.put(`http://localhost:8000/todos/${id}`, todo).then( r => {
      this.props.modifyList(r.data)
    });

  }

  deleteTodo = (id) => {
    axios.delete(`http://localhost:8000/todos/${id}`).then(
      this.props.removeOldTodo(id)
    )
  }

  render() {

    console.log("render")

    const todos = this.props.todos || [];

    return (
      <div className="todo-list">
        <ul>
          {todos.map((i) => (
            <li key={i.id}>
              {i.todo[0].toUpperCase() + i.todo.slice(1)} - 
              {i.done ? " Hecho ":" Pendiente "}
              {!i.done && <button onClick={() => this.editDone(i.id)}>Editar</button>} 
              <button onClick={() => this.deleteTodo(i.id)}>Borrar</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default TodoList
