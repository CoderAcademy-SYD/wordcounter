import React from 'react';
import SaveButton from './SaveButton';
import AlertBox from './AlertBox';
import { WAITING, IDLE } from './saveStatus'

export default class SaveManager extends React.Component {
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
