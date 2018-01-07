import React, { Component } from 'react';
import TodoList from './TodoList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      item: ''
    }

		this.updateItem = this.updateItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  render() {
    return (
      <div className="todo">
        <h2>TODO</h2>
        <form onSubmit={this.addItem}>
          <input onChange={this.updateItem} value={this.state.item}/>
					<br/>
					<button className="add-item">Add #{this.state.todoList.length + 1}</button>
        </form>
				<TodoList deleteItem={this.deleteItem} list={this.state.todoList}/>
      </div>
    );
  }

	updateItem(event) {
		this.setState({ item: event.target.value });
	}

	addItem(event) {
		event.preventDefault();
		if (!this.state.item.length) {
			return;
		}

		const newItem = {
			text: this.state.item,
			id: Date.now()
		}
		this.setState(prevState => ({ todoList: prevState.todoList.concat(newItem), item: '' }));
	}

	deleteItem(id) {
		const indexToRemove = this.state.todoList.findIndex(item => item.id === id);

		if (indexToRemove !== undefined) {
			this.setState(prevState => {
				prevState.todoList.splice(indexToRemove, 1);
				return prevState;
			});
		}
	}
}

export default Todo;
