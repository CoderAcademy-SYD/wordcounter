import React from 'react';
import ReactDOM from 'react-dom';

const SUCCESS = 201;
const FAILURE = 400;
const WAITING = "WAITING"
const IDLE = "IDLE";

function countWords(text) {
  return text ? text.match(/\w+/g).length : 0;
}

function Counter({ count }) {
  return (
    <p className="mb2">
      Word Count: {count}
    </p>
  );
}

function ProgressBar({ completion }) {
  const percentage = completion;
  return (
    <div className="mv2 flex flex-column">
      <label htmlFor="progress" className="mv2">
        Progress
      </label>
      <progress value={percentage} id="progress" className="bn">
        {percentage}
      </progress>
    </div>
  );
}

function SaveButton({ onClick }) {
  return (
    <button onClick={onClick} className="pv2 ph3">
      Save
    </button>
  );
}

function AlertBox({ status }) {
  return (
    <div>{status}</div>
  );
}

function Editor({ text, onTextChange }) {
  function handleChange(event) {
    onTextChange(event.target.value);
  }

  return (
    <div className="flex flex-column mv2">
      <label htmlFor="editor" className="mv2">
        Enter your text:
      </label>
      <textarea value={text} id="editor" onChange={handleChange}/>
    </div>
  );
}

class SaveManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { saveStatus: IDLE }
    this.save = this.save.bind(this);
  }

  save(event) {
    event.preventDefault();
    this.setState(() => ({ saveStatus: WAITING }));
  }

  render() {
    return (
      <div className="flex flex-column mv2">
        <SaveButton onClick={this.save}/>
        <AlertBox status={this.state.saveStatus}/>
      </div>
    );
  }
}

class WordCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(newText) {
    this.setState(() => ({ text: newText }));
  }

  render() {
    const { targetWordCount } = this.props;
    const { text } = this.state;
    const wordCount = countWords(text);
    const progress = wordCount / targetWordCount;

    return (
      <form className="measure pa4 sans-serif">
        <Editor text={text} onTextChange={this.handleTextChange} />
        <Counter count={wordCount}/>
        <ProgressBar completion={progress}/>
        <SaveManager data={this.state}/>
      </form>
    );
  }
}

ReactDOM.render(
  // React.createElement(WordCounter,
  //   { text: "Hello, World", targetWordCount: 10 }
  // ),
  <React.Fragment>
    <WordCounter text="Hello World" targetWordCount={10}/>
  </React.Fragment>,
  document.getElementById('app')
);

