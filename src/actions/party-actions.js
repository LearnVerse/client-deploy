import axios from 'axios';
import { ROOT_URL } from '../constants';

export const ActionTypes = {
  GET_PARTY_MEMBERS: 'GET_PARTY_MEMBERS',
  START_GAME: 'START_GAME',
  PLAY_VIDEO: 'PLAY_VIDEO',
};

export const createParty = (name, game, numPlayers, navigate) => {
  return async () => {
    try {
      const response = await axios.post(`${ROOT_URL}/party/create`, { name, game, numPlayers });
      localStorage.setItem('partyId', response.data.data.partyId);
      localStorage.setItem('userId', response.data.data.userId);
      localStorage.setItem('addresses', response.data.data.addresses);
      localStorage.setItem('isInstructor', true);
      navigate(`/room/${game}/${response.data.data.partyId}`);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const joinPartyAsStudent = (partyId, name, game, navigate) => {
  return async () => {
    try {
      const response = await axios.post(`${ROOT_URL}/party/${partyId}/joinPartyAsStudent`, { name });
      localStorage.setItem('partyId', partyId);
      localStorage.setItem('userId', response.data.data.userId);
      localStorage.setItem('address', response.data.data.address);
      localStorage.setItem('isInstructor', false);
      navigate(`/room/${game}/${partyId}`);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const getAllPartyMembers = (partyId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ROOT_URL}/party/${partyId}/getAllMembers`);
      dispatch({ type: ActionTypes.GET_PARTY_MEMBERS, payload: response.data.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const getPartyGame = (partyId) => {
  return async () => {
    try {
      const response = await axios.get(`${ROOT_URL}/party/${partyId}`);
      return response.data.data.game;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const getPartyStatus = (partyId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ROOT_URL}/party/${partyId}`);
      if (response) {
        dispatch({ type: ActionTypes.START_GAME, payload: response.data.data.playing });
        dispatch({ type: ActionTypes.PLAY_VIDEO, payload: response.data.data.playVideo });
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const startGame = (partyId) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(`${ROOT_URL}/party/${partyId}`, { attribute: 'playing', value: true });
      if (response) dispatch({ type: ActionTypes.START_GAME, payload: true });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const playVideo = (partyId) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(`${ROOT_URL}/party/${partyId}`, { attribute: 'playVideo', value: true });
      if (response) dispatch({ type: ActionTypes.PLAY_VIDEO, payload: true });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const stopVideo = (partyId) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(`${ROOT_URL}/party/${partyId}`, { attribute: 'playVideo', value: false });
      if (response) dispatch({ type: ActionTypes.PLAY_VIDEO, payload: false });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
