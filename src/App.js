import "./App.css";
import { Component } from "react";
import AddTaskForm from "./AddTaskForm/AddTaskForm";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  onAddTask(task) {
    console.log('App.js:', task);
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  onDeleteTask(index) {
    console.log(this.state.tasks)
    console.log(index);
    this.setState({
      tasks: this.state.tasks.filter((task, i) => i !== index)
    });
  }


  render() {
    return (
      <div className="App">
        <AddTaskForm onAddTask={this,this.onAddTask.bind(this)} />
        <hr />
        <ul>
          {this.state.tasks.map((task, index) => {
            return (
            <li key={index}>
              {task}
              <button onClick={this,this.onDeleteTask.bind(this, index)}>X</button>
            </li>);
          })}
        </ul>
      </div>
    );
  }
}

export default App;
