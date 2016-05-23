import throttle from 'lodash/throttle';
import { cancel, resize } from '../../actions';

export function handleKeyPress(e, dispatch) {
  if ((e.keyCode || e.which) === 27) {
    e.preventDefault();
    e.stopImmediatePropagation();
    dispatch(cancel());
  }
}

export function cleanup(handle) {
  // exiting, clear event listeners
  window.removeEventListener('keyup', handle.keyup);
  window.removeEventListener('resize', handle.resize);
}

export default function bindWindowEvents(refs) {
  const handle = {};

  handle.keyup = e => handleKeyPress(e, refs.store.dispatch);
  window.addEventListener('keyup', handle.keyup);

  handle.resize = throttle(() => refs.store.dispatch(resize()), 100);
  window.addEventListener('resize', handle.resize);

  refs.cleanup.push(() => cleanup(handle));
}
