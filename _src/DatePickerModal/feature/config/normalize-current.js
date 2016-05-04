export default function normalizeCurrent(cfg) {
  const tmp = (typeof cfg.value === 'string') ? new Date(cfg.value) || new Date() : new Date();
  const current = Object.assign({}, cfg.current || {});

  current.year = current.year || tmp.getFullYear();
  current.month = current.month || tmp.getMonth();
  current.date = current.date || tmp.getDate();
  current.hour = current.hour || tmp.getHours();
  current.minute = current.minute || tmp.getMinutes();

  return { ...cfg, current };
}
