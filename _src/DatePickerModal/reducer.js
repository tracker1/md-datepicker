
const EMPTY = {};

export default (state = EMPTY, action) => {
  window.console.log('reducer', action, state);

  let newState;
  let min;
  let max;
  let dtm;
  let screen;

  switch (action.type) {
    case 'CANCEL': return { ...state, result: state.value || -1 };
    case 'RESULT': return { ...state, result: action.payload || -1 };
    case 'ERROR': return { ...state, error: action.payload || new Error() };

    case 'PICK_YEAR':
      newState = { ...state, current: Object.assign({}, state.current) };
      newState.current.screen = 'choose-year';
      return newState;
      
    case 'PICK_MONTH':
      newState = { ...state, current: Object.assign({}, state.current) };
      newState.current.screen = 'choose-month';
      newState.current.year = action.payload.getFullYear();
      return newState;
      
    case 'SET_CURRENT_YEAR':
      newState = { ...state, current: Object.assign({}, state.current) };
      state.current.year = action.payload.getFullYear();
      if (state.type === 'year') action.result = action.payload; 
      else newState.current.screen = 'choose-month';
      return newState;
      
    case 'SET_CURRENT_MONTH':
      newState = { ...state, current: Object.assign({}, state.current) };
      newState.current.month = action.payload.getMonth();
      if (newState.type === 'month') newState.result = action.payload;
      else newState.current.screen = 'choose-date';
      return newState;
      
    case 'ADVANCE_CURRENT_MONTH':
      min = new Date(state.min.getFullYear(), state.min.getMonth(), 1);
      max = new Date(
        state.max.getFullYear(),
        state.max.getMonth() + 1 - state.chooseDate.months,
        1
      );
      dtm = new Date(state.current.year, state.current.month + action.payload, 1);

      if (dtm < min || dtm >= max) return state; // don't advance

      return {
        ...state,
        current: Object.assign(
          {},
          state.current,
          { year: dtm.getFullYear(), month: dtm.getMonth() },
        ),
      };

    default: return state;
  }
};
