import throttle from 'lodash/throttle';
import { cancel, resize } from '../../actions';

export function handleKeyPress(e, dispatch) {
  if ((e.keyCode || e.which) === 27) {
    e.preventDefault();
    e.stopImmediatePropagation();
    dispatch(cancel());
  }
}

export function cleanup(refs) {
  // exiting, clear event listeners
  window.removeEventListener('keyup', refs.handle.keyup);
  window.removeEventListener('resize', refs.handle.resize);
}

export default function bindWindowEvents(refs) {
  refs.cleanup.push(() => cleanup(refs));

  const { handle } = Object.assign(refs, { handle: refs.handle || {} });

  handle.keyup = e => handleKeyPress(e, refs.store.dispatch);
  window.addEventListener('keyup', handle.keyup);

  handle.resize = throttle(() => refs.store.dispatch(resize()), 100);
  window.addEventListener('resize', handle.resize);
}
