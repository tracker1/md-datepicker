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
  
  @bind
  cancel() {
    this.props.resolveValue(this.props.value)
  }

  render({ style, value }) {
    return <div
      className='dpm-outer'
      style={ style.wrap.outer }
    >
      <div className='dpm-inner' style={style.wrap.inner} onclick={this.cancel}>
        <div className='dpm-inner2' style={style.wrap.inner2} onclick={this.cancel}>
          <div className='dpm-choose' style={style.choose}>
            <button onclick={this.raiseError}>Error</button>
            <br />
            <button onclick={this.resolveValue}>Value</button>
            <br /><br />
            <pre style="width:500px;height:200px;overflow:auto;">{
              JSON.stringify(this.props || 'TODO', null, 2)
            }</pre>
          </div>
        </div>
      </div>
    </div>;
  }
}
