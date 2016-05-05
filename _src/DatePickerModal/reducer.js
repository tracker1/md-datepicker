
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
    case 'SCREEN':
      return {
        ...state,
        current: Object.assign(
          {},
          state.current,
          { screen: action.payload },
        ),
      };
    case 'SET_CURRENT_YEAR':
      return state; // TODO
    case 'SET_CURRENT_MONTH':
      newState = {...state};
      screen = newState.screen;
      
      // finished with selection
      switch (newState.type) {
        
      }
      if (newState.type === 'month') newState.result = action.payload;
      
      if (new)
      newState.current = Object.assign(
        {},
        newState.current,
        { 
          month: payload.getMonth(),
          screen: newState.current.screen 
        }
      ); 
      
      return state; // TODO
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
