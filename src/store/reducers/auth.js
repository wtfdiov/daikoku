import * as actionTypes from '../actionTypes';

const initialState = {
  userName: '',
  token: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        userName: action.userData.name,
        token: action.userData.token
      }
    default:
      return state;
  }
}

export default reducer;