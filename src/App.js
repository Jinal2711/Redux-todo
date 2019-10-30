import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterTodo from './components/Filter';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { todoReducer } from './reducers/todoReducer';
import { filterReducer } from './reducers/filterReducer';

let store = createStore(combineReducers({ todoReducer, filterReducer }))

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <AddTodo />
        <TodoList />
        <FilterTodo />
      </div>
    </Provider>
  );
}

export default App;
