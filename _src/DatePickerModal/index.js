import { h, render } from 'preact';
import { Provider } from 'react-redux';
//import store from './store';
//import App from './components/app';

export const year = (options, callback) => alert('Year Chooser');
export const month = (options, callback) => alert('Month Chooser');
export const date = (options, callback) => alert('Date Chooser');
export const datetime = (options, callback) => console.log('Unsupported Option: time chooser');
export const time = (options, callback) => console.log('Unsupported Option: datetime chooser');
export default {year,month,date,time,datetime};

/*
render((
	<div id="outer">
		<Provider store={store}>
			<App />
		</Provider>
	</div>
), document.body);
*/