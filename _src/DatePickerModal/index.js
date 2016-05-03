import { Provider } from 'react-redux';
import createStoreInstance from './store';
import App from './feature/main';

let instance = 0;


function createContainer(refs) {
  const container = document.createElement('div');
  container.id = `date-picker-modal-${refs.instance}`;
  container.className = 'date-picker-modal-container';
  document.body.appendChild(container);
  return container;
}


function cleanup(refs, cb) {
  setTimeout(() => {
    if (refs.component) ReactDOM.render('', refs.container, refs.component);
    setTimeout(() => {
      if (refs.container) refs.container.parentNode.removeChild(refs.container);
      cb();
    }, 10);
  }, 50);
}


function bindStoreCallback(refs) {
  const unsub = refs.store.subscribe(() => {
    const state = refs.store.getState();
    if (state.error) {
      unsub();
      return cleanup(() => refs.callback(state.error));
    }
    if (state.result !== undefined) {
      unsub();
      return cleanup(() => refs.callback(state.result));
    }
  });
}


function renderComponent(refs) {
  return ReactDOM.render(
    <Provider store={refs.store}>
      <App />
    </Provider>
    ,refs.container
  );
}


function initialize(options, callback, type) {
  const refs = { callback, instance:++instance };
  try {
    refs.store = createStoreInstance(options, type);
    refs.container = createContainer(refs);
    refs.cancel = () => cleanup(this, () => callback(null, null));
    // handle final disposition
    bindStoreCallback(refs);
    refs.component = renderComponent(refs);
    return refs;
  } catch (err) {
    cleanup(refs, () => callback(err));
    return null;
  }
}


export const year = (options, callback) => initialize(options, callback, 'year');
export const month = (options, callback) => initialize(options, callback, 'month');
export const date = (options, callback) => initialize(options, callback, 'day');
export const datetime =
  (options, callback) => callback(new Error('Unsupported Option: time chooser'));
export const time =
  (options, callback) => callback(new Error('Unsupported Option: datetime chooser'));
export default { year, month, date, time, datetime };
