import React from 'react';
import { SUCCESS, FAILURE, WAITING, IDLE } from './saveStatus'

export default function AlertBox({ status }) {
  if (status === WAITING) {
    return (<div className='pv2'>Waiting...</div>);
  } else if (status === SUCCESS) {
    return (<div className='pv2'>Successful</div>);
  } else if (status === FAILURE) {
    return (<div className='pv2'>Failed &#x1F61E;</div>);
  } else {
    return (null)
  }
}
