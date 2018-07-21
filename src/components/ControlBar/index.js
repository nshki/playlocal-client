import React from 'react';
import { connect } from 'react-redux';
import { setSearchRadius } from '../../actions/preferences';
import ListIcon from '../ListIcon';
import MapIcon from '../MapIcon';
import CaretIcon from '../CaretIcon';
import {
  Container,
  IconLink,
  Dropdown,
  DropdownItems,
  DropdownItem,
  PublishToggle,
} from './style';

class ControlBar extends React.Component {
  state = { dropdownOpen: false };

  onDropdownClick = (e) => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  onDropdownItemClick = (searchRadius) => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
    this.props.setSearchRadius(searchRadius);
  };

  renderScreenIcon = () => {
    const { location } = this.props;
    if (location.pathname === '/list') {
      return (
        <IconLink to="/">
          <MapIcon />
        </IconLink>
      );
    } else {
      return (
        <IconLink to="/list">
          <ListIcon />
        </IconLink>
      );
    }
  };

  renderDropdown = () => {
    const { location, preferences } = this.props;
    const { dropdownOpen } = this.state;
    if (location.pathname !== '/list') return null;
    return (
      <Dropdown onClick={this.onDropdownClick}>
        Search radius: {preferences.searchRadius} mi
        <CaretIcon />

        <DropdownItems open={dropdownOpen}>
          {[25, 10, 5].map((radiusOption, i) =>
            <DropdownItem
              key={`dropdown-item-${i}`}
              onClick={() => this.onDropdownItemClick(radiusOption)}
            >
              {radiusOption} mi
            </DropdownItem>
          )}
        </DropdownItems>
      </Dropdown>
    );
  };

  render() {
    const { currentUser, signalPublished } = this.props;
    if (!currentUser.username) return null;
    return (
      <Container>
        {this.renderScreenIcon()}
        {this.renderDropdown()}
        <PublishToggle published={signalPublished} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const signalPublished = state.currentUser ?
    state.currentUser.signalPublished :
    false;

  return {
    currentUser: state.currentUser,
    preferences: state.preferences,
    signalPublished,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchRadius: (searchRadius) => dispatch(setSearchRadius(searchRadius)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlBar);
