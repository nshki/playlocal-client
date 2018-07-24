import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './shared/graphql/client';
import LoadQuery from './shared/graphql/loadQuery';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Geolocator from './components/Geolocator';
import MenuBar from './components/MenuBar';
import MapScreen from './views/MapScreen';
import SignalScreen from './views/SignalScreen';
import EditSignalScreen from './views/EditSignalScreen';
import EditProfileScreen from './views/EditProfileScreen';
import ListScreen from './views/ListScreen';
import ControlBar from './components/ControlBar';
import SignInOverlay from './views/SignInOverlay';
import MenuOverlay from './views/MenuOverlay';
import CopyModalOverlay from './views/CopyModalOverlay';
import ErrorModalOverlay from './views/ErrorModalOverlay';
import registerServiceWorker from './registerServiceWorker';
import './reset.css.js';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <LoadQuery>
            <Geolocator>
              <BrowserRouter>
                <Route
                  render={({ location }) => (
                    <React.Fragment>
                      <MenuBar />
                      <Route path="/" component={MapScreen} />
                      <TransitionGroup>
                        <CSSTransition key={location.key} classNames="page" timeout={300}>
                          <Switch location={location}>
                            <Route exact path="/signal/:username" component={SignalScreen} />
                            <Route exact path="/list" component={ListScreen} />
                            <Route exact path="/signal" component={EditSignalScreen} />
                            <Route exact path="/profile" component={EditProfileScreen} />
                          </Switch>
                        </CSSTransition>
                      </TransitionGroup>
                      <Route path="/" component={ControlBar} />
                      <SignInOverlay />
                      <MenuOverlay />
                      <CopyModalOverlay />
                      <ErrorModalOverlay />
                    </React.Fragment>
                  )}
                />
              </BrowserRouter>
            </Geolocator>
          </LoadQuery>
        </ApolloProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
