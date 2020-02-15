import React from 'react';
import { shallow } from 'enzyme';
import SaveManager from '../SaveManager';
import SaveButton from '../SaveButton';
import AlertBox from '../AlertBox';
import { WAITING } from '../saveStatus';

describe("SaveManager", () => {
  const saveManager = shallow(<SaveManager/>);
  const button = saveManager.find(SaveButton).dive().find('button');
  button.simulate('click', { preventDefault: () => {}});

  it("displays the correct status", () => {
    const alertBox = saveManager.find(AlertBox);
    expect(alertBox.prop("status")).toBe(WAITING);
  });
});
