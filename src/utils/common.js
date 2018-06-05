import _ from 'lodash';
import moment from 'moment';
import safeMoment from '../services/safeMoment';

export function normalizeArray(array, key = 'id') {
  return array.reduce((acc, item) => ({
    ...acc,
    [item[key]]: item,
  }), {});
}

export function groupShifts(shifts) {
  const yearGrouped = _.groupBy(shifts, (item) => {
    const date = safeMoment.uiDateParse(item.date);
    return `${date.year()}`;
  });

  return _.reduce(yearGrouped, (total, year, yearKey) => {
    const monthGrouped = _.groupBy(year, (item) => {
      const date = safeMoment.uiDateParse(item.date);
      return `${date.isoWeek()}`;
    });
    total[yearKey] = monthGrouped;

    return total;
  }, {});
}

export function isValidURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?' + // port
  '(\\/[-a-z\\d%@_.~+&:]*)*' + // path
  '(\\?[;&a-z\\d%@_.,~+&:=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  if (!pattern.test(str)) {
    return false;
  }
  return true;
}

export function reverseKeys(object) {
  try {
    return Object.keys(object)
      .map(item => parseInt(item)).reverse();
  } catch (err) {
    throw new Error(err);
  }
}

export function normalizeShifts(groupedShifts) {
  const sortedYears = reverseKeys(groupedShifts);
  return _.reduce(sortedYears, (total, yearKey) => {
    const year = groupedShifts[yearKey];
    const sortedWeeks = reverseKeys(year);
    const totalYear = _.map(sortedWeeks, (weekYear) => {
      const monday = moment(year[weekYear][0].date, 'DD-MM-YYYY').isoWeekday(1);
      const sunday = moment(year[weekYear][0].date, 'DD-MM-YYYY').isoWeekday(7);
      return {
        data: year[weekYear].slice().sort((a, b) => safeMoment.iso8601Parse(a.startsAt) - safeMoment.iso8601Parse(b.startsAt)),
        title: `${monday.format('D MMM')} - ${sunday.format('D MMM')} ${yearKey}`,
      };
    });
    return [...total, ...totalYear];
  }, []);
}