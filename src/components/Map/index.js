import React from 'react';
import MapGL, { Marker } from 'react-map-gl';
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

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/nshki/cjjd0nqj47j8k2snn2bgrtqnv"
      >
        <Marker
          longitude={this.state.viewport.longitude}
          latitude={this.state.viewport.latitude}
        >
          <Signal />
        </Marker>
      </MapGL>
    );
  }
}

export default Map;
