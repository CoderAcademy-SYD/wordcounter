import React from 'react';
import SaveButton from './SaveButton';
import AlertBox from './AlertBox';
import { SUCCESS, FAILURE, WAITING, IDLE } from './saveStatus'
import saveWords from './saveWords';

export default class SaveManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { saveStatus: IDLE }
    this.save = this.save.bind(this);
  }

  save(event) {
    event.preventDefault();
    this.setState(() => ({ saveStatus: WAITING }));
    saveWords().then(() => {
      this.setState(() => ({ saveStatus: SUCCESS }));
    },
    () => {
      this.setState(() => ({ saveStatus: FAILURE }));
    });
    setTimeout(() => { this.setState({ saveStatus: IDLE })}, 3500);
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
