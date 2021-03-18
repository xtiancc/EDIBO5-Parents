import React, { Component } from "react";
import axios from "axios";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
    };
  }

  createTodo = () => {
    const newTodoObject = {
      todo: this.state.newTodo,
      author: "alfonso",
      done: false,
    };
    axios
      .post("http://localhost:8000/todos", newTodoObject)
      .then((res) =>
        this.props.addTodo(res.data)
      )
      .catch(console.error);
  };

  onChangeInput = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  render() {
    return (
      <div className="todo-form">
        <input
          type="text"
          onChange={(e) => this.onChangeInput(e)}
          value={this.state.newTodo}
        ></input>
        <button onClick={this.createTodo}>Grabar</button>
      </div>
    );
  }
}

export default TodoForm;
