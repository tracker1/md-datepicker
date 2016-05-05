
export const cancel = () => ({ type: 'CANCEL' });

export const resolve = value => ({ type: 'RESULT', payload: value });

export const reject = err => ({ type: 'ERROR', payload: err });

export const changeScreen = (screen) => ({ type: 'SCREEN', payload: screen });

export const setCurrentYear = year => ({ type: 'SET_CURRENT_YEAR', payload: year });
export const setCurrentMonth = month => ({ type: 'SET_CURRENT_MONTH', payload: month });
export const advanceCurrentMonth = offset => ({ type: 'ADVANCE_CURRENT_MONTH', payload: offset });
