import React from 'react';
import { Link } from 'react-router-dom';
import MapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import { getAvatarForCurrentUser } from '../../helpers/users';
import { Container, Signal } from './style';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends React.Component {
  constructor(props) {
    super(props);
    const { geolocation } = props;
    this.container = React.createRef();
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: geolocation ? geolocation.lat : 37.785164,
        longitude: geolocation ? geolocation.lng : -100,
        zoom: 13,
      },
    };
  }

  componentDidMount() {
    const { lat, lng } = this.props;

    // Center on passed coordinates.
    if (lat && lng) {
      setTimeout(() => this.centerOnCoords({ lat, lng }), 0);
    }

    window.addEventListener('resize', this.resize);
    this.resizeInterval = setInterval(this.resize, 1000);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    if (this.resizeInterval) clearInterval(this.resizeInterval);
  }

  componentDidUpdate(prevProps) {
    const { short, lat, lng, geolocation } = this.props;

    // Center on passed coordinates or geolocation coords when they first load.
    if (lat && lng && prevProps.lat !== lat && prevProps.lng !== lng) {
      this.centerOnCoords({ lat, lng });
    } else if (
      geolocation.lat && prevProps.geolocation.lat === null &&
      geolocation.lng && prevProps.geolocation.lng === null
    ) {
      this.centerOnCoords({ lat: geolocation.lat, lng: geolocation.lng });
    }

    // Animate the map size.
    if (short !== prevProps.short) {
      const animateResize = setInterval(() => this.resize(), 1.667);
      setTimeout(() => clearInterval(animateResize), 300);
    }
  }

  resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.container.current.clientWidth,
        height: this.container.current.clientHeight,
      },
    });
  };

  updateViewport = (viewport) => {
    this.setState({ viewport });
  };

  centerOnCoords = ({ lat, lng }) => {
    this.updateViewport({
      ...this.state.viewport,
      latitude: lat,
      longitude: lng,
      zoom: 13,
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
          <Signal
            me
            published={currentUser.signalPublished}
            imageUrl={getAvatarForCurrentUser(currentUser)}
          >
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
    const { short, currentUser, interpolate } = this.props;
    const transitionDuration = interpolate ? 1000 : 0;
    return (
      <Container
        innerRef={this.container}
        short={short}
        signedIn={!!currentUser.username}
      >
        <MapGL
          {...this.state.viewport}
          onViewportChange={this.updateViewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
          transitionDuration={transitionDuration}
          transitionInterpolator={new FlyToInterpolator()}
        >
          {this._renderMe()}
          {this._renderSignals()}
        </MapGL>
      </Container>
    );
  }
}

export default Map;
