import { mount } from 'enzyme';
import React from 'react';
import RatingStars, { RatingStar } from '.';

describe('<RatingStars/>', () => {
  let container;
  // TODO Add tests for the App component
  beforeEach(() => {
    container = mount(<RatingStars rating={2} />);
  });

  it('Renders without error', () => {
    expect(container.length).toEqual(1);
    expect(container.find('svg').length).toEqual(10);
  });

  it('Renders with no props', () => {
    container = mount(<RatingStars />);
    expect(container.length).toEqual(1);
  });

  it('Renders with bad props', () => {
    container = mount(<RatingStars rating="undefined" />);
    expect(container.length).toEqual(1);
  });
});
