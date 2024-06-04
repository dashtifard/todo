import { observable, action, computed, autorun } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];
  @observable copiedTodos = [];
  @observable len = 0;
  lastID = 0;

  constructor(){
    autorun(()=>{
      this.copiedTodos = this.todos.slice();
    })
    this.removeCompleted = this.removeCompleted.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
  }

  @action
  copyTodos(){
    this.copiedTodos = this.todos.slice();
  }

  @action
  filteredTodos(filterCondition){
    if (filterCondition){
      this.copiedTodos = this.todos.filter(filterCondition).slice();
    } else {
      this.copiedTodos = this.todos.slice();
    }
  }

  removeCompleted() {
    this.copiedTodos = this.todos.filter(todo=>todo.completed===false).slice();
    this.todos.replace(this.copiedTodos);
  }

  @action
  removeTodo(key) {
    const index = this.todos.findIndex(todo=>todo.id===key);
    if (index !== -1) {
      const newArray = [...this.todos.slice(0, index), ...this.todos.slice(index + 1)];
      this.todos.replace(newArray);
    }
  }

  getTodos(){
    return this.copiedTodos;
  }

  @computed
  get todoLength(){
    return this.todos.length;
  }

}

const todoStore = new TodoStore();
export default todoStore;
