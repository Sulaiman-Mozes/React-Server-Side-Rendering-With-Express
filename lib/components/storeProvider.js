/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = Component => class extends React.Component {
  static displayName = `${Component}Container`;

  static contextTypes = {
    store: PropTypes.shape({
      lookupAuthor: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { store } = this.context;
    return (<Component {...this.props} store={store} />);
  }
};


export default storeProvider;
