import getDefault from './defaults';
import style from './style';
import normalizeCurrent from './normalize-current';
import normalizeScreen from './normalize-screen';

export default function normalizeConfig(config = {}, type) {
  let cfg = Object.assign({}, getDefault(), { style }, config, { type: type || 'date' });
  cfg = normalizeCurrent(cfg);
  cfg = normalizeScreen(cfg);

  // function to test if a date-time is valid
  cfg.test = cfg.test || ((/* dtm */) => true);

  return cfg;
}
