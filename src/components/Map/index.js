import React from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { geolocated } from 'react-geolocated';
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

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight,
      },
    });
  };

  _updateViewport = (viewport) => {
    this.setState({ viewport });
  };

  _renderMe = () => {
    const { coords } = this.props;

    return (
      coords !== null &&
      <Marker
        longitude={coords.longitude}
        latitude={coords.latitude}
      >
        <Signal me />
      </Marker>
    );
  };

  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        {...viewport}
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
      >
        {this._renderMe()}
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
