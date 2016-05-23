import cleanup from './cleanup';

export default function bindStoreCallback(refs) {
  const unsub = refs.store.subscribe(() => {
    const state = refs.store.getState();

    if (state.result) {
      const [error, value] = state.result;
      unsub();
      cleanup(refs, () => refs.callback(error, value));
      return;
    }
  });
}
