/* global DatePickerModal */

import 'shared/style/bootstrap.scss';
import './index.scss';
const content = require('./index-body.html');
const c = window.console;

function handleResult(err, dtm) {
  if (err) return c.error(err);
  if (!dtm) return c.log('nothing picked');
  else c.log('picked', dtm);
  return null;
}

function init() {
  var value = new Date();
  var min = new Date(value.getFullYear() - 1, 8, 15); // September 15th of the previous year
  var max = new Date(value.getFullYear() + 2, 0, 1); // start of the year after next (end of coming year)
  
  document.body.innerHTML = content;
  document.getElementById('test1').addEventListener(
    'click',
    () => DatePickerModal.date({
      monthsToShow: 2,
      value,
      min,
      max,
      checkDate: (dtm) => {
        //console.log('checkDate', dtm);
        if (dtm.getDay() == 5 && dtm.getDate() < 8) return false;
        return true;
      },
    }, handleResult)
  );
}

// start with init...
document.addEventListener('DOMContentLoaded', init);
