const initialState = {
  todo: []
}
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todo: [...state.todo, action.payload]
      }
      case 'DELETE_TODO':

        let todo = [...state.todo];
        todo.splice(action.payload, 1);
        return {
          ...state,
          todo: todo
        }
        case 'COMPLETED':
          let todos = [...state.todo];
          todos[action.payload.index].isCompleted = action.payload.isCompleted;
          return {
            ...state,
            todo: todos
          }
          default:
            return state
  }
}