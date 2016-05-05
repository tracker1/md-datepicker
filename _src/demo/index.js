/* global DatePickerModal */

import 'shared/style/bootstrap.scss';
import './index.scss';
const content = require('./index-body.html');
const c = window.console;

function handleResult(err, dtm) {
  if (err) return c.error(err);
  if (!dtm) return c.log('nothing picked');
  return null;
}

function init() {
  document.body.innerHTML = content;
  document.getElementById('test1').addEventListener(
    'click',
    () => DatePickerModal.date({
      chooseDate: { months: 3 },
      min: new Date(2016, 9, 12),
      max: new Date(2018, 0, 1),
    }, handleResult)
  );
}

// start with init...
document.addEventListener('DOMContentLoaded', init);
