import * as D from 'lib/dateutils';

const EMPTY = {};

export default function reducer(state = EMPTY, action) {
  const newState = { ...state, current: Object.assign({}, state.current) };
  let min;
  let max;
  let dtm;

  switch (action.type) {
    case 'CANCEL': return { ...state, result: state.value || -1 };
    case 'RESULT': return { ...state, result: action.payload || -1 };
    case 'ERROR': return { ...state, error: action.payload || new Error() };

    case 'PICK_YEAR':
      newState.current.screen = 'choose-year';
      return newState;

    case 'PICK_MONTH':
      newState.current.screen = 'choose-month';
      newState.current.year = action.payload.getFullYear();
      newState.current.month = 0;
      newState.current.date = 1;
      return newState;

    case 'SET_CURRENT_YEAR':
      newState.current.year = action.payload.getFullYear();
      newState.current.month = 0;
      newState.current.date = 1;
      if (newState.type === 'year') newState.result = action.payload;
      else newState.current.screen = 'choose-month';
      return newState;

    case 'SET_CURRENT_MONTH':
      max = D.maxMonth(D.clone(state.max));
      max.setMonth(max.getMonth() - state.monthsToShow);
      if (action.payload > max) {
        newState.current.month = max.getMonth();
      } else {
        newState.current.month = action.payload.getMonth();
      }
      newState.current.date = 1;

      if (newState.type === 'month') newState.result = action.payload;
      else newState.current.screen = 'choose-date';
      return newState;

    case 'ADVANCE_CURRENT_MONTH':
      min = D.minMonth(state.min);
      max = D.maxMonth(state.max);
      max.setMonth(max.getMonth() - state.monthsToShow);
      dtm = new Date(state.current.year, state.current.month + action.payload, 1);

      // don't advance if out of range
      if (dtm < min || dtm >= max) return state;

      newState.current.year = dtm.getFullYear();
      newState.current.month = dtm.getMonth();
      newState.current.date = 1;

      return newState;

    default:
      return state;
  }
}
