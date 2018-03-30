import moment from 'moment';

function parse(input, dateFormat) {
  if (arguments.length < 2) {
    throw new Error('Invalid arguments error: must supply input and dateFormat');
  }
  if (dateFormat === undefined || dateFormat === null) {
    throw new Error('Must supply valid dateFormat');
  }

  const result = moment(input, dateFormat, true);
  if (!result.isValid()) {
    throw new Error(`invalid date ${input} supplied`);
  }

  return result;
}

function iso8601Parse(input) {
  return parse(input, moment.ISO_8601);
}

function uiDateParse(input) {
  return parse(input, 'DD-MM-YYYY');
}

export default {
  parse,
  iso8601Parse,
  uiDateParse,
};
