import safeMoment from '../services/safeMoment';
import {
  INIT_SUCCESS,
  INIT_FAILED,
  RESET_INIT,
} from '../actions/loginAction';

import { UPDATE_SHIFTS, DELETE_SHIFTS } from '../actions/sseActions';

import { groupShifts, normalizeArray } from '../utils/common';

const initialState = {
  staffMemberId: '',
  error: false,
  status: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESET_INIT:
      return {
        ...state,
        staffMemberId: '',
        error: false,
        status: false,
      };
    case INIT_SUCCESS:
      return {
        ...state,
        staffMemberId: action.payload.profilePage.staffMemberId,
        error: false,
        status: true,
      };
    case INIT_FAILED:
      return {
        ...state,
        status: false,
        error: true,
      };
    default: return state;
  }
}
