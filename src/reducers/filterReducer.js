const initialState = {
  activeFilter: 'all'
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER': {
      return {
        ...state,
        activeFilter: action.payload
      }
    }
    default: return state
  }
}