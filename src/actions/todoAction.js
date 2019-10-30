export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: {
      text: text,
      isCompleted: true
    }
  }
}

export const deleteTodo = (index) => {
  return {
    type: 'DELETE_TODO',
    payload: index
  }
}

export const setCompleted = (index, isCompleted) => {
  return {
    type: 'COMPLETED',
    payload: {
      index,
      isCompleted
    }
  }
}