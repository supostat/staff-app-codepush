import {
  handleActions,
} from 'redux-actions';

import {
  INIT_SUCCESS,
} from '../actions/loginAction';

import {
  UPDATE_PROFILES,
  DELETE_PROFILES,
} from '../actions/sseActions';

const staffMember = handleActions({
  [INIT_SUCCESS]: (state, action) => ({
    ...state,
    ...action.payload.profilePage.staffMember,
  }),
  [UPDATE_PROFILES]: (state, action) => ({
    ...state,
    ...action.payload.find(item => item.id === state.id),
  }),
  [DELETE_PROFILES]: (state, action) => {
    const isDeleted = action.payload.includes(state.id);
    return isDeleted ? null : state;
  },
}, {});

export default staffMember;
