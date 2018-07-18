import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './shared/graphql/client';
import LoadQuery from './shared/graphql/loadQuery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Geolocator from './components/Geolocator';
import MenuBar from './components/MenuBar';
import MapScreen from './views/MapScreen';
import ListScreen from './views/ListScreen';
import ControlBar from './components/ControlBar';
import SignInOverlay from './views/SignInOverlay';
import MenuOverlay from './views/MenuOverlay';
import registerServiceWorker from './registerServiceWorker';
import './reset.css.js';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <LoadQuery>
            <Geolocator>
              <Router>
                <React.Fragment>
                  <MenuBar />
                  <Route exact path="/" component={MapScreen} />
                  <Route exact path="/list" component={ListScreen} />
                  <Route path="/" component={ControlBar} />
                  <SignInOverlay />
                  <MenuOverlay />
                </React.Fragment>
              </Router>
            </Geolocator>
          </LoadQuery>
        </ApolloProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
