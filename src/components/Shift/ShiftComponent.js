import React from 'react';
import {
  View,
  Text,
  Image,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import safeMoment from '../../services/safeMoment';

import { NavScreen } from '../NavBar/TopNavScreen';
import styles from './style';
import * as constants from '../../utils/constants';
import { normalizeShifts } from '../../utils/common';
import { ErrorTracker } from '../../utils/error-tracker';

const mediumGray = require('../../../assets/icon-storefront-shifts-medium-gray.png');

function renderNoShift() {
  return (
    <View key="NoShift" style={styles.NoShifts} >
      <Text style={styles.loadMoreText}>You have no Shifts Currently Rotaed</Text>
    </View>
  );
}

const keyExtractor = (item, index) => index.toString();

function MonthSection({ month }) {
  return (
    <View style={styles.shiftMonthContainer}>
      <Text style={styles.textContainer}>{month}</Text>
    </View>
  );
}

export default class ShiftComponent extends React.Component {
  constructor(props) {
    super(props);
    const normalizedShifts = normalizeShifts(props.shifts);
    this.state = {
      rotaShiftArray: normalizedShifts.length === 0 ? [] : [normalizedShifts[0]],
      refreshing: false,
      allShifts: !(normalizedShifts.length > 1),
    };
  }

  getVenueName(id) {
    const venue = this.props.venueList[id];
    return venue ? venue.name : '';
  }

  componentWillReceiveProps(nextProps) {
    const normalizedShifts = normalizeShifts(nextProps.shifts);
    if (!this.state.allShifts) {
      this.setState({ rotaShiftArray: normalizedShifts.length === 0 ? [] : [normalizedShifts[0]] });
    } else {
      this.setState({ rotaShiftArray: normalizedShifts.length === 0 ? [] : normalizedShifts });
    }
  }

  renderShift(item, section, index) {
    const isLast = section.data.length === (index + 1);
    const startsAt = safeMoment.iso8601Parse(item.startsAt).format('ddd Do MMM k:mm');
    const endsAt = safeMoment.iso8601Parse(item.endsAt).format('k:mm');
    return (
      <View style={styles.rowViewStyle}>
        <View style={{ padding: 10, paddingBottom: 3, justifyContent: 'center' }}>
          <IIcon name="ios-time-outline" size={16} color="#154c7d" />
          { !isLast
              ? <View style={styles.vDivider} />
              : <View style={[styles.vDividerBlank]} />
          }
        </View>
        <View style={styles.shiftContainer}>
          <Text style={styles.textShitTime}>{`${startsAt} - ${endsAt}`}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 5 }}>
              <Image
                style={{ width: 14, height: 14 }}
                resizeMode="contain"
                source={mediumGray}
              />
            </View>
            <Text style={styles.textShitVenu}>{this.getVenueName(item.venueId)}</Text>
          </View>
        </View>
      </View>
    );
  }

  onRefreshList = () => {
    this.setState({ refreshing: true });
    return this.props.reloadShiftData().then(() => {
      this.setState({ refreshing: false });
    }).catch((error) => {
      this.props.screenProps.onGetTokenFailed();
      ErrorTracker.trackError(error);
    });
  }

  loadMoreShifts = () => {
    const allShifts = normalizeShifts(this.props.shifts);
    this.setState({ rotaShiftArray: allShifts, allShifts: true });
  }

  renderLoadMoreButton = () => {
    if (this.state.allShifts) {
      return null;
    }
    return (
      <View key="loadmore">
        <TouchableOpacity onPress={this.loadMoreShifts} style={styles.loadMoreBtn}>
          <Text style={styles.loadMoreText}>Load more ...</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <NavScreen banner="Shifts" navigation={this.props.navigation} />
        <SectionList
            key="shifts"
            sections={this.state.rotaShiftArray}
            renderSectionHeader={({ section }) => <MonthSection month={section.title} /> }
            keyExtractor={keyExtractor}
            renderItem={({ item, section, index }) => this.renderShift(item, section, index) }
            refreshing={this.state.refreshing}
            onRefresh={this.onRefreshList}
            renderSectionFooter={this.renderLoadMoreButton}
            ListEmptyComponent={renderNoShift}
          />
      </View>
    );
  }
}
