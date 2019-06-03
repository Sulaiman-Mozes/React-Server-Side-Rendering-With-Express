import React from 'react';
import { shallow } from 'enzyme';
import TimeStamp from '../../components/TimeStamp';


describe('Render Component', () => {
  it('It should render TimeStamp Component', () => {
    const timestamp = new Date();
    const wrapper = shallow(<TimeStamp timestamp={timestamp} />);
    expect(wrapper).toMatchSnapshot();
  });
});
