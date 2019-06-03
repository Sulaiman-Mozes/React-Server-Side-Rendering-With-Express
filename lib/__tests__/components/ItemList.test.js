import React from 'react';
import { shallow } from 'enzyme';
import ItemList from '../../components/ItemList';


describe('Render Component', () => {
  it('It should render ItemList Component', () => {
    const props = {
      articles: {
        1: {
          id: 1, title: 'title', date: '', body: 'body',
        },
      },
      store: {
        lookupAuthor: jest.fn,
      },
    };
    const wrapper = shallow(<ItemList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
