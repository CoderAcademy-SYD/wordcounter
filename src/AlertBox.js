import React from 'react';
import { SUCCESS, FAILURE, WAITING, IDLE } from './saveStatus'

export default function AlertBox({ status }) {
  if (status === WAITING) {
    return (<div>Waiting...</div>);
  } else {
    return (<div>{status}</div>);
  }
}
