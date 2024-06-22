import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      tasks: [
        {
          isChecked: false,
          title: "Title 1",
          id: 0,
        },
      ],
    };
  }

  handleSave = () => {
    if (this.inputRef.current.value === "") return;
    const newTask = {
      title: this.inputRef.current.value,
      id: crypto.randomUUID(),
      isChecked: false,
    };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
    this.inputRef.current.value = "";
  };

  toggleCheck = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      ),
    }));
  };

  render() {
    console.log("Hi from render");
    return (
      <>
        <h1>TODO LIST</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleSave}>Add Task</button>
        <ol>
          {this.state.tasks.map((element) => (
            <li key={element.id}>
              <TodoItem
                {...element}
                toggleCheck={() => this.toggleCheck(element.id)}
              />
            </li>
          ))}
        </ol>
      </>
    );
  }
}


