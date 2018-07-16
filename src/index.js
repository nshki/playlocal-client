import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './shared/graphql/client';
import CurrentUserQuery from './shared/graphql/userQueries';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import MapScreen from './views/MapScreen';
import registerServiceWorker from './registerServiceWorker';
import './reset.css.js';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <Router>
            <CurrentUserQuery>
              <MenuBar />
              <Route exact path="/" component={MapScreen} />
            </CurrentUserQuery>
          </Router>
        </ApolloProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
