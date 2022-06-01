import axios from 'axios';
import { ROOT_URL } from '../constants';

export const ActionTypes = {
  GET_INSTRUCTOR_STATUS: 'GET_INSTRUCTOR_STATUS',
};

export const getInstructorStatus = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ROOT_URL}/user/${userId}`);
      dispatch({ type: ActionTypes.GET_INSTRUCTOR_STATUS, payload: response.data.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
