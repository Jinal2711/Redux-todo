import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions/todoAction';
import { setFilter } from '../actions/filterAction';

class FilterTodo extends Component {


  render() {
    return (
      <div className="FilterTodo container">
        <button type="button" className="btn btn-primary" onClick={() => this.props.setFilter("all")}>All</button>
        <button type="button" className="btn btn-success" onClick={() => this.props.setFilter("active")}>Active</button>
        <button type="button" className="btn btn-warning" onClick={() => this.props.setFilter("completed")}>Completed</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todoReducer.todo
})

const mapDispatchToProps = (dispatch) => ({
  setFilter: (value) => dispatch(setFilter(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo)