import { SET_ALERT, REMOVE_ALERT } from '../types';



export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      //we return an array cause were using arr
      return [
        ...state,
        action.payload
      ]

    case REMOVE_ALERT:
      // filter out by id
      return state.filter(alert => alert.id !== action.payload)

    default:
      return state;
  }
}






