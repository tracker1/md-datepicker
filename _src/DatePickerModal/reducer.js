
const EMPTY = {};

export default (state = EMPTY, action) => {
  switch (action.type) {
    case 'RESULT': return { ...state, result: action.payload };
    case 'ERROR': return { ...state, error: action.payload };
    default: return state;
  }
};
