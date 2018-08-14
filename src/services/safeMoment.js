import moment from 'moment-timezone';

const LONDON_TZ = 'Europe/London';

function parse(input, dateFormat, tz) {
  if (arguments.length < 2) {
    throw new Error('Invalid arguments error: must supply input and dateFormat');
  }
  if (dateFormat === undefined || dateFormat === null) {
    throw new Error('Must supply valid dateFormat');
  }
  let result;
  if (tz) {
    result = moment.tz(input, dateFormat, true, tz);
  } else {
    result = moment(input, dateFormat, true);
  }

  if (!result.isValid()) {
    throw new Error(`invalid date ${input} supplied`);
  }

  return result;
}

function iso8601Parse(input) {
  return parse(input, moment.ISO_8601).tz(LONDON_TZ);
}

function uiDateParse(input) {
  return parse(input, 'DD-MM-YYYY', LONDON_TZ);
}

function parseMilliseconds(input) {
  if (isNaN(input) || !Number.isInteger(input)) {
    throw new Error(`invalid milliseconds ${input} supplied`);
  }
  return moment.tz(input, LONDON_TZ);
}

export default {
  parse,
  iso8601Parse,
  uiDateParse,
  parseMilliseconds,
  current: () => moment.tz(moment(), LONDON_TZ),
  currentISOString: () =>
    `${moment
      .tz(moment(), LONDON_TZ)
      .toISOString()
      .split('.')[0]}Z`,
};
