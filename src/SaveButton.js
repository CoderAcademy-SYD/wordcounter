import React from 'react';

export default function SaveButton({ onClick }) {
  return (
    <button onClick={onClick} className="pv2 ph3">
      Save
    </button>
  );
}
