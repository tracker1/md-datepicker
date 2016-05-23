import getDefault from './defaults';
import normalizeDates from './normalize-dates';
import normalizeCurrent from './normalize-current';
import normalizeScreen from './normalize-screen';

export default function normalizeConfig(config = {}, type) {
  // shallow merge defaults, style, passed in config, and type
  let cfg = Object.assign({}, getDefault(), config, { type: type || 'date' });

  // normalize current settings from input
  cfg = normalizeDates(cfg);
  cfg = normalizeCurrent(cfg);
  cfg = normalizeScreen(cfg);

  cfg.startOfWeek = ~~cfg.startOfWeek;
  if (cfg.startOfWeek > 6 || cfg.startOfWeek < 0) cfg.startOfWeek = 0;

  if (window.screen.width < 900 && cfg.monthsToShow > 2) cfg.monthsToShow = 2;
  if (window.screen.width <= 678 || window.screen.height < 768) cfg.monthsToShow = 1;

  // shim function to test if a date-time is valid, if it isn't set.
  if (typeof cfg.checkDate !== 'function') cfg.checkDate = (/* dtm */) => true;

  delete cfg.result;

  return cfg;
}
