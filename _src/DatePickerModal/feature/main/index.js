import { bind } from 'decko';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(
  state => (state || {}),
  dispatch => bindActionCreators({
    resolveValue: () => ({ type: 'RESOLVE', payload: new Date() }),
    raiseError: () => ({ type: 'ERROR', payload: new Error('Test') }),
  }, dispatch)
)
export default class App extends React.Component {
  @bind
  resolveValue(value) {
    this.props.resolveValue(value);
  }

  @bind
  raiseError(error) {
    this.props.raiseError(error);
  }

  render({ style }) {
    return <div style={style.wrap.outer}>
      <div style={style.wrap.inner}>
        <div style={style.choose}>
          <button onclick={this.raiseError}>Error</button>
          <br />
          <button onclick={this.resolveValue}>Value</button>
          <br /><br />
          {JSON.stringify(this.props || 'TODO')}
        </div>
      </div>
    </div>;
  }
}
