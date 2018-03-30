import {
  handleActions,
} from 'redux-actions';

import _ from 'lodash';

import {
  UPDATE_SHIFTS,
  DELETE_SHIFTS,
} from '../actions/sseActions';

import {
  INIT_SUCCESS,
} from '../actions/loginAction';

import {
  normalizeArray,
} from '../utils/common';

const shifts = handleActions({
  [INIT_SUCCESS]: (state, action) => ({
    ...state,
    ...normalizeArray(action.payload.shiftsPage.rotaShifts),
  }),
  [UPDATE_SHIFTS]: (state, action) => (
    action.payload.reduce((acc, item) => ({
      ...acc,
      [item.id]: { ...item },
    }), state)
  ),
  [DELETE_SHIFTS]: (state, action) => (
    action.payload
      .reduce((acc, id) => normalizeArray(_.filter(acc, item => item.id !== id)), state)
  ),
}, {});

export default shifts;

