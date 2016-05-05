/* global DatePickerModal */

import 'shared/style/bootstrap.scss';
import './index.scss';
const content = require('./index-body.html');

function handleResult(err, dtm) {
  if (err) {
    return window.console.log('RESULT ERROR:', err);
  }
  if (!dtm) {
    return window.console.log('RESULT: No Selection');
  }
  return window.console.log('RESULT:', dtm);
}

function openTest1() {
  const value = new Date();

  // September 15th of the previous year
  const min = new Date(value.getFullYear() - 1, 8, 15);

  // start of the year after next (end of coming year)
  const max = new Date(value.getFullYear() + 2, 0, 1);

  const options = {
    monthsToShow: 2,
    value,
    min,
    max,
    checkDate: (dtm) => {
      // console.log('checkDate', dtm);
      if (dtm.getDay() === 5 && dtm.getDate() < 8) return false;
      return true;
    },
  };

  DatePickerModal.date(options, handleResult)
}

function init() {
  document.body.innerHTML = content;
  document.getElementById('test1').addEventListener('click', openTest1);
}

// start with init...
document.addEventListener('DOMContentLoaded', init);
