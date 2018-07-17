import React from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { geolocated } from 'react-geolocated';
import { getAvatarForCurrentUser } from '../../helpers/users';
import { Signal } from './style';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends React.Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 37.785164,
      longitude: -100,
      zoom: 8,
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  componentDidUpdate(prevProps) {
    if (this.props.coords !== null && prevProps.coords === null) {
      this._updateViewport({
        ...this.state.viewport,
        latitude: this.props.coords.latitude,
        longitude: this.props.coords.longitude,
      });
    }
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  _updateViewport = (viewport) => {
    this.setState({ viewport });
  };

  _renderMe = () => {
    const { coords, currentUser } = this.props;

    if (coords) {
      return (
        <Marker
          latitude={this.props.coords.latitude}
          longitude={this.props.coords.longitude}
        >
          <Signal me imageUrl={getAvatarForCurrentUser(currentUser)} />
        </Marker>
      );
    }

    return false;
  };

  _renderSignals = () => {
    const { signals } = this.props;
    return signals.all.map((signal, i) => (
      <Marker
        key={`marker-${i}`}
        latitude={signal.lat}
        longitude={signal.lng}
      >
        <Signal imageUrl={signal.imageUrl} />
      </Marker>
    ));
  };

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
      >
        {this._renderMe()}
        {this._renderSignals()}
      </MapGL>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  watchPosition: true,
})(Map);
