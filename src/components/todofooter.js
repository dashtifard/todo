import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class TodoFooter extends Component {
  state = {
    selectedElem: null
  }

  handleClick(key){
    this.setState({selectedElem:key})
    if (key==="all"){
      todoStore.filteredTodos()
    } else if (key==="active"){
      todoStore.filteredTodos(todo=>todo.completed===false)
    } else if (key==="completed"){
      todoStore.filteredTodos(todo=>todo.completed===true)
    } else {
      return;
    }
  }

  render() {
    return (
      <footer class="footer">
        <span class="todo-count">
          <strong>{todoStore.todoLength}</strong> item left
        </span>
        <ul class="filters">
          <li key="all" onClick={()=>this.handleClick("all")}>
            <a class={this.state.selectedElem==="all" && "selected"} href="#/">All</a>
          </li>
          <li key="active" onClick={()=>this.handleClick("active")}>
            <a class={this.state.selectedElem==="active" && "selected"} href="#/">Active</a>
          </li>
          <li key="completed" onClick={()=>this.handleClick("completed")}>
            <a class={this.state.selectedElem==="completed" && "selected"} href="#/">Completed</a>
          </li>
        </ul>
        <button class="clear-completed" onClick={todoStore.removeCompleted}>Clear completed</button>
      </footer>
    );
  }
}

export default TodoFooter;
