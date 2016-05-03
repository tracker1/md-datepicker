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
    () => DatePickerModal.date({},handleResult)
  );
}

//start with init...
document.addEventListener('DOMContentLoaded', init);
