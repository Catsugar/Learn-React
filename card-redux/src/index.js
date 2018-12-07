import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Welcome from './Welcome';
import reducer from './reducers/index';

const store = createStore(reducer);
store.subscribe(() =>
    console.log(store.getState())
);
ReactDOM.render(
	<Provider store={store}>
		<Welcome/>
	</Provider>,
	document.getElementById('root')
);
