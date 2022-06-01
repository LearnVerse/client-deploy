import { combineReducers } from '@reduxjs/toolkit';

import PartyReducer from './party-reducer';
import UserReducer from './user-reducer';

const rootReducer = combineReducers({
  partyState: PartyReducer,
  userState: UserReducer,
});

export default rootReducer;
