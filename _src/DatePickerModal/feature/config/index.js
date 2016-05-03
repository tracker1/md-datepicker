import getDefault from './defaults';
import style from './style';

export default function normalizeConfig(config = {}, type) {
  // TODO: Normalize configuration with defaults in mind
  return Object.assign({}, getDefault(), { style }, config, { type: type || 'date' });
}
