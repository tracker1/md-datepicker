// import { bind } from 'decko';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions';
import ChooseDate from '../choose-date';

export function getElement(screen, props) {
  switch (screen) {
    case 'choose-year': return 'TODO: choose-year';
    case 'choose-month': return 'TODO: choose-month';
    case 'choose-date': return <ChooseDate {...props} />;
    default: return `INVALID SCREEN: ${screen}`;
  }
}

export function renderMain(props /* , context */) {
  const { current } = props.config;
  const actions = props.actions;
  return <div
    className='outer'
  >
    <div
      className='inner'
      onClick={ actions.cancel }
    >
      <div
        className='inner2'
        onClick={ () => true }
      >
        <div
          className='choose'
          onClick={ event => event.stopImmediatePropagation() }
        >
          {getElement(current.screen, props)}
        </div>
      </div>
    </div>
  </div>;
}

export default connect(
  state => ({ config: state || {} }),
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(renderMain);
