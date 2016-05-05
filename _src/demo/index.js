/* global DatePickerModal */

import 'shared/style/bootstrap.scss';
import './index.scss';
const content = require('./index-body.html');
const c = window.console;

function handleResult(err, dtm) {
  if (err) return c.error(err);
  if (!dtm) return c.log('nothing picked');
  return c.log('picked', dtm);
}

function init() {
  const value = new Date();

  // September 15th of the previous year
  const min = new Date(value.getFullYear() - 1, 8, 15);

  // start of the year after next (end of coming year)
  const max = new Date(value.getFullYear() + 2, 0, 1);

  document.body.innerHTML = content;
  document.getElementById('test1').addEventListener(
    'click',
    () => DatePickerModal.date({
      monthsToShow: 2,
      value,
      min,
      max,
      checkDate: (dtm) => {
        // console.log('checkDate', dtm);
        if (dtm.getDay() === 5 && dtm.getDate() < 8) return false;
        return true;
      },
    }, handleResult)
  );
}

// start with init...
document.addEventListener('DOMContentLoaded', init);
