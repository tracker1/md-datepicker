import { Provider } from 'react-redux';
import App from '../feature/main';

export default function renderComponent(refs) {
  return ReactDOM.render(
    <Provider store={refs.store}>
      <App />
    </Provider>,
    refs.container
  );
}