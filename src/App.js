import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Buy some milk' },
      { id: 2, content: 'Play Mario Kart' }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteToDo={this.deleteTodo} todos={this.state.todos} />
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
