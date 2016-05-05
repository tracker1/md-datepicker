import './feature/style';
import initialize from './feature/initialize';

// export { getStyles, setStyles } from './feature/style';
export const year = (options, callback) => initialize(options, callback, 'year');
export const month = (options, callback) => initialize(options, callback, 'month');
export const date = (options, callback) => initialize(options, callback, 'date');
export const datetime = (options, callback) =>
  callback(new Error('Unsupported Option: time chooser'));

export const time = (options, callback) =>
  callback(new Error('Unsupported Option: datetime chooser'));

