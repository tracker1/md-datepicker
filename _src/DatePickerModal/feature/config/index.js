import getDefault from './defaults';

export default function normalizeConfig(config={}, type) {
  // TODO: Normalize configuration with defaults in mind
  return Object.assign({}, getDefault(), config, { type: type || 'date' });
}
