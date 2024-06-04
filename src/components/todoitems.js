import React, { Component } from "react";
import TodoItem from "./todoitem";
import { observer } from "mobx-react";
import todoStore from "../stores/TodoStore";

@observer
class TodoItems extends Component {
  render() {
    return (
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          {todoStore.getTodos().map((todo) => {
            return <TodoItem todo={todo} />;
          })}
        </ul>
      </section>
    );
  }
}

export default TodoItems;
