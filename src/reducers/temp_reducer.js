import * as types from 'actions/type'

const INITIAL_STATE = {
  isLoading: false,
  foods: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_REQUEST:
      return { ...state, foods: INITIAL_STATE.foods, isLoading: true }
    case types.GET_SUCCESS: {
      const { foods } = action.payload
      return { ...state, foods, isLoading: false } }
    case types.GET_FAILURE:
      return { ...state, foods: INITIAL_STATE.foods, isLoading: false }
    default:
      return { ...state, isLoading: false }
  }
}
