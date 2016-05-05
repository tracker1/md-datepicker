export default function normalizeCurrent(cfg) {
  const current = Object.assign({}, cfg.current || {});
  let tmp = (typeof cfg.value === 'string') ? new Date(cfg.value) : cfg.value;

  // set temp position based on defaults
  if (!tmp) {
    const now = new Date();
    if (now < cfg.min) tmp = cfg.min;
    else if (now > cfg.max) tmp = cfg.max;
    else tmp = now;
  }

  current.year = current.year || tmp.getFullYear();
  current.month = current.month || tmp.getMonth();
  current.date = current.date || tmp.getDate();
  current.hour = current.hour || tmp.getHours();
  current.minute = current.minute || tmp.getMinutes();

  return { ...cfg, current };
}
