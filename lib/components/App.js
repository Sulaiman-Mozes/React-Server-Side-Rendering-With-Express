import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
import ItemList from './ItemList';
import SearchBar from './SearchBar';
import TimeStamp from './TimeStamp';


class App extends Component {
  static childContextTypes = {
    store: PropTypes.shape({
      lookupAuthor: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    const { store: { getState } } = this.props;
    this.state = getState();
  }

  componentWillMount() {
    const { store: { unsubscribe } } = this.props;
    unsubscribe(this.subscriptionId);
  }

  componentDidMount() {
    const { store: { subscribe, startClock } } = this.props;
    this.subscriptionId = subscribe(this.onStoreChange);
    startClock();
  }

  onStoreChange = () => {
    const { store: { getState } } = this.props;
    this.setState({ ...getState() });
  }

  getChildContext = () => {
    const { store } = this.props;
    return { store };
  }

  render() {
    let { articles } = this.state;
    const { search, timestamp } = this.state;
    if (search) {
      const searchRegX = new RegExp(search, 'i');
      articles = pickBy(articles, value => value.title.match(searchRegX) || value.body.match(searchRegX));
    }
    return (
      <div>
        <TimeStamp timestamp={timestamp} />
        <SearchBar />
        <ItemList articles={articles} />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({
    lookupAuthor: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
