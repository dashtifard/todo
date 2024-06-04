import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import TodoEntry from "./components/todoentry";
import Footer from "./components/footer";
import TodoItems from "./components/todoitems";
import TodoFooter from "./components/todofooter";

@observer
class App extends Component {
  render() {
    return [
      <section class="todoapp">
        <TodoEntry />
        <TodoItems />
        <TodoFooter />
      </section>,
      <Footer />,
    ];
  }
}

export default App;
