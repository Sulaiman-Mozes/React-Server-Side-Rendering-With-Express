class StateApi {
  constructor(data) {
    this.data = {
      articles: this.mapIntoObject(data.articles),
      authors: this.mapIntoObject(data.authors),
      search: '',
      timestamp: new Date(),
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 1;
  }

  mapIntoObject = arr => arr.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});

  lookupAuthor = (authorId) => {
    const { authors } = this.data;
    return authors[authorId];
  };

  doSearch = (search) => {
    this.setState({ search });
  }

  setState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange,
    };
    this.notifySubcribers();
  }

  subscribe = (cb) => {
    this.lastsubscriptionId += 1;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  }

  notifySubcribers = () => {
    Object.values(this.subscriptions).forEach(cb => cb());
  }

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  }

  getState = () => this.data;

  startClock = () => {
    setInterval(() => {
      this.setState({
        timestamp: new Date(),
      });
    });
  }
}
export default StateApi;
