import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('Render Component', () => {
  it('It should render App Component', () => {
    const props = {
      store: {
        lookupAuthor: jest.fn,
        unsubscribe: jest.fn,
        subscribe: jest.fn,
        doSearch: jest.fn,
        startClock: jest.fn,
        getState: () => ({
          articles: {},
          authors: {},
        }),
      },
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
