import React from 'react';
import { connect } from 'react-redux';
import { setSearchRadius } from '../../actions/preferences';
import UpdateSignalButton from '../../shared/graphql/updateSignalMutation';
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
    const { preferences } = this.props;
    const { dropdownOpen } = this.state;
    return (
      <Dropdown open={dropdownOpen} onClick={this.onDropdownClick}>
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
      return <UpdateSignalButton />;
    } else {
      return (
        <PublishToggle
          params={{ published: signalPublished }}
          to="/signal"
        />
      );
    }
  };

  render() {
    const { location, currentUser } = this.props;
    if (
      location.pathname.indexOf('/signal/') === 0 ||
      location.pathname.indexOf('/profile') === 0
    ) {
      return (
        <Container>
          <BackButton to="/">
            <CaretIcon />
            Back
          </BackButton>
        </Container>
      );
    } else if (location.pathname === '/signal') {
      return (
        <Container>
          <BackButton to="/">
            <CaretIcon />
            Back
          </BackButton>
          {this.renderAction()}
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
