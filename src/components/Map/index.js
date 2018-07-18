import React from 'react';
import MapGL, { Marker } from 'react-map-gl';
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
    const { geolocation } = this.props;

    if (geolocation.lat !== null && geolocation.lng !== null) {
      this.centerOnGeolocation();
    }

    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  componentDidUpdate(prevProps) {
    const { geolocation } = this.props;
    if (
      geolocation.lat !== null && prevProps.geolocation.lat === null &&
      geolocation.lng !== null && prevProps.geolocation.lng === null
    ) {
      this.centerOnGeolocation();
    }
  }

  resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  updateViewport = (viewport) => {
    this.setState({ viewport });
  };

  centerOnGeolocation = () => {
    const { geolocation } = this.props;
    this.updateViewport({
      ...this.state.viewport,
      latitude: geolocation.lat,
      longitude: geolocation.lng,
    });
  };

  _renderMe = () => {
    const { geolocation, currentUser } = this.props;

    if (geolocation.lat !== null && geolocation.lng !== null) {
      return (
        <Marker
          latitude={geolocation.lat}
          longitude={geolocation.lng}
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
        onViewportChange={this.updateViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
      >
        {this._renderMe()}
        {this._renderSignals()}
      </MapGL>
    );
  }
}

export default Map;
