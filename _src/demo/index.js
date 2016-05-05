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
  document.body.innerHTML = content;
  document.getElementById('test1').addEventListener(
    'click',
    () => DatePickerModal.date({
      monthsToShow: 2,
      min: new Date(2015, 8, 20),
      max: new Date(2018, 0, 1),
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
