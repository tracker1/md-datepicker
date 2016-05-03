import { bind } from 'decko';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(
  state => (state || {}),
  dispatch => bindActionCreators({
    resolveValue: () => ({ type: 'RESULT', payload: new Date() }),
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
    return <div className='dpm-outer' style={style.wrap.outer}>
      <div className='dpm-inner' style={style.wrap.inner}>
        <div className='dpm-inner2' style={style.wrap.inner2}>
          <div className='dpm-choose' style={style.choose}>
            <button onclick={this.raiseError}>Error</button>
            <br />
            <button onclick={this.resolveValue}>Value</button>
            <br /><br />
            <pre style="width:500px;height:200px;overflow:auto;">{JSON.stringify(this.props || 'TODO', null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>;
  }
}
