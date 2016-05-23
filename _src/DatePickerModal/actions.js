export const resize = () => ({ type: 'WINDOW_RESIZE' });

export const cancel = () => ({ type: 'CANCEL' });

export const resolve = value => ({ type: 'RESULT', payload: value });

export const reject = err => ({ type: 'ERROR', payload: err });

export const pickYear = () => ({ type: 'PICK_YEAR' });
export const pickMonth = (dtm) => ({ type: 'PICK_MONTH', payload: dtm });

export const setCurrentYear = year => ({ type: 'SET_CURRENT_YEAR', payload: year });
export const setCurrentMonth = month => ({ type: 'SET_CURRENT_MONTH', payload: month });
export const advanceCurrentMonth = offset => ({ type: 'ADVANCE_CURRENT_MONTH', payload: offset });
