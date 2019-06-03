import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '../../components/SearchBar';


describe('Render Component', () => {
  it('It should render SearchBar Component', () => {
    const context = {
      store: { doSearch: jest.fn, lookupAuthor: jest.fn },
    };
    const wrapper = mount(<SearchBar />, { context: { ...context } });
    expect(wrapper).toMatchSnapshot();
  });
});
