import React from 'react';
import { connect } from 'react-redux';
import { setSearchRadius } from '../../actions/preferences';
import ListIcon from '../ListIcon';
import MapIcon from '../MapIcon';
import CaretIcon from '../CaretIcon';
import Button from '../Button';
import {
  Container,
  IconLink,
  Dropdown,
  DropdownItems,
  DropdownItem,
  PublishToggle,
  BackButton,
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

  renderAction = () => {
    const { location, signalPublished } = this.props;
    if (location.pathname === '/signal') {
      if (signalPublished) {
        return (
          <Button>
            Unpublish
          </Button>
        );
      } else {
        return (
          <Button isAction={true}>
            Publish
          </Button>
        );
      }
    } else {
      return (
        <PublishToggle published={signalPublished} />
      );
    }
  };

  render() {
    const { location, currentUser } = this.props;
    if (location.pathname.indexOf('/signal/') === 0) {
      return (
        <Container>
          <BackButton to="/">
            <CaretIcon />
            Back
          </BackButton>
        </Container>
      );
    } else {
      if (!currentUser.username) return null;
      return (
        <Container>
          {this.renderScreenIcon()}
          {this.renderDropdown()}
          {this.renderAction()}
        </Container>
      );
    }
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
