import { createAction } from 'redux-actions';
import oFetch from 'o-fetch';

export const UPDATE_SHIFTS = 'UPDATE_SHIFTS';
export const UPDATE_PROFILES = 'UPDATE_PROFILES';
export const UPDATE_VENUES = 'UPDATE_VENUES';
export const DELETE_SHIFTS = 'DELETE_SHIFTS';
export const DELETE_PROFILES = 'DELETE_PROFILES';
export const DELETE_VENUES = 'DELETE_VENUES';

export const updateShifts = createAction(UPDATE_SHIFTS);
export const updateProfiles = createAction(UPDATE_PROFILES);
export const updateVenues = createAction(UPDATE_VENUES);
export const deleteProfiles = createAction(DELETE_PROFILES);
export const deleteShifts = createAction(DELETE_SHIFTS);
export const deleteVenues = createAction(DELETE_VENUES);

function mapActions(entities, actions, dispatch) {
  Object.keys(entities).map(entity => actions[entity](entities[entity], dispatch));
}

const shiftPageDeleteActions = {
  rotaShifts: (ids, dispatch) => dispatch(deleteShifts(ids)),
  venues: (ids, dispatch) => dispatch(deleteVenues(ids)),
};

const shiftPageUpdateActions = {
  rotaShifts: (data, dispatch) => dispatch(updateShifts(data)),
  venues: (data, dispatch) => dispatch(updateVenues(data)),
};

const profilePageUpdateActions = {
  staffMembers: (data, dispatch) => dispatch(updateProfiles(data)),
};

const profilePageDeleteActions = {
  staffMembers: (ids, dispatch) => dispatch(deleteProfiles(ids)),
};

export const updateDataAction = data => (dispatch) => {
  if (!data) {
    return;
  }

  const shiftsPageUpdates = oFetch(data, 'shiftsPage.updates');
  const shiftsPageDeletes = oFetch(data, 'shiftsPage.deletes');
  const profilePageUpdates = oFetch(data, 'profilePage.updates');
  const profilePageDeletes = oFetch(data, 'profilePage.deletes');
  mapActions(shiftsPageUpdates, shiftPageUpdateActions, dispatch);
  mapActions(profilePageUpdates, profilePageUpdateActions, dispatch);
  mapActions(shiftsPageDeletes, shiftPageDeleteActions, dispatch);
  mapActions(profilePageDeletes, profilePageDeleteActions, dispatch);
};
