import React from 'react';
import MenuBar from './components/MenuBar';
import Map from './components/Map';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MenuBar />
        <Map />
      </React.Fragment>
    );
  }
}

export default App;
