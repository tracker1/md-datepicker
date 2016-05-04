import cleanup from './cleanup';

export default function bindStoreCallback(refs) {
  const unsub = refs.store.subscribe(() => {
    const state = refs.store.getState();
    if (state.hasOwnProperty('error')) {
      unsub();
      return cleanup(refs, () => refs.callback(state.error, null));
    }
    if (state.hasOwnProperty('result')) {
      unsub();
      return cleanup(refs, () => refs.callback(null, state.result));
    }
    return null;
  });
}