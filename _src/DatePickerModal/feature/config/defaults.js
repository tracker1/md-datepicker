// get current default minimum date
export const min = new Date(1880, 0, 1, 0, 0, 0, 0);

export function getMax() {
  const ret = new Date();
  ret.setFullYear(ret.getFullYear() + 100);
  return ret;
}

export default () => ({
  /*
  Valid Types:
        date, year, month, datetime, time
        todo: datetime, time
  */
  type: 'date',

  // (Date) currently selected date - will use current, but unselected when null
  value: null,

  // (Date) minimum allowed date/time - default 1/1/1880
  min,

  // ()
  max: getMax(),

  chooseYear: null, // future use
  chooseMonth: null, // future use
  chooseDate: {
    months: 1, // int 1-3
  },

  // Initial Screen Details
  current: {
    /*
    Current Screen:
      choose-year, choose-month, choose-date, choose-time

    Null will be set based on initial type.
    */
    screen: null,

    // date parts, (int), defaults to current year, or min date, whichever is greater.
    year: null,
    month: null,
    date: null,
    hour: null,
    minute: null,
  },
});