import { h, Component } from 'preact';
import { bind } from 'decko';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TodoItem from './todo-item';


@connect(
	state => (state || {}), 
	dispatch => bindActionCreators(actions, dispatch)
)
export default class App extends Component {
	@bind
	addTodos() {
		let { text } = this.state;
		this.setState({ text:'' });
		this.props.addTodo(text);
		return false;
	}

	@bind
	removeTodo(todo) {
		this.props.removeTodo(todo);
	}

	render({ todos }, { text }) {
		return (
			<div id="app">
				<form onSubmit={this.addTodos} action="javascript:">
					<input value={text} onInput={this.linkState('text')} placeholder="New ToDo..." />
				</form>
				<ul>
					{ todos.map( todo => (
						<TodoItem key={todo.id} todo={todo} onRemove={this.removeTodo} />
					)) }
				</ul>
			</div>
		);
	}
}
