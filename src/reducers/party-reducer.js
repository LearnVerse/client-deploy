/* eslint-disable no-param-reassign */
import { ActionTypes } from '../actions';

const initialState = {
  partyMembers: [],
  gameStarted: false,
  showVideo: false,
};

const PartyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_PARTY_MEMBERS:
      return { ...state, partyMembers: action.payload };
    case ActionTypes.START_GAME:
      return { ...state, gameStarted: action.payload };
    case ActionTypes.PLAY_VIDEO:
      return { ...state, showVideo: action.payload };
    default:
      return state;
  }
};

export default PartyReducer;
