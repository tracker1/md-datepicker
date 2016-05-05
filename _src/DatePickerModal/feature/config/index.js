import getDefault from './defaults';
import style from './style';
import normalizeCurrent from './normalize-current';
import normalizeScreen from './normalize-screen';

export default function normalizeConfig(config = {}, type) {
  // shallow merge defaults, style, passed in config, and type
  let cfg = Object.assign({}, getDefault(), { style }, config, { type: type || 'date' });

  // if cfg.value is a string, attempt to make it a Date.
  if (typeof cfg.value === 'string') cfg.value = new Date(cfg.value) || null;

  // normalize current settings from input
  cfg = normalizeCurrent(cfg);
  cfg = normalizeScreen(cfg);

  if (window.screen.width <= 768 || window.screen.height < 768) cfg.chooseDate.months = 1;

  // shim function to test if a date-time is valid, if it isn't set.
  if (typeof cfg.validDate !== 'function') cfg.validDate = (/* dtm */) => true;

  delete cfg.error;
  delete cfg.result;

  return cfg;
}
