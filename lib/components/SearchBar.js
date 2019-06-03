import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleSearch = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { search } = this.state;
    const { store: { doSearch } } = this.props;
    doSearch(search);
  }

  handleClick = () => {
    this.setState({ search: '' }, () => this.handleSubmit(event));
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="search"
            name="search"
            value={search}
            placeholder="search"
            onChange={this.handleSearch}
            onClickCapture={this.handleClick}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  store: PropTypes.shape({
    doSearch: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider(SearchBar);
