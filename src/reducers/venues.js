import {
  handleActions,
} from 'redux-actions';
import _ from 'lodash';

import {
  normalizeArray,
} from '../utils/common';

import {
  UPDATE_VENUES,
  DELETE_VENUES,
} from '../actions/sseActions';

import {
  INIT_SUCCESS,
} from '../actions/loginAction';

const venues = handleActions({
  [INIT_SUCCESS]: (state, action) => ({
    ...state,
    ...normalizeArray(action.payload.shiftsPage.venues),
  }),
  [UPDATE_VENUES]: (state, action) => ({
    ...action.payload.reduce((acc, item) => ({
      ...acc,
      [item.id]: { ...item },
    }), state),
  }),
  [DELETE_VENUES]: (state, action) => (
    action.payload.reduce((acc, id) => normalizeArray(_.filter(acc, item => item.id !== id)), state)
  ),
}, {});

export default venues;
