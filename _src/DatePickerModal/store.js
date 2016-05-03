import { createStore } from 'redux';
import reducer from './reducer';
import normalizeConfig from './feature/config';

export default function createStoreInstance(options = {}, type) {
  return createStore(reducer, normalizeConfig(options, type));
}
