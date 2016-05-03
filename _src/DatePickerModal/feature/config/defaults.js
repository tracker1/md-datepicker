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
  screen: {
    /*
    Current Screen:
      choose-year, choose-month, choose-date, choose-time

    Null will be set based on initial type.
    */
    current: null,

    // date parts, (int), defaults to current year, or min date, whichever is greater.
    year: null,
    month: null,
    date: null,
    hour: null,
    minute: null,
  },

  // styles
  style: {
    wrap: {
      outer: {
        display: 'table',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        minWidth: '1vw',
        minHeight: '1vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      inner: {
        display: 'table-cell',
        top: 0,
        left: 0,
        width: '1vw',
        height: '1vh',
        overflow: 'auto',
        align: 'center',
        verticalAlign: 'middle',
      },
    },
    choose: {
      fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
      fontSize: '16px',
      backgroundColor: '#fff',
      boxShadow: '2px 2px 3px 3px rgba(0,0,0,0.4)',
    },
  },
});
