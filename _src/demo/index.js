import 'shared/style/bootstrap.scss';
import './index.scss';
const content = require('./index-body.html');

//start with init...
document.addEventListener('DOMContentLoaded', init);

function init() {
  document.getElementsByTagName('body')[0].innerHTML = content;
  
  document.getElementById('test1').addEventListener('click', () => DatePickerModal.date());
  
}
