import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeStamp extends Component {
  shouldComponentUpdate(nextProps) {
    const { timestamp } = this.props;
    return (
      this.timestampDisplay(timestamp)
      !== this.timestampDisplay(nextProps.timestamp));
  }

  timestampDisplay = timestamp => timestamp.toLocaleTimeString('en-US',
    { hour: '2-digit', minute: '2-digit', hour12: true });

  render() {
    const { timestamp } = this.props;
    return (
      <div>
        Current Time
        {' '}
        {this.timestampDisplay(timestamp)}
      </div>
    );
  }
}

TimeStamp.propTypes = {
  timestamp: PropTypes.instanceOf(Date).isRequired,
};

export default TimeStamp;
