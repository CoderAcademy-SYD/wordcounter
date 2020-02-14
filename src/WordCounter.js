import React from 'react';
import AlertBox from './AlertBox';
import Counter from './Counter';
import ProgressBar from './ProgressBar';
import SaveButton from './SaveButton';
import countWords from './countWords';
import { SUCCESS, FAILURE, WAITING, IDLE } from './saveStatus'

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

export default WordCounter;
