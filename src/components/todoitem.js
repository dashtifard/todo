import { observer } from "mobx-react";
import React, { Component } from "react";
import todoStore from "../stores/TodoStore";

@observer
class TodoItem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  };

  render() {
    const { todo } = this.props;
    return (
      <li class={todo.completed ? "completed" : ""} key={todo.id}>
        <div class="view">
          <input
            onChange={this.onToggle}
            class="toggle"
            type="checkbox"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button
            class="destroy"
            onClick={() => todoStore.removeTodo(todo.id)}
          ></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    );
  }
}

export default TodoItem;
