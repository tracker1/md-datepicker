import * as D from 'lib/dateutils';

export default function normalizeDates(config) {
  const cfg = { ...config };

  // if cfg.value is a string, attempt to make it a Date.
  cfg.value = D.parse(cfg.value, null);
  cfg.min = D.parse(cfg.min, new Date(1880, 0, 1));
  cfg.max = D.parse(cfg.max, new Date(new Date().getFullYear() + 100, 0, 1))

  return cfg;
}
