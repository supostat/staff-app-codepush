import React from 'react';
import { connect } from 'react-redux';
import ShiftComponent from './ShiftComponent';
import { reloadShiftData } from '../../actions/loginAction';
import { groupShifts, normalizeArray } from '../../utils/common';

function Shift(props) {
  return <ShiftComponent {...props} />;
}

function mapStateToProps(state) {
  const { venues, shifts } = state;
  const filteredShifts = Object.values(shifts)
    .filter(shift => Object.keys(venues).includes(shift.venueId.toString()));
  return {
    venueList: venues,
    shifts: groupShifts(normalizeArray(filteredShifts), venues),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reloadShiftData: () => dispatch(reloadShiftData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shift);
