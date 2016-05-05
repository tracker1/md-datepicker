// import { getStyles } from '../style';

export default function createContainer(refs) {
  let outerContainer = document.getElementById('DatePickerModal');
  if (!outerContainer) {
    outerContainer = document.createElement('div');
    outerContainer.id = 'DatePickerModal';
    document.body.appendChild(outerContainer);
  }

  /*
  let styleEl = document.getElementById('DatePickerModalStyles');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.setAttribute('type', 'text/css');
    styleEl.id = 'DatePickerModalStyles';
    styleEl.innerText = getStyles();
    outerContainer.appendChild(styleEl);
  }
  */

  Object.assign(refs, { body: { overflow: document.body.style.overflow } });
  document.body.style.overflow = 'hidden';
  const container = document.createElement('div');
  container.id = `date-picker-modal-${refs.instance}`;
  container.className = 'dpm-container';
  outerContainer.appendChild(container);
  return container;
}
