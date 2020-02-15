import React from 'react';
import { shallow } from 'enzyme';
import WordCounter from '../WordCounter.js';
import Editor from '../Editor.js';
import Counter from '../Counter';
import countWords from '../countWords';
import ProgressBar from '../ProgressBar';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('WordCounter', () => {
  const target = 10;
  const inputString = "one two three";
  const wordCounter = shallow(<WordCounter targetWordCount={target}/>);
  const textarea = wordCounter.find(Editor).dive().find('textarea');
  textarea.simulate('change', { target: { value: inputString }});

  it("displays the correct count as a number", () => {
    const counter = wordCounter.find(Counter);
    expect(counter.prop("count")).toBe(countWords(inputString));
  });

  it("displays the correct progress", () => {
    const progressBar = wordCounter.find(ProgressBar);
    expect(progressBar.prop("completion")).toBe(countWords(inputString)/target);
  });
});
