import createStoreInstance from '../../store';
import createContainer from './create-container';
import cleanup from './cleanup';
import bindStoreCallback from './bind-store';
import renderComponent from './render-component';
import bindWindowEvents from './window-events';

let instance = 0;

export default function initialize(options, callback, type) {
  let refs;
  try {
    ++instance;
    refs = { callback, instance, cleanup: [] };
    refs.store = createStoreInstance(options, type);
    refs.container = createContainer(refs);
    refs.cancel = () => cleanup(refs, () => callback(null, null));
    bindWindowEvents(refs);
    bindStoreCallback(refs);
    refs.component = renderComponent(refs);
    return refs;
  } catch (err) {
    cleanup(refs, () => callback(err));
    return null;
  }
}
