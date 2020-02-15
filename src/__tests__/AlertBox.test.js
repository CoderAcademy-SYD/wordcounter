import React from 'react';
import renderer from 'react-test-renderer';
import AlertBox from '../AlertBox';
import { SUCCESS, IDLE } from '../saveStatus';

describe("AlertBox", () => {
  it("Displays the status", () => {
    const counter = renderer.create(
      <AlertBox status={SUCCESS}/>
    );
    expect(counter.toJSON()).toMatchSnapshot();
  });
});

