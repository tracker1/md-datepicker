// import { getStyles } from '../style';
import getScrollbarWidth from 'lib/get-scrollbar-width';

export function cleanup(refs) {
  if (refs.documentElement) {
    document.documentElement.style.overflow = refs.documentElement.overflow || '';
    document.documentElement.style.paddingRight = refs.documentElement.paddingRight || '';
  }
  if (refs.component) ReactDOM.render('', refs.container, refs.component);
  if (refs.container) refs.container.parentNode.removeChild(refs.container);

  // remove outer context
  const outerContainer = document.getElementById('DatePickerModal');
  if (outerContainer) {
    const components = outerContainer.querySelectorAll('.dpm-container');
    if (!components.length) outerContainer.parentNode.removeChild(outerContainer);
  }
}

export default function createContainer(refs) {
  refs.cleanup.push(() => cleanup(refs));

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

  Object.assign(refs, {
    documentElement: {
      overflow: document.documentElement.style.overflow,
      paddingRight: document.documentElement.style.paddingRight,
    },
  });
  document.documentElement.style.overflow = 'hidden';
  document.documentElement.style.paddingRight = `${getScrollbarWidth()}px`;

  const container = document.createElement('div');
  container.id = `date-picker-modal-${refs.instance}`;
  container.className = 'dpm-container';
  outerContainer.appendChild(container);

  return container;
}
