import React from 'react';
import { Link } from 'react-router-dom';
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
      zoom: 13,
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
    let lat = geolocation.lat;
    let lng = geolocation.lng;

    if (
      currentUser.signalPublished &&
      currentUser.signalLat &&
      currentUser.signalLng
    ) {
      lat = currentUser.signalLat;
      lng = currentUser.signalLng;
    }

    if (lat !== null && lng !== null) {
      return (
        <Marker
          latitude={lat}
          longitude={lng}
        >
          <Signal me imageUrl={getAvatarForCurrentUser(currentUser)}>
            <Link to={`/signal`} />
          </Signal>
        </Marker>
      );
    }

    return false;
  };

  _renderSignals = () => {
    const { signals, currentUser } = this.props;
    return signals.map((signal, i) => {
      if (signal.username === currentUser.username) return null;
      return (
        <Marker
          key={`marker-${i}`}
          latitude={signal.lat}
          longitude={signal.lng}
        >
          <Signal imageUrl={signal.imageUrl}>
            <Link to={`/signal/${signal.username}`} />
          </Signal>
        </Marker>
      );
    });
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
