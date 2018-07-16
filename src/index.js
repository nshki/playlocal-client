import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './reset.css.js';
import MapScreen from './views/MapScreen';
import registerServiceWorker from './registerServiceWorker';

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_ENDPOINT,
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <Router>
            <Route exact path="/" component={MapScreen} />
          </Router>
        </ApolloProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
