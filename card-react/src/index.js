import React from 'react';
import ReactDOM from 'react-dom';
//import { AppContainer } from 'react-hot-loader';
import Welcome from './Welcome';

ReactDOM.render(
  <Welcome/>,
  document.getElementById('root')
);

/*const render = () => {
    ReactDOM.render( <Welcome/>,document.getElementById('root'));
};

render(Welcome);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./Welcome', () => {
        render(Welcome)
    });
}*/