import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../Counter.js';

describe("Counter", () => {
  it("Displays the count and the label", () => {
    const counter = renderer.create(
      <Counter legend="Count" count={34}/>
    );
    expect(counter.toJSON()).toMatchSnapshot();
  });
});
