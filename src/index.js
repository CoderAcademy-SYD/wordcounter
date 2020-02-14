import React from 'react';
import ReactDOM from 'react-dom';
import WordCounter from './WordCounter';

ReactDOM.render(
  // React.createElement(WordCounter,
  //   { text: "Hello, World", targetWordCount: 10 }
  // ),
  <React.Fragment>
    <WordCounter text="Hello World" targetWordCount={10}/>
  </React.Fragment>,
  document.getElementById('app')
);
