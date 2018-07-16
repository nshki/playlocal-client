import React from 'react';
import qs from 'qs';
import MenuBar from '../../components/MenuBar';
import Map from '../../components/Map';

class MapScreen extends React.Component {

  render() {
    const params = qs.parse(this.props.location.search.replace('?', ''));
    console.log(params);

    return (
      <React.Fragment>
        <MenuBar />
        <Map />
      </React.Fragment>
    );
  }
}

export default MapScreen;
