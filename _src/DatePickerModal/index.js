import initialize from './feature/initialize';

export const year = (options, callback) => initialize(options, callback, 'year');
export const month = (options, callback) => initialize(options, callback, 'month');
export const date = (options, callback) => initialize(options, callback, 'day');
export const datetime = (options, callback) =>
  callback(new Error('Unsupported Option: time chooser'));

export const time = (options, callback) =>
  callback(new Error('Unsupported Option: datetime chooser'));

export default { year, month, date, time, datetime };
