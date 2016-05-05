import cleanup from './cleanup';

export default function bindStoreCallback(refs) {
  const unsub = refs.store.subscribe(() => {
    const state = refs.store.getState();
    window.console.log('listener', state);
    if (state.error) {
      unsub();
      return cleanup(refs, () => refs.callback(state.error, null));
    }
    if (state.result) {
      unsub();
      return cleanup(refs, () => refs.callback(null, state.result === -1 ? null : state.result));
    }
    return null;
  });
}
