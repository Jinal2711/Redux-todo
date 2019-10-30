import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';

class AddTodo extends Component {
  state = {
    inputText: ''
  }
  addTodo() {
    this.props.addTodo(this.state.inputText);
    this.setState({
      inputText: ''
    })
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="input-group mb-3">
          <input type="text" className="form-control"
            placeholder="Add Items..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={this.state.inputText}
            onChange={e => this.setState({ inputText: e.target.value })}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2" onClick={e => this.addTodo()}>Submit</span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todoReducer.todo
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)