
const EMPTY = {};

export default (state = EMPTY, action) => {
  switch (action.type) {
    case 'RESULT': return { ...state, result: action.payload || null };
    case 'ERROR': return { ...state, error: action.payload || null };
    default: return state;
  }
};
