import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './reset.css.js';
import MenuBar from './components/MenuBar';
import Map from './components/Map';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <MenuBar />
          <Map />
        </React.Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
