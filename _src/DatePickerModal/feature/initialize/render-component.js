import { Provider } from 'react-redux';
import App from '../main';

export default function renderComponent(refs) {
  const ret = ReactDOM.render(
    <Provider store={refs.store}>
      <App />
    </Provider>,
    refs.container
  );
  refs.container.focus();
  return ret;
}
