import React from 'react';
import { mount } from 'enzyme';
import Article from '../../components/Article';


describe('Render Component', () => {
  it('It should render Article Component', () => {
    const props = {
      article: { title: 'title', date: '', body: 'body' },
    };
    const context = {
      store: { lookupAuthor: jest.fn },
    };
    const wrapper = mount(<Article {...props} />, { context: { ...context } });
    expect(wrapper).toMatchSnapshot();
  });
});
