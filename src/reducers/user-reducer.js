/* eslint-disable no-param-reassign */
import { ActionTypes } from '../actions';

const initialState = {
  isInstructor: false,
};

const UserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_INSTRUCTOR_STATUS:
      return { ...state, isInstructor: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
