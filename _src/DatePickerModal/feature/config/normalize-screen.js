export default function normalizeScreen(cfg) {
  const current = Object.assign({}, cfg.current);
  switch (cfg.type) {
    case 'year':
      current.screen = current.screen || 'choose-year';
      break;
    case 'month':
      current.screen = current.screen || 'choose-month';
      break;
    case 'date':
      current.screen = current.screen || 'choose-date';
      break;
    default:
      throw new Error(`Invalid tyoe "${cfg.type.toString()}"`);
  }

  switch (current.screen) {
    case 'choose-year':
    case 'choose-month':
    case 'choose-date':
      // if (cfg.type === 'time') throw new Error('Invalid screen for type "time".');
      break;
    default:
      throw new Error(`Invalid Screen "${current.screen}"`);
  }

  return { ...cfg, current };
}
