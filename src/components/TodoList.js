import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, setCompleted } from '../actions/todoAction';
class TodoList extends Component {
  setCompleted(e, index) {
    debugger;
    this.props.completed(index, e.target.checked);
  }
  render() {
    let filteredTodos = this.props.todos;
    let activeFilter = this.props.activeFilter;
    if (activeFilter != 'all') {
      filteredTodos = filteredTodos.filter(todo => todo.isCompleted == (activeFilter == 'completed'))
    }
    return (
      <div className="container">
        <ul className="list-group">
          {filteredTodos.map((todo, index) => {
            return (
              <li key={index} className="lst-group-item d-flex justify-content-between list-group-item list-group-item-primary">

                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" onChange={e => this.setCompleted(e, index)} checked={todo.isCompleted} name="example2" />
                  <label className="custom-control-label">{todo.text}</label>
                </div>
                <button type="button" className="btn btn-danger" onClick={() => this.props.removeItem(index)}>Delete</button>
              </li>
            )
          })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todo,
  activeFilter: state.filterReducer.activeFilter
})

const mapDispatchToProps = (dispatch) => ({
  removeItem: (index) => dispatch(deleteTodo(index)),
  completed: (index, isCompleted) => dispatch(setCompleted(index, isCompleted))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);