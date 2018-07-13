import React from 'react';
import ReactMapGL from 'react-map-gl';
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
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/nshki/cjjd0nqj47j8k2snn2bgrtqnv"
      />
    );
  }
}

export default Map;
